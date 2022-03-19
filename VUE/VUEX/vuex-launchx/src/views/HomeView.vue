<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <contador/>
    <cuadrado/>
    <botnoes/>
  </div>
</template>

<script>
import contador from "../components/contador.vue"
import cuadrado from "../components/cuadrado.vue"
import botnoes from "../components/botnoes.vue"

export default {
  name: 'HomeView',
  components:{
    contador, 
    cuadrado,
    botnoes
  }
}
</script>

<style>

div{
  margin-bottom: 10px;
}

.contador{
  font-size: 80px;
}

.botnoes button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.cuadrado{
  font-size: 40px;
}

</style>
