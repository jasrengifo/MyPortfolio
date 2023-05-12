<template>
  <header>
    <div id="header">
      <div class="container">
        <!-- Main Menu -->
        <main-menu></main-menu>
      </div>
      <MyPresentation></MyPresentation>
    </div>
  </header>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <AboutMe></AboutMe>

  <MySkills></MySkills>

  <MyResume></MyResume>

  <MyPortfolio></MyPortfolio>

  <ContactNow></ContactNow>

  <FooterPage></FooterPage>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainMenu from './components/header/MainMenu.vue'
import MyPresentation from "@/components/header/MyPresentation";
import AboutMe from "@/components/HomePage/AboutMe";
import MySkills from "@/components/HomePage/MySkills";
import MyResume from "@/components/HomePage/MyResume";
import MyPortfolio from "@/components/HomePage/MyPortfolio";
import ContactNow from "@/components/HomePage/ContactNow";
import FooterPage from "@/components/FooterPage";



export default {
  name: 'App',
  components: {
    // HelloWorld
    MainMenu,
    MyPresentation,
    AboutMe,
    MySkills,
    MyResume,
    MyPortfolio,
    ContactNow,
    FooterPage
  }
  //variables



}
</script>

<style>
#app {

}
</style>
