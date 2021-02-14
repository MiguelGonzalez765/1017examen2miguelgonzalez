<template>
<div>
 <h1> Contact-moi</h1>
  <section class="container cont">
    <div class="row">
  <form v-on:submit.prevent class="col-6 m-auto text-left">
    <div class="form-group">
      <label for="nom">Nom: </label>
      <input type="text"  class="form-control" name="nom" id="nom">
    </div>

    <div class="form-group">
      <label for="prenom">Prénom:</label>
      <input type="text" class="form-control" name="prenom" id="prenom">
    </div>

    <div class="form-group">
      <label for="courriel">Courriel:</label>
      <input type="email" class="form-control" name="courriel" id="courriel">
    </div>

    <div class="form-group">
      <label for="cateorie">Catégorie</label>
      <select name="categorie" id="cateorie" class="form-control">
      <option v-for="categorie in categories" :key="categorie.nom">{{ categorie.nom}}</option>
      </select>
    </div>
    <button type="button" class="btn btn-primary">Soumettre</button>
  </form>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "contact",
  props: [],
  mounted () {
    },
  data() {
    return {
      categories: [
        {nom: "Notes"},
        {nom: "Travails"},
        {nom: "Cours"},
        {nom: "Activités"}
      ]
    }
  }
}
</script>

<style scoped>
.cont{
  border: solid 2px;
  color: rgb(61, 59, 59);
}
.form-group{
margin-top: 20px;

}
label{
  margin-right: 10px;
}
.btn{
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>