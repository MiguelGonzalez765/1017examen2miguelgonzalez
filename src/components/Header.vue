<template lang="html">

  <section class="header">

  <ul>
      <div>
        <li>        
          <router-link to="/"></router-link>
<!-- renders to -->
                <a href="Accueil">Accueil</a>

        </li>  
        <li>        
          <router-link to="Projet"></router-link>
<!-- renders to -->
                <a href="Projet">Projet</a>

        </li> 
        <li>        
          <router-link to="Contact"></router-link>
<!-- renders to -->
                <a href="Contact">Contact</a>

        </li>
        
       
      </div>  
       
  </ul>
  <router-view></router-view>  
 </section>
 
</template>




<style scoped>
li:hover,
li.router-link-active,
li.router-link-exact-active {
   background-color: #3f3d3d;
   cursor: pointer;
   
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #101213;
  box-shadow:0 1px 1px #ccc;
  border-radius:2px;
}
li,
li:last-child {
  border-right: none;
}
li {
  float: left;
}
li, .link{
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}
a   {
  color: rgb(247, 242, 244);
  text-decoration:none;
}


 </style>