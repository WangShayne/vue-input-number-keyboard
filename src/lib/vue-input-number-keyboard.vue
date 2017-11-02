<template>
    <div class="keyboard" :class="{'show':show}">
        <div class="key-area">
            <div class="key" v-for="(item,index) in keyList" 
                :class="{
                    'transparent':(!item.value || item.value=='del'),
                    'del':item.value=='del',
                    'b-1px-t':true,
                    'b-1px-r':(index+1)%3!=0
                }" 
                @click="inputNumber(item.value)"
                v-html="item.value">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"vueInputNumberKeyboard",
        props:{
            show:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                keyList:[
                    {key:1,value:"1"},
                    {key:2,value:"2"},
                    {key:3,value:"3"},
                    {key:4,value:"4"},
                    {key:5,value:"5"},
                    {key:6,value:"6"},
                    {key:7,value:"7"},
                    {key:8,value:"8"},
                    {key:9,value:"9"},
                    {key:"",value:""},
                    {key:0,value:"0"},
                    {key:"del",value:'del'}
                ]
            }
        },
        methods:{
            inputNumber(value){
                if(value){
                    this.$emit("Input",value)
                }
            }
        }
    }
</script>

<style scoped>
    .keyboard{
        position: fixed;
        left: 0;
        bottom: 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 5000;
        width: 100%;
        background-color: #efeff4;
        -webkit-transition: -webkit-transform .3s;
        transition: -webkit-transform .3s;
        transition: transform .3s;
        transition: transform .3s,-webkit-transform .3s;
    }
    .keyboard.show{
        -webkit-transform: translate(0);
        transform: translate(0);
    }
    .key-area{
       display: flex;
       flex-wrap: wrap; 
       justify-content: flex-end;
    }
    .key{
        width:33.3333%;
        height:50px;
        line-height: 50px;
        background:#fff;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size:22px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .key:active{
        background: #F8F8FF;
    }
    .key.transparent{
        background:transparent;
    }
    .key.del{
        background-image: url("../assets/del.png");
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: center center;
        text-indent:-999px;
    }
    .b-1px,
    .b-1px-t,
    .b-1px-b,
    .b-1px-tb,
    .b-1px-l,
    .b-1px-r {
        position: relative;
    }
    .b-1px:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 1px;
        border: 1px solid #C7C7C7;
        color: #C7C7C7;
        height: 200%;
        transform-origin: left top;
        transform: scale(0.5);
    }
    .b-1px-t:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #C7C7C7;
        color: #C7C7C7;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    .b-1px-b:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #C7C7C7;
        color: #C7C7C7;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    .b-1px-tb:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #C7C7C7;
        color: #C7C7C7;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    .b-1px-tb:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #C7C7C7;
        color: #C7C7C7;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    .b-1px-l:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid #C7C7C7;
        color: #C7C7C7;
        transform-origin: 0 0;
        transform: scaleX(0.5);
    }
    .b-1px-r:after {
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-right: 1px solid #C7C7C7;
        color: #C7C7C7;
        transform-origin: 100% 0;
        transform: scaleX(0.5);
    }
</style>

