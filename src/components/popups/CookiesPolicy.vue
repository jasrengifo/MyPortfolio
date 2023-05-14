<template>
  <div id="cookies-main" class="cookies-main" v-if="screen==1">
    <div class="cookies-title"><h4>Esta web utiliza Cookies</h4></div>
    <div class="cookies-desc">Hola, mi portafolio online utiliza algunas cookies para mejorar y optimizar el contenido que deseo mostrarte. No te preocupes, podrás volver a modificar tu configuración desde el footer de esta web cuando quieras.</div>
    <div class="cookies-buttons">
      <button class="btn btn-outline-light ver-cookies" @click="screen = 2">Personalizar</button>
      <button class="btn btn-success accept-cookies" @click="allowAll()">Aceptar todas</button>
      <div><div class="customize-cookies" @click="refuseAll()">Rechazar todas</div></div>
    </div>
  </div>

  <div id="cookies-conf-main" class="cookies-main" v-else-if="screen==2">
    <div class="cookies-title"><h4><font-awesome-icon icon="fas fa-arrow-left" class="float-start cookies-back-main px-2" @click="screen = 1" /> Configuración de cookies</h4></div>
    <div class="cookies-desc">
      <div class="row">
        <div class="cookie-item col-12">
          Cookies técnicas <font-awesome-icon icon="fas fa-circle-info" class=" cookies-back-main" />
          <div class="form-check form-switch d-inline-block">
            <input class="form-check-input" type="checkbox" role="switch" checked disabled>
          </div>
        </div>

        <div class="cookie-item col-12">
          Cookies analíticas <font-awesome-icon icon="fas fa-circle-info" class=" cookies-back-main" />
          <div class="form-check form-switch d-inline-block">
            <input class="form-check-input" type="checkbox" role="switch" checked>
          </div>
        </div>

        <div class="cookie-item col-12">
          Cookies de personalización <font-awesome-icon icon="fas fa-circle-info" class=" cookies-back-main" />
          <div class="form-check form-switch d-inline-block">
            <input class="form-check-input" type="checkbox" role="switch" checked>
          </div>
        </div>

      </div>

    </div>
    <div class="cookies-buttons">
      <button class="btn btn-success accept-cookies">Guardar configuración</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookiesPolicy",
  data() {
    return {
      screen: 1,
    }
  },
  methods: {
    allowAll()
    {
      this.screen = 0;

      localStorage.setItem('cookies-policy', 'true');

      setTimeout(() => {
        this.$emit('revalidate-cookies');
      }, 500);
    },
    refuseAll()
    {
      this.screen = 0;
      // save in localstorage
      localStorage.setItem('cookies-policy', 'false');

      setTimeout(() => {
        this.$emit('revalidate-cookies');
      }, 500);
    }
  },
  mounted()
  {
    //for testes unset cookies-policy
    // localStorage.removeItem('cookies-policy');
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
    background-color: #191e21;
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
    color: #191e21;
    border-color: #191e21;
  }


  .cookies-back-main:hover, .cookies-info-button:hover
  {
    cursor: pointer;
    color: #1CB698;
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
    background-color: #1CB698;
  }

  .cookies-buttons .btn-success:hover
  {
    color: #ffffff;
    background-color: #12705a;
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
    color: #1CB698;
  }
</style>