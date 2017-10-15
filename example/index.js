import React from 'react'
import { render } from 'react-dom'
import Common from './Common'
import SubStep from './SubStep'
import DoneContent from './DoneContent'
import EventHandler from './EventHandler'
import './index.scss'

const Example = () => (
  <div className="container">
    <div className="section">
      <h4>Common</h4>
      <Common />
    </div>
    <div className="section">
      <h4>Sub Step</h4>
      <SubStep />
    </div>
    <div className="section">
      <h4>Done content</h4>
      <DoneContent />
    </div>
    <div className="section">
      <h4>Event Handler</h4>
      <EventHandler />
    </div>
  </div>
)

render(<Example />, document.getElementById('app'))
