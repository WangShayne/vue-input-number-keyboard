import vueNumberKeyboard from "./vue-number-keyboard.vue"

const numberKeyboard = {
    install(Vue,options){
        Vue.component(vueNumberKeyboard.name,vueNumberKeyboard)
    }
}

if(typeof window !== "undefined" && window.Vue){
    window.Vue.use(numberKeyboard)
}

export default numberKeyboard