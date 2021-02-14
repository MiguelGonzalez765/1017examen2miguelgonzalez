<template>

      <div>
        <h1 class="projets">MES PROJETS</h1>
          <ul>
          <li v-for="(projet, i) in listeProjets" :key="i">
            {{ projet.nom}}: {{ projet.langage}}
          </li>
          </ul>
    </div>
</template>

<script>
export default {
  name: "Projet",
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
  margin-left: 50px;
  text-align: center;
}
</style>