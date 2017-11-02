import vueInputNumberKeyboard from "./vue-input-number-keyboard.vue"

const inputNumberKeyboard = {
    install(Vue,options){
        Vue.component(vueInputNumberKeyboard.name,vueInputNumberKeyboard)
    }
}

if(typeof window !== "undefined" && window.Vue){
    window.Vue.use(inputNumberKeyboard)
}

export default inputNumberKeyboard