<template>
  <footer class="bg-ter pt-4 pb-4 position-relative">
    <div class="subir">
      <a href="#">
        <div>Top <font-awesome-icon icon="fas fa-arrow-up" /></div>
      </a>
    </div>
    <div class="container">
      <div class="row pt-2">
        <div class="col-lg-12 text-center">© Copyright {{ current_year }} <strong class="color-sec">RensR</strong>. All rights reserved. <DeleteAllCookies></DeleteAllCookies></div>
      </div>
    </div>
  </footer>
</template>

<script>
import DeleteAllCookies from "@/components/buttons/DeleteAllCookies.vue";
export default {
  name: "FooterPage",
  components: {
    DeleteAllCookies
  },
  data() {
    return {
      current_year: new Date().getFullYear(),
    }
  }
}
</script>

<style scoped>

</style>