<template>
  <section id="about" class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 section-title text-center mt-2"><div class="d-inline-block titulo">{{ $t("Sobre mi") }}</div></div>

        <div class="resume">
          <p>
            <strong>{{ $t("Hola, soy Jhon.") }}</strong> {{
              $t("Llevo alrededor de 6 años desarrollando aplicaciones web de forma activa y profesional, Me describo como alguien bastante analítico desde el punto de vista lógico. Me gusta probar y aprender nuevas tecnologías a medida que se van actualizando para comprobar si pueden ayudarme a optimizar mi trabajo y a su vez ofrecer mayor calidad.") }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="col-lg-12 section-title2"><div class="d-inline-block titulo2">{{ $t("Datos Personales") }}</div></div>
          <div class="row">
            <div class="col-lg-12 mb-1">
              <strong class="flt">{{ $t("Cumpleaños") }}</strong> 25-12-1994
            </div>
            <div class="col-lg-12 mb-1">
              <strong class="flt">{{ $t("Teléfono") }}</strong> +351 932 862 263
            </div>
            <div class="col-lg-12 mb-1">
              <strong class="flt">{{ $t("Email") }}</strong> Jhon960@hotmail.es
            </div>
            <div class="col-lg-12 mb-1">
              <strong class="flt">{{ $t("Ubicación") }}</strong> Ourém, Portugal
            </div>
            <div class="col-lg-12 mb-1">
              <strong class="flt">{{ $t("Status") }}</strong> {{ $t("Contratado por") }} <strong class="color-sec">Trigénius</strong>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="col-lg-12 section-title2"><div class="d-inline-block titulo2">{{ $t("Mis Intereses") }}</div></div>
          <div class="row">

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-gamepad" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Juegos") }}
                </div>
              </div>
            </div>

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-plane" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Viajes") }}
                </div>
              </div>
            </div>

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-laptop-code" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Tecnología") }}
                </div>
              </div>
            </div>

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-shopping-cart" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Compras") }}
                </div>
              </div>
            </div>

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-chart-bar" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Big Data") }}
                </div>
              </div>
            </div>

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-utensils" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Comida") }}
                </div>
              </div>
            </div>

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-home" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Familia") }}
                </div>
              </div>
            </div>

            <div class="col-4 col-xl-3 col-lg-4 col-md-3 mb-3">
              <div class="cuadro text-center">
                <div class="cuadro-header align-middle">
                  <font-awesome-icon icon="fas fa-paint-brush" />
                </div>
                <div class="cuadro-desc">
                  {{ $t("Arte") }}
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center mt-4"><a href="./assets/docs/22012022.pdf" target="_blank"><div class="btn">{{ $t("Descargar CV") }}</div></a></div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>

</style>