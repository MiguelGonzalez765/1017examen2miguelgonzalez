
<template>

<div class="footer">
  
  <div v-show="currentYear">Copyright © Miguel Gonzalez.   {{ currentYear }} All rights reserved</div>
</div>
</template>
<script>
export default {
name: "CurrentDate",
data: () => ({
    currentYear: "",
}),

props: {
  msg: String,
},
methods: {
  
  
  getCurrentYear: function () {
    return new Date().getFullYear();
  },
},
mounted: function () {
  this.currentYear = this.getCurrentYear();
},
};
</script>

<style>
.footer{
   background-color: #333;
    color: blanchedalmond;
     padding: 23px 30px; 
    margin-top: 20px;
}
</style>