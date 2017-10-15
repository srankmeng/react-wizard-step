import React from 'react'
import WizardStep from 'react-wizard-step'

const TestComponent = ({ children }) => (<div>{ children }</div>)
const Common = () => (
  <WizardStep>
    <TestComponent title="Title 1" subTitle="Sub title 1">
      Content 1
    </TestComponent>
    <TestComponent title="Title 2" subTitle="Sub title 2">
      Content 2
    </TestComponent>
    <TestComponent title="Title 3" subTitle="Sub title 3">
      Content 3
    </TestComponent>
  </WizardStep>
)

export default Common
