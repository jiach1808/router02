<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'A page'
    }
  }
}
</script>


<style scoped>
h1{
  color:red;
}
</style>
