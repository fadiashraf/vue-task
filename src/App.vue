<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

.padding_h{
  padding-left: 6vw;
  padding-right: 6vw;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
