import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import StepComponent from '../../components/WizardStep'

class WizardStep extends Component {
  static propTypes = {
    afterDoneComponent: PropTypes.any,
    isShowStepBar: PropTypes.bool,
    isShowNumber: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      handler: PropTypes.func,
    })),
  }

  static defaultProps = {
    isShowStepBar: true,
    isShowNumber: true,
  }

  state = {
    currentStep: 1,
    maxStep: this.props.children.length,
    stepAble: 1,
    isDone: false,
    stepList: [],
    currentIndex: 1,
    maxIndex: 0,
  }

  componentDidMount = () => {
    const stepList = this.generateStepList(this.props.children)
    this.setState({
      stepList,
      maxIndex: stepList.length,
    })
  }

  goToStep = (stepNumber) => {
    let step = stepNumber
    if (step > this.state.stepAble) {
      step = this.state.stepAble
    }
    const indexOfStep = this.state.stepList.findIndex(item => item.step === step)
    this.setState({
      currentStep: step,
      currentIndex: indexOfStep + 1,
    })
  }

  beforeIncreaseStep = (callback) => {
    if (callback) {
      if (callback() !== false) {
        this.increaseStep()
      }
    } else {
      this.increaseStep()
    }
  }

  increaseStep = () => {
    const { currentStep, maxStep, stepList, currentIndex, maxIndex } = this.state
    let nextIndex = currentIndex + 1
    let nextStep = currentStep + 1
    if (this.isIncreaseStep(stepList, currentIndex)) {
      if (nextStep > maxStep) {
        nextStep = maxStep
      }
      this.setState({
        currentStep: nextStep,
        stepAble: nextStep,
      })
    }

    if (nextIndex > maxIndex) {
      nextIndex = maxIndex
    }
    this.setState({ currentIndex: nextIndex })
  }

  decreaseStep = () => {
    const { currentStep, stepList, currentIndex } = this.state
    let prevIndex = currentIndex - 1
    let prevStep = currentStep - 1

    if (this.isDecreaseStep(stepList, currentIndex)) {
      if (prevStep < 1) {
        prevStep = 1
      }
      this.setState({ currentStep: prevStep })
    }

    if (prevIndex < 1) {
      prevIndex = 1
    }
    this.setState({ currentIndex: prevIndex })
  }

  isIncreaseStep = (stepList, currentIndex) => {
    return !stepList[currentIndex - 1].isSub || stepList[currentIndex - 1].subStep >= stepList[currentIndex - 1].maxSubStep
  }

  isDecreaseStep = (stepList, currentIndex) => {
    return !stepList[currentIndex - 1].isSub || stepList[currentIndex - 1].subStep <= 1
  }

  doneStep = (callback) => {
    this.setState({ isDone: true })
    if (callback) {
      callback()
    }
  }

  generateStepClass = (indexItem) => {
    const currentStep = this.state.currentStep
    let stepClass = ''
    if (indexItem < currentStep) {
      stepClass = 'done'
    } else if (indexItem === currentStep) {
      stepClass = 'doing'
    }
    return stepClass
  }

  generateStepList = (stepList) => {
    const result = stepList.map((item, i) => {
      if (typeof item.props.children === 'object') {
        return item.props.children.map((subItem, j) => ({
          step: i + 1,
          component: subItem,
          title: subItem.props.title,
          subTitle: subItem.props.subTitle,
          isSub: true,
          subStep: j + 1,
          maxSubStep: item.props.children.length,
          handler: subItem.props.handler,
        }))
      }
      return {
        step: i + 1,
        component: item,
        title: item.props.title,
        subTitle: item.props.subTitle,
        isSub: false,
        subStep: 0,
        maxSubStep: 0,
        handler: item.props.handler,
      }
    })
    return _.flattenDeep(result)
  }

  render() {
    const { afterDoneComponent, isShowStepBar, isShowNumber } = this.props
    const { currentStep, currentIndex, isDone, maxStep, stepList } = this.state

    return (
      <StepComponent
        stepList={stepList}
        maxStep={maxStep}
        currentStep={currentStep}
        currentIndex={currentIndex}
        generateStepClass={ indexItem => this.generateStepClass(indexItem)}
        goToStep={ indexItem => this.goToStep(indexItem)}
        increaseStep={callback => this.beforeIncreaseStep(callback)}
        decreaseStep={() => this.decreaseStep()}
        doneStep={callback => this.doneStep(callback)}
        afterDoneComponent={afterDoneComponent}
        isDone={isDone}
        isShowStepBar={isShowStepBar}
        isShowNumber={isShowNumber}
      />
    )
  }
}

export default WizardStep
