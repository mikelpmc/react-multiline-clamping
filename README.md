## React Multiline Clamping

React component that uses the css line clamping to truncate given text in specified lines.

[Codesandbox demo](https://codesandbox.io/embed/react-multiline-clamp-luw4q)

#### Getting started

```shell
npm install react-multiline-clamp
```

#### Usage

```jsx
import React from 'react';
import Clamp from 'react-multiline-clamp';

const MyComponent = () => {
  return (
    <Clamp withTooltip withToggle lines={2}>
      <p>Multiline text</p>
    </Clamp>
  );
};
```

#### [See browser support](https://caniuse.com/#feat=mdn-css_properties_-webkit-line-clamp)

##### Author: Mikel Parra <mikelpmc@gmail.com> | <http://github.com/mikelpmc>
