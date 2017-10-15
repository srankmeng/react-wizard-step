import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const WizardStep = ({
  stepList,
  maxStep,
  currentStep,
  currentIndex,
  generateStepClass,
  goToStep,
  decreaseStep,
  increaseStep,
  doneStep,
  afterDoneComponent,
  isDone,
  isShowStepBar,
  isShowNumber,
}) => {
  const previousBtn = <a className="button button-previous" onClick={() => decreaseStep()}>Previous</a>
  const nextBtn = <a className="button button-next" onClick={() => increaseStep(stepList[currentIndex - 1].handler)}>Next</a>
  const doneBtn = <a className="button button-done" onClick={() => doneStep(stepList[stepList.length - 1].handler)}>Done</a>
  const stepBar = (
    <ul className="step-progress">
      {
        [...Array(maxStep)].map((item, i) => (
          <li
            key={i}
            className={`step ${generateStepClass(i + 1)}`}
            onClick={() => goToStep(i + 1)}
          >
            {i + 1}
          </li>
        ))
      }
    </ul>
  )
  const stepNumber = (
    <div className="step-display">
      { currentStep } / { maxStep }
    </div>
  )

  return (
    <div className="step-container">
      {
        !isDone || !afterDoneComponent ? (
          <div>
            <p className="step-title">{stepList.length ? stepList[currentIndex - 1].title : ''}</p>
            <p className="step-sub-title">{stepList.length ? stepList[currentIndex - 1].subTitle : ''}</p>
            { isShowStepBar ? stepBar : null }
            <div className="step-content">
              {stepList.length ? stepList[currentIndex - 1].component : null}
            </div>
            <div className="step-footer">
              { isShowNumber ? stepNumber : null }
              <div className="step-btn-group">
                { currentStep > 1 ? previousBtn : null }
                { currentStep < maxStep ? nextBtn : doneBtn }
              </div>
            </div>
          </div>
        ) : afterDoneComponent
      }
    </div>
  )
}

WizardStep.propTypes = {
  stepList: PropTypes.arrayOf(React.PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    component: PropTypes.any,
    handler: PropTypes.func,
    isSub: PropTypes.bool,
    maxSubStep: PropTypes.number,
    step: PropTypes.number,
    subStep: PropTypes.number,
  })),
  maxStep: PropTypes.number,
  currentStep: PropTypes.number,
  currentIndex: PropTypes.number,
  generateStepClass: PropTypes.func,
  goToStep: PropTypes.func,
  decreaseStep: PropTypes.func,
  increaseStep: PropTypes.func,
  doneStep: PropTypes.func,
  afterDoneComponent: PropTypes.any,
  isDone: PropTypes.bool,
  isShowStepBar: PropTypes.bool,
  isShowNumber: PropTypes.bool,
}

export default WizardStep
