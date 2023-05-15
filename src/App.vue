<template>
<!--  <header>-->
<!--    <div id="header">-->
<!--      <div class="container">-->
<!--        &lt;!&ndash; Main Menu &ndash;&gt;-->
<!--        <main-menu></main-menu>-->
<!--      </div>-->
<!--      <MyPresentation></MyPresentation>-->
<!--    </div>-->
<!--  </header>-->
<!--&lt;!&ndash;  <HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;-->
<!--  <AboutMe></AboutMe>-->

<!--  <MySkills></MySkills>-->

<!--  <MyResume></MyResume>-->

<!--  <MyPortfolio></MyPortfolio>-->

<!--  <ContactNow></ContactNow>-->

<!--  <FooterPage></FooterPage>-->

  <CookiesPolicy @revalidate-cookies="revalidateCookies()" v-if="cookiesRequested == false"></CookiesPolicy>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MainMenu from './components/header/MainMenu.vue'
// import MyPresentation from "@/components/header/MyPresentation";
// import AboutMe from "@/components/HomePage/AboutMe";
// import MySkills from "@/components/HomePage/MySkills";
// import MyResume from "@/components/HomePage/MyResume";
// import MyPortfolio from "@/components/HomePage/MyPortfolio";
// import ContactNow from "@/components/HomePage/ContactNow";
// import FooterPage from "@/components/FooterPage";
import CookiesPolicy from "@/components/popups/CookiesPolicy";



export default {
  name: 'App',
  components: {
    // HelloWorld
    // MainMenu,
    // MyPresentation,
    // AboutMe,
    // MySkills,
    // MyResume,
    // MyPortfolio,
    // ContactNow,
    // FooterPage,
    CookiesPolicy
  },
  data() {
    return {
      cookiesAccepted: false,
      cookiesRequested: false,
      lls: 'K3ZyUcK2ZKqKgYGI6ELj58Is02vBy5BPWtk9RflUuemWMS1Ue/R3M/47LCOYwELUmKVbPh2nHSqHpvzf04qRly9fDxgCp/tqoqD4+inrZqyAqH4BrGwF40sQ2JBIydmnMku3IDneOm5WSolW9GtjzgL9gMLiRwhek7q8O+YK8kA=',
      allowed_cookies: [

      ],
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

        if(cookieName=="cookies_policy"){

          if (name === 'cookies_policy') {
            cookieValue = value+"=";
          } else if(name === 'cookies_policy_signature') {
            cookieSignature = value;
          }

        }


      }

      return { value: cookieValue, signature: cookieSignature };
    },
    revalidateCookies()
    {
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


        console.log(cookiesPolicy);
      } else {
        console.log("La firma de la cookie no es válida.");
      }

      if (value === null)
      {
        this.cookiesAccepted = false;
        this.cookiesRequested = false;
      }else if(value === 'false') {
        this.cookiesAccepted = false;
        this.cookiesRequested = true;
      }else{
        this.cookiesAccepted = true;
        this.cookiesRequested = true;
      }

    },

  },
  created() {
    this.revalidateCookies();
  },



}
</script>

<style>
#app {

}
</style>
