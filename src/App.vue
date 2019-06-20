<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Heroes</router-link> |
      <router-link to="/my-heroes">My Heroes</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#app #nav{
  height: 45px;
  background: #000;
  text-transform: lowercase;
  
  font-size: 30px;
  padding-top: 15px;
  color: #fff;
}

#app #nav a{
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  
}

#app #nav a.router-link-exact-active{
  color: gold;
}
</style>
