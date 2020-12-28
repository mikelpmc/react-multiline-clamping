# React Multiline Clamping

React component that uses the css line clamping to truncate given text in specified lines.

[Codesandbox demo](https://codesandbox.io/embed/react-multiline-clamp-luw4q)

## Features
- 🎉 Uses the css line clamp property
- 😱 It works both with plain text and HTML/Components
- 💥 Show more/less behaviour
- 👂 Listens to text and lines changes and respond accordingly
- ⚙️ Easy-to-use component API

## Installation

```shell
npm install react-multiline-clamp
```

#### Basic example

```jsx
import Clamp from 'react-multiline-clamp';

const MyComponent = () => {
  return (
    <Clamp withTooltip lines={2}>
      <p>Multiline text</p>
    </Clamp>
  );
};
```

### With show more/less

```jsx
import Clamp from 'react-multiline-clamp';

const MyComponent = () => {
  return (
    <Clamp withTooltip lines={2} withToggle maxLines={11} >
      <p>Multiline text</p>
    </Clamp>
  );
};
```

## API

|     Name    |           Type          |                           Default                           |                                                                   Description                                                                   |
|:-----------:|:-----------------------:|:-----------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------:|
|   children  |         Element         |                                                             | The expected element to which the ellipsis would be applied. It could be plain text or any HTML/Component.                                      |
|    lines    |          Number         |                              2                              | The number of lines we want the text to be truncated to                                                                                         |
|   maxLines  |          Number         |                              8                              | The maximum number of lines we want to show after clicking on showMore button                                                                   |
| withTooltip |         Boolean         |                             true                            | Indicates if we want the text to have a tooltip title                                                                                           |
|  withToggle |         Boolean         |                            false                            | Indicates if we want to have the show more/less buttons                                                                                         |
|    texts    |          Object         |    texts: {     showMore: 'More',     showLess: 'Less'    } | The texts of the show more/less buttons                                                                                                         |
|  onShowMore | (isExpanded) => Boolean |                           () => {}                          | A callback function that gets calls every time we click on the show more/less buttons. It returns whether the text is expanded or not (Boolean) |
#### [See browser support](https://caniuse.com/#feat=mdn-css_properties_-webkit-line-clamp)

##### Author: Mikel Parra <mikelpmc@gmail.com> | <http://github.com/mikelpmc>
