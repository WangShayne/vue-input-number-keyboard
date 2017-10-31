<template>
  	<div id="app">
    	<vueNumberKeyboard :show="showKeyboard" @Input="getValue"></vueNumberKeyboard>
    	<button @click="toggle">ON/OFF</button>
    	<h1>{{str}}</h1>
  	</div>
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

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
button {
  font-size: 20px;
  background: #2c3e50;
  color: #fff;
}
</style>
