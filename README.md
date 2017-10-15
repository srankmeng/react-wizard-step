# react-wizard-step

Wizard step build with React.

### Installation

```bash
npm install react-wizard-step
```

### Example

```js
import React from 'react'
import WizardStep from 'react-wizard-step'

const Example = () => (
  <WizardStep>
    <Component title="Title 1" subTitle="Sub title 1" />
    <Component title="Title 2" subTitle="Sub title 2" />
    <Component title="Title 3" subTitle="Sub title 3" handler={() => alert('success')} />
  </WizardStep>
)

export default Example
```

### Options

|    Property    | Type |          Description          | Default |
| -------------  | ---- |          -----------          | ------- |
| afterDoneComponent  | any | Component after when done was clicked | --- |
| isShowStepBar  | bool | Show step bar | true |
| isShowNumber  | bool | Show number of step | true |
| children  | shape({title:string, subTitle:string, handler:func}) | Children component each step | --- |
