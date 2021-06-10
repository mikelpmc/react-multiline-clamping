import React, { useState } from 'react';
import Clamp from './lib';

const initialText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Illum perspiciatis ea consequuntur ipsum deleniti placeat
sit accusamus architecto omnis, ipsam sapiente pariatur
officia voluptatum dolorem expedita labore eveniet
voluptatem quasi. Consectetur ducimus cum saepe voluptatum,
obcaecati rerum assumenda placeat aut accusantium
dignissimos dolor facere officia delectus corrupti
perferendis laboriosam deserunt nobis, suscipit autem atque?`;

function Example() {
    const [text, setText] = useState(initialText);
    const [lines, setLines] = useState(2);

    return (
        <div>
            <h1>Multiline clamp example</h1>
            <div>
                <textarea
                    value={text}
                    cols={4}
                    rows={4}
                    onChange={ev => setText(ev.target.value)}
                    style={{ width: '100%', height: '150px' }}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={lines}
                    onChange={ev => setLines(ev.target.value)}
                />
            </div>

            <Clamp
                showMoreElement={({ toggle }) => (
                    <button type="button" onClick={toggle}>
                        Show more
                    </button>
                )}
                showLessElement={({ toggle }) => (
                    <span type="button" onClick={toggle}>
                        menossssss
                    </span>
                )}
                lines={lines}
                maxLines={8}
                withToggle
                onShowMore={show => console.log(show)}
            >
                <p>{text}</p>
            </Clamp>
        </div>
    );
}

export default Example;
