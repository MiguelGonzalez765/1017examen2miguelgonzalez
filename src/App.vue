<template>
  <div id="app">
    <Header/>
    <!-- The directive v-show is used to conditionally render a block. The block will only be rendered if the directive’s expression returns a truthy value. -->
    <Accueil v-show="okAccueil"/>
    <Profile v-show="okProfile"/>
    <Footer/>
  </div>
</template>
<!--https://vuejs.org/v2/guide/conditional.html#v-if-vs-v-show -->
<script>
import Accueil from './views/Accueil.vue'
import Profile from './views/Profile.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  data: function () {
    return{
       loggedIn: false,
        
    }
    
  }, 
  components: {
    Accueil,
    Profile,
    Header,
    Footer
  },
  created() {
      if(this.loggedIn){
        this.okAccueil=false;
        this.okProfile=true;
      } else{
        this.okProfile=false;
        this.okAccueil=true;
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>