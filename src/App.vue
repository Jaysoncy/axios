<template>
  <div id="app">
    <div>{{result}}</div>
    <h2>--------------</h2>
    <hello-world/>
  </div>
</template>

<script>
  import axios from 'axios'
  import HelloWorld from './components/HelloWorld'
  export default {
    name: 'App',
    components: {
      HelloWorld 
    },
    data() {
      return {
        result: ''
      }
    },
      //生命周期函数created：在组件创建后执行
    created() {
        axios({
            url: 'http://123.207.32.32:8000//home/multidata'
        }).then(res => {
            this.result = res;
        })
    }
  }
</script>
