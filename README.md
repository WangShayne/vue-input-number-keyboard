# vue-number-keyboard
> 数字键盘组件/Input number component


## API
#### Props
| name          |     type      |           default         |       description      |
|:-------------:|:-------------:|:-------------------------:|   :-----------------:  |
| show          | `Boolean`     |             false         |      Toggle keyboard   |

#### Methods
| name              |  params                                       | description  |
| :-------------:   |:----------------------------------------:     |:-------------:|
| input             |                                               |get input value |

## GIF


## Usage

``` 
npm install vue-input-number-keyboard
```

main.js

```
import vueNumberKeyboard from "vue-input-number-keyboard"
Vue.use(vueNumberKeyboard)
```
A.vue

```
<template>
    <vueNumberKeyboard :show="showKeyboard" @Input="getValue"></vueNumberKeyboard>
    <button @click="toggle">ON/OFF</button>
    <h1>{{str}}</h1>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                showKeyboard: false,
                arr: []
            };
        },
        computed:{
            str(){
                return this.arr.join("")
            }
        },
        methods: {
            toggle() {
                this.showKeyboard = !this.showKeyboard;
            },
            getValue(val) {
                if (val !== "del") {
                    this.arr.push(val);
                } else {
                    this.arr.pop();
                }
            }
        }
    };
</script>
```

