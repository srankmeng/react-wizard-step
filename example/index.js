import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import Common from './Common'
import SubStep from './SubStep'
import DoneContent from './DoneContent'
import EventHandler from './EventHandler'

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  .section {
    padding: 20px 50px;
    border-bottom: 1px solid #ddd;
  }
`

const Example = () => (
  <Container className="container">
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
  </Container>
)

render(<Example />, document.getElementById('app'))
