<template>
  <div class="row">
    <div id="logo" class="col-6 col-lg-2 logo">
      RensR
    </div>
    <div class="col-6 col-lg-10 text-end pt-3">
      <ul class="main-menu d-none d-sm-none d-lg-block">
        <li v-for="item in menuDesktop" :key="item.id">
          <a :href="item.link">{{ $t(item.name) }}</a>
        </li>
        <li>
          <font-awesome-icon icon="fas fa-earth-americas" class="color-sec" />
          <select v-model="$i18n.locale" @change="saveLangConf();">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
              {{ locale }}
            </option>
          </select>
        </li>
      </ul>
      <div id="menu-mobile-button" class="main-menu-mobile d-inline-block d-md-inline-block d-lg-none d-xl-none">
        <div class="d-inline-block" v-on:click="toggleMenuMobile()" >
          <font-awesome-icon icon="fas fa-bars" />
        </div>
      </div>

      <Transition name="mobile-menu" enter-active-class="animate__animated animate__bounceInDown" leave-active-class="animate__animated animate__bounceOutUp" >
      <div class="menu-caixa-mobile" v-if="menuMobileStatus==true" >
        <div class="mobile-caixa">
          <div class="fechar-mobile-caixa" v-on:click="toggleMenuMobile()">
            <font-awesome-icon icon="far fa-times-circle" />
          </div>
          <ul class="main-menu">
            <li v-for="item in menuMobile" :key="item.id">
              <a v-on:click="toggleMenuMobile()" :href="item.link">{{ $t(item.name) }}</a>
            </li>
          </ul>
        </div>
      </div>
      </Transition>

    </div>
  </div>
</template>

<script>

export default {
  name: "MainMenu",
  props: {
    lang_cookie: String,
  },
  data() {
    return {
      menuDesktop: [
        {link: "#", name: 'Home', target: ""},
        {link: "#about", name: "Sobre Mi", target: ""},
        {link: "#skills", name: "Habilidades", target: ""},
        {link: "#resume", name: "Exp. Laboral", target: ""},
        {link: "#portfolio", name: "Portafolio", target: ""},
        {link: "#contact", name: "Contacto", target: ""},
      ],
      menuMobile: [
        {link: "#", name: "Home", target: ""},
        {link: "#about", name: "sobre Mi", target: ""},
        {link: "#skills", name: "Habilidades", target: ""},
        {link: "#resume", name: "Exp. Laboral", target: ""},
        {link: "#portfolio", name: "Portafólio", target: ""},
        {link: "#contact", name: "Contacto", target: ""},
      ],

      menuMobileStatus: false,
    }
  },
  methods: {
    toggleMenuMobile() {

      this.menuMobileStatus = !this.menuMobileStatus;
      // $(".menu-caixa-mobile").addClass("animate__bounceInDown");
      // $(".menu-caixa-mobile").removeClass("animate__bounceOutUp");
      // $(".menu-caixa-mobile").removeClass('d-none');
    },
    saveLangConf() {
      if (this.lang_cookie) {
        document.cookie = "lang_cookie=" + this.$i18n.locale;
      }
    },
    loadLangConf() {
      if (this.lang_cookie) {
        let lang_cookie = this.$parent.getCookieValues("lang_cookie");
        if (lang_cookie.value != null) {
          console.log("cookie encontrada");
          this.$i18n.locale = lang_cookie.value;
        }
      }
    },
  },
  created() {
    this.loadLangConf();
  },




}
</script>

<style scoped>

</style>