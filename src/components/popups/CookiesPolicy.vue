<template>

  <!--main cookies-->
  <div id="cookies-main" class="cookies-main" v-if="screen==1">
    <div class="cookies-title"><h4>{{ $t("Esta web utiliza Cookies") }}</h4></div>
    <div class="cookies-desc">{{ $t("Hola, mi portafolio online utiliza algunas cookies para mejorar y optimizar el contenido que deseo mostrarte. No te preocupes, podrás volver a modificar tu configuración desde el footer de esta web cuando quieras.") }}</div>
    <div class="cookies-buttons">
      <button class="btn btn-outline-light ver-cookies" @click="screen = 2">{{ $t("Personalizar") }}</button>
      <button class="btn btn-success accept-cookies" @click="allowAll()">{{ $t("Aceptar todas") }}</button>
      <div><div class="customize-cookies" @click="refuseAll()">{{ $t("Rechazar todas") }}</div></div>
    </div>
  </div>

  <!--cookies category details-->
  <div id="cookies-conf-main" class="cookies-main" v-else-if="screen==2">
    <div class="cookies-title"><h4><font-awesome-icon icon="fas fa-arrow-left" class="float-start cookies-back-main px-2" @click="screen = 1" /> {{ $t("Configuración de cookies") }}</h4></div>
    <div class="cookies-desc">
      <div class="row">
        <div class="cookie-item col-12" v-for="(cookie, index) in cookies_policy.cookies_details" :index="index" :key="cookie.id">
          {{ $t(cookie.category) }} <font-awesome-icon icon="fas fa-circle-info" @click="screen = 3; checkCookies(index);" class=" cookies-back-main" />
          <div class="form-check form-switch d-inline-block">
            <input class="form-check-input" v-model="cookie.allowLevel" type="checkbox" role="switch" checked :disabled="cookie.required">
          </div>
        </div>

      </div>

    </div>
    <div class="cookies-buttons">
      <button class="btn btn-success accept-cookies" @click="saveConfig()">{{ $t("Guardar configuración") }}</button>
    </div>
  </div>

  <!--cookies category description details-->
  <div id="cookies-info-main" class="cookies-main" v-else-if="screen==3">
    <div class="cookies-title"><h4><font-awesome-icon icon="fas fa-arrow-left" class="float-start cookies-back-main px-2" @click="screen = 2" /> {{ $t(cookies_policy.cookies_details[cookies_details_info].category) }}</h4></div>
    <div class="cookies-desc">{{ $t(cookies_policy.cookies_details[cookies_details_info].description) }}</div>
    <div><div class="customize-cookies" @click="screen=4">{{ $t("Ver cookies") }}</div></div>
  </div>


  <!--cookies individual details-->
  <div id="cookies-details-info-main" class="cookies-main" v-else-if="screen==4">
    <div class="cookies-title"><h4><font-awesome-icon icon="fas fa-arrow-left" class="float-start cookies-back-main px-2" @click="screen = 2" /> {{ $t(cookies_policy.cookies_details[cookies_details_info].category) }} ({{ $t("Detalles") }})</h4></div>
    <div class="cookie-item col-12" v-for="(cookie_details, index) in cookies_policy.cookies_details[cookies_details_info].cookies" :index="index" :key="cookie_details.id">
      {{ $t(cookie_details.name) }} <font-awesome-icon icon="fas fa-circle-info" @click="screen=5; cookies_individual_info=index" class=" cookies-back-main" />
      <div class="form-check form-switch d-inline-block">
        <input class="form-check-input" type="checkbox" role="switch" v-model="cookie_details.allow" checked :disabled="cookie_details.required">
      </div>
    </div>
  </div>

  <!--cookies individual info-->
  <div id="cookies-individual-info-main" class="cookies-main" v-else-if="screen==5">
    <div class="cookies-title"><h4><font-awesome-icon icon="fas fa-arrow-left" class="float-start cookies-back-main px-2" @click="screen = 4" /> {{ $t(cookies_policy.cookies_details[cookies_details_info].category) }} ({{ $t("Detalles") }})</h4></div>
    <div class="cookies-desc">{{ $t(cookies_policy.cookies_details[cookies_details_info].cookies[cookies_individual_info].description) }}</div>
  </div>

</template>

<script>


export default {
  name: "CookiesPolicy",
  props: {
    lls: String
  },
  data() {
    return {
      screen: 1,
      cookies_policy: {
        allow_level: true,
        cookies_details: [
          {
            category: "Cookies Técnicas",
            description: "Estas cookies garantizan el buen funcionamiento de mi portafolio online, son usadas para ejecutar funciones vitales como por ejemplo la seguridad y la navegación. Por ese motivo son obligatorias.",
            allowLevel: true,
            required: true,
            cookies: [
              {
                name: "_grecaptcha",
                description: "Esta cookie es usada por Google Recaptcha, es necesaria para la seguridad y la integridad de mi portafólio online.",
                allow: true,
                required: true
              },
              {
                name: "cookies_policy",
                description: "Esta cookie es usada por mi portafolio online para recordar su desición sobre el uso de cookies y ajustar la web a su configuración de privacidad de datos.",
                allow: true,
                required: true
              },
              {
                name: "cookies_policy_signature",
                description: "Esta es una cookie de seguridad para firmar la cookie de política de cookies.",
                allow: true,
                required: true
              },

            ]
          },
          {
            category: "Cookies Analíticas",
            description: "",
            allowLevel: true,
            required: false,
            cookies: [
              {
                name: "_ga",
                description: "Esta cookie es usada por Google Analytics para distinguir a los usuarios y me permite almacenar el numero de veces que mi portafolio online ha sido visitado.",
                allow: true,
                required: false
              }
            ]
          },
          {
            category: "Cookies de Personalización",
            description: "Son aquéllas que le permitirán acceder a mi portafolio online con algunas características predefinidas y que dependiendo de las características de su dispositiov y/o navegador, servirán para ofrecer un mejor servicio, sirven por ejemplo para configurar el idioma, para adaptar el contenido al navegador/dispositivo que está utilizando, para guardar su configuración regional, etc.",
            allowLevel: true,
            required: false,
            cookies: [
              {
                name: "lang_cookie",
                description: "Esta cookie propia de mi portafolio online y sirve para recordar el idioma que configuró.",
                allow: true,
                required: false,
              }
            ]
          }
        ],
      },
      cookies_details_info: 0,
      cookies_individual_info: 0,
    }
  },
  methods: {
    allowAll()
    {
      let vue = this;
      vue.screen = 0;
      vue.cookies_policy.allow_level = true;
      vue.saveCookie();

      setTimeout(() => {
        vue.$emit('revalidate-cookies');
      }, 500);
    },
    refuseAll()
    {
      let vue = this;
      vue.screen = 0;
      vue.cookies_policy.allow_level = false;

      //disallow all cookies
      vue.cookies_policy.cookies_details.forEach(function (cookie_category) {
        cookie_category.allowLevel = false;
        cookie_category.cookies.forEach(function (cookie) {
          cookie.allow = false;
        });
      });

      vue.saveCookie();
      setTimeout(() => {
        vue.$emit('revalidate-cookies');
      }, 500);
    },
    saveConfig()
    {
      let vue = this;
      vue.screen = 0;
      vue.cookies_policy.allow_level = 2;

      vue.saveCookie();
      setTimeout(() => {
        vue.$emit('revalidate-cookies');
      }, 500);
    },
    checkCookies(cookies_categ){
      this.cookies_details_info = cookies_categ;
    },
    saveCookie(){
      let json_cookies_policy = JSON.stringify(this.cookies_policy);

      const lls = this.lls;

      let encryptedData = this.$CryptoJS.AES.encrypt(json_cookies_policy, lls).toString();

      //add = to the end of the encrypted data if it doesn't have it
      if(encryptedData.charAt(encryptedData.length-1) != "=")
      {
        encryptedData += "=";
      }

      const signature = this.$CryptoJS.HmacSHA256(encryptedData, lls).toString();



      const currentDate = new Date();
      const expirationDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days in millisecs

      // Guardar los datos, la firma y la fecha de expiración en la cookie
      document.cookie = `cookies_policy=${encryptedData}; expires=${expirationDate.toUTCString()}; path=/; domain=rensr.pt`;
      document.cookie = `cookies_policy_signature=${signature}; expires=${expirationDate.toUTCString()}; path=/; domain=rensr.pt`;

      window.location.reload();
    }
  },
  mounted()
  {

  }
}
</script>

<style scoped>
  .cookie-item .form-switch{
    min-height: initial;
    margin-bottom: 0px;
    margin-left: 20px;
    margin-bottom: -2px;
  }

  .cookie-item{
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .cookies-main
  {
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: var(--quar-dark);
    color: #ffffff;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    display: inline-block;
    width: 500px;
    border-radius: 10px;
    max-width: 100%;
    z-index: 10;
  }

  .cookies-buttons .btn-outline-warning:hover
  {
    color: var(--quar-dark);
    border-color: var(--quar-dark);
  }


  .cookies-back-main:hover, .cookies-info-button:hover
  {
    cursor: pointer;
    color: var(--sec-green);
  }


  @media (min-width: 500px)
  {
    .cookies-main
    {
      bottom: 10px;
      right: 10px;
    }
  }

  .cookies-title
  {
    padding: 10px;
  }

  .cookies-desc
  {
    padding: 20px;
    padding-top: 0px;
    padding-bottom: 10px;
    font-size: 14px;
    text-align: justify;
  }

  .cookies-buttons button
  {
    margin: 0px 5px;
    margin-bottom: 10px;
  }

  .cookies-buttons .btn-success
  {
    background-color: var(--sec-green);
  }

  .cookies-buttons .btn-success:hover
  {
    color: #ffffff;
    background-color: var(--sec-green);
  }

  .customize-cookies
  {
    color: #ffffff;
    cursor: pointer;
    display: inline-block
  }

  .customize-cookies:hover
  {
    text-decoration: underline;
    color: var(--sec-green);
  }
</style>