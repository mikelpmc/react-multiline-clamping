import React from 'react';
import Clamp from './lib';

function Example() {
    return (
        <div>
            <h1>Multiline clamp example</h1>

            <Clamp
                withToggle
                texts={{ showMore: 'Moreeee', showLess: 'Menos' }}
                lines={2}
                maxLines={8}
                withTooltip={false}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum perspiciatis ea consequuntur ipsum deleniti placeat
                    sit accusamus architecto omnis, ipsam sapiente pariatur
                    officia voluptatum dolorem expedita labore eveniet
                    voluptatem quasi. Consectetur ducimus cum saepe voluptatum,
                    obcaecati rerum assumenda placeat aut accusantium
                    dignissimos dolor facere officia delectus corrupti
                    perferendis laboriosam deserunt nobis, suscipit autem atque?
                    Eius minima commodi nostrum illum ut? Aliquam illum quaerat
                    illo dolorum explicabo voluptates asperiores assumenda
                    aperiam totam repudiandae, deserunt nisi, quae ea ipsam ut,
                    ipsa quidem animi unde expedita voluptate? Alias a possimus
                    rerum soluta. Assumenda. Odio ad dignissimos a repellat qui
                    reiciendis at quia voluptatum, provident assumenda rem vero
                    soluta vitae dolor quisquam libero deserunt delectus. Optio
                    eos veritatis fuga accusamus laborum nisi, magnam ad?
                    Repudiandae, quaerat mollitia aliquam officia quod, voluptas
                    asperiores optio quia suscipit illo tempora, accusantium
                    repellat magnam laborum. Laudantium neque aliquam corporis,
                    modi, minus aspernatur voluptatem commodi, dolorem at nobis
                    reprehenderit?
                </p>
            </Clamp>
        </div>
    );
}

export default Example;
