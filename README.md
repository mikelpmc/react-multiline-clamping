# React Multiline Clamping

React component that uses the css line clamping to truncate given text in specified lines.

[Codesandbox demo](https://codesandbox.io/embed/react-multiline-clamp-luw4q)

## Features

-   🎉 Uses the css line clamp property
-   😱 It works both with plain text and HTML/Components
-   💥 Integrated show more/less behaviour
-   👂 Listens to text and lines changes and responds accordingly
-   ⚙️ Easy-to-use Composable component API
-   🌳 Tiny size
## Installation

```shell
npm install react-multiline-clamp
```

### The library gives you three composable components to use inside the Clamp component as children

- Clamp.Text
- Clamp.ShowMore
- Clamp.ShowLess

<br />

You can compose this three components inside the Clamp in the order you desire, this way you can put the show more/less elements above the text for example.

<br />

### Basic example

```jsx
import Clamp from 'react-multiline-clamp';

const MyComponent = () => {
    return (
        <Clamp withTooltip lines={2}>
            <Clamp.Text>
                <p>Multiline text</p>
            </Clamp.Text>
        </Clamp>
    );
};
```

### With show more/less behaviour

```jsx
import Clamp from 'react-multiline-clamp';

const MyComponent = () => {
    return (
        <Clamp lines={2} maxLines={6} withToggle>
            <Clamp.Text>
                <p>Multiline text</p>
            </Clamp.Text>

            <Clamp.ShowMore>
                <button type="button" onClick={() => console.log("Custom event")}>
                    Show more
                </button>
            </Clamp.ShowMore>

            <Clamp.ShowLess />
      </Clamp>
    );
};
```
## API

|      Name        |          Type           |               Default               |                                                                   Description                                                                   |
| :-------------:  | :---------------------: | :---------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|    children      |         Element         |                                     |                    The expected element to which the ellipsis would be applied. It could be plain text or any HTML/Component                    |
|      lines       |         Number          |                  2                  |                                             The number of lines we want the text to be truncated to                                             |
|    maxLines      |         Number          |                  8                  |                                  The maximum number of lines we want to show after clicking on showMore button                                  |
|   withTooltip    |         Boolean         |                true                 |                                              Indicates if we want the text to have a tooltip title                                              |
|   withToggle     |         Boolean         |                false                |                                             Indicates if we want to have the show more/less actions                                             |
|   Clamp.Text     |         Element         |                                     |                                                   Component to put the text you want to apply the ellipsis to                                   |
|   Clamp.ShowMore |         Element         |              button                 |                                                   Component render the show more element                                                        |
|   Clamp.ShowLess |         Element         |              button                 |                                                   Component render the show less element                                                        |
|   onShowMore     | (isExpanded) => Boolean |              () => {}               | A callback function that gets calls every time we click on the show more/less buttons. It returns whether the text is expanded or not (Boolean) |

#### [See browser support](https://caniuse.com/#feat=mdn-css_properties_-webkit-line-clamp)

##### Author: Mikel Parra <mikelpmc@gmail.com> | <http://github.com/mikelpmc>
