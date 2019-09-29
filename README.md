## React Clamping

React component that uses the css line clamping to truncate given text in specified lines

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

##### Author: Mikel Parra <mikelpmc@gmail.com> | <http://github.com/mikelpmc>
