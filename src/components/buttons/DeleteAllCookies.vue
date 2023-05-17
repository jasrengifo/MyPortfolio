<template>
  <div class="d-inline-block delete-cookies-button" @click="deleteAllCookies()">{{ $t("Revocar configuración de cookies") }}</div>
</template>

<script>
export default {
  name: "DeleteAllCookies",
  methods: {
    deleteAllCookies(){
      let cookies = document.cookie.split(";");

      //disable google analytics for this session
      this.$gtag.optOut();

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let igualPos = cookie.indexOf("=");
        let nombre = igualPos > -1 ? cookie.substr(0, igualPos) : cookie;
        document.cookie = nombre.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=rensr.pt; path=/;";
        document.cookie = nombre.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }

      window.location.reload();
    }
  }
}
</script>

<style scoped>
.delete-cookies-button{
  cursor: pointer;
  color: #1CB698;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 5px;
}

.delete-cookies-button:hover{
  color: #fff;
  text-decoration: underline;
}

</style>