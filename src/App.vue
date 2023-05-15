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

  <CookiesPolicy @revalidate-cookies="revalidateCookies()" :lls="lls" v-if="cookiesRequested == false"></CookiesPolicy>
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
import CookiesPolicy from "@/components/popups/CookiesPolicy";



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
    FooterPage,
    CookiesPolicy
  },
  data() {
    return {
      cookiesAccepted: false,
      cookiesRequested: false,
      lls: 'K3ZyUcK2ZKqKgYGI6ELj58Is02vBy5BPWtk9RflUuemWMS1Ue/R3M/47LCOYwELUmKVbPh2nHSqHpvzf04qRly9fDxgCp/tqoqD4+inrZqyAqH4BrGwF40sQ2JBIydmnMku3IDneOm5WSolW9GtjzgL9gMLiRwhek7q8O+YK8kA=',
      allowed_cookies: null,
    }
  },
  methods: {
    getCookieValues(cookieName) {
      const cookieString = document.cookie;
      const cookies = cookieString.split("; ");

      let cookieValue = null;
      let cookieSignature = null;

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const name = decodeURIComponent(cookie[0]).trim();
        const value = decodeURIComponent(cookie[1]);

        if (cookieName == "cookies_policy") {

          if (name === 'cookies_policy') {
            cookieValue = value;

            //add = to the end of the value if it is not there
            if (cookieValue.substr(cookieValue.length - 1) !== '=') {
              cookieValue += '=';
            }
          } else if (name === 'cookies_policy_signature') {
            cookieSignature = value;
          }

        }


      }

      return {value: cookieValue, signature: cookieSignature};
    },
    revalidateCookies() {
      // For check accepted cookies
      // Validate if cookies_policy is true, else
      // Validate if cookie_details are true, else
      // Validate each cookie for check if are allowed or not

      let {signature, value} = this.getCookieValues('cookies_policy');


      const isValidSignature = this.$CryptoJS.HmacSHA256(value, this.lls).toString() === signature;


      if (isValidSignature) {
        // Desencriptar los datos
        const decryptedData = this.$CryptoJS.AES.decrypt(value, this.lls).toString(this.$CryptoJS.enc.Utf8);

        // Analizar el JSON
        const cookiesPolicy = JSON.parse(decryptedData);


        this.allowed_cookies = cookiesPolicy;
      } else {
        console.log("the cookies policy signature is not valid");
      }

      if (value === null) {
        this.cookiesAccepted = false;
        this.cookiesRequested = false;
      } else if (value === 'false') {
        this.cookiesAccepted = false;
        this.cookiesRequested = true;
      } else {
        this.cookiesAccepted = true;
        this.cookiesRequested = true;
      }

    },
    thisCookieIsAllowed(cookie_name) {

      //If user not configured cookies then return false
      if (this.allowed_cookies == null || this.allowed_cookies == undefined || this.allowed_cookies == '') {
        return false;
      }

      //if user configured cookies allow all then return true
      if (this.allowed_cookies.allow_level == true) {
        return true;
      }



      let temp_cookie_category_status = false;
      let temp_cookie_status = false;
      let is_cookie_here = false;
      for (let i = 0; i < this.allowed_cookies.cookies_details.length; i++) {

        temp_cookie_category_status = this.allowed_cookies.cookies_details[i].allowLevel;

        for (let a = 0; a < this.allowed_cookies.cookies_details[i].cookies.length; a++){
          if (this.allowed_cookies.cookies_details[i].cookies[a].name == cookie_name) {
            temp_cookie_status = this.allowed_cookies.cookies_details[i].cookies[a].allow;
            is_cookie_here = true;
            break;
          }
        }


        //If cookie is in this category and this category is disallow return false
        if (temp_cookie_category_status == false && is_cookie_here == true){
          return false;
        }
        //if is in this category and category is allowed and tempo_cookie_status is allowed then return true
        else if(temp_cookie_status == true && is_cookie_here == true) {
          return true;
        }


      }

      //If user configured cookies disallow all the CookiesPolicy will set all cookies options to false then return this false
      return false;

    },
  },
    mounted() {
      this.revalidateCookies();
      console.log(this.thisCookieIsAllowed("lang_cookie"));

    },




}
</script>

<style>
#app {

}
</style>
