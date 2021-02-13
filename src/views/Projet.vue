<template>
<div>
          <ul>
          <li v-for="(projet, i) in listeProjets" :key="i">
            {{ projet.nom}}: {{ projet.description}}
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
</style>