<template>

      <div>
        
        <h1 class="projets"> {{"Projets" | traduire(lang)}}</h1>
          <ul>
          <li v-for="(projet, i) in listeProjets" :key="i">
            {{ projet.nom}}: {{ projet.langage}}
          </li>
          </ul>
    </div>
</template>

<script>
import {TRANSLATIONS} from '../mixins/TRANSLATIONS';
export default {
  name: "Projet",
   mixins: [TRANSLATIONS],
  data() {
    return {
      listeProjets: [
        { nom: "SpotiQuebec", langage:"REACT"},
        { nom: "Clinique Vétérinaire",langage: " PHP"},
        { nom: "Agence de voyages", langage: "Angular"},
         { nom: "Celda", langage: "Ccs"},
         { nom: "Photociti", langage: "Javascript"},
         { nom: "Gestionnaire de nouvelles", langage: "Php"},

      ]
    }
  }
}
</script>

<style scoped>
li{
  padding: 5px;
  margin: 2px;
  list-style-type: none;
}
.projets{
  margin-top: 50px;
  margin-left: 50px;
  text-align: center;
}
</style>