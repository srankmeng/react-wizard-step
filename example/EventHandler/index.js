import React from 'react'
import WizardStep from 'react-wizard-step'

const TestComponent = ({ children }) => (<div>{ children }</div>)
const EventHandler = () => (
  <WizardStep>
    <TestComponent title="Title 1" subTitle="Sub title 1" handler={() => alert('step 1')}>
      Content 1
    </TestComponent>
    <TestComponent title="Title 2" subTitle="Sub title 2" handler={() => alert('step 2')}>
      Content 2
    </TestComponent>
    <TestComponent title="Title 3" subTitle="Sub title 3" handler={() => alert('step 3')}>
      Content 3
    </TestComponent>
  </WizardStep>
)

export default EventHandler
