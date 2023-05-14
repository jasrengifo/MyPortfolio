<template>
  <section id="resume" class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 section-title text-center mt-2"><div class="d-inline-block titulo">{{ $t("Experiencia Laboral") }}</div></div>

        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6 db_experience_details db_common_text">

            <div class="db_experience_item dark_box_bg wow fadeInUp">
              <h4>{{ $t("Programador Web") }} <a href="#">Trigénius</a></h4>
              <div class="db_year">2019 - {{ $t("Actualmente") }}</div>
              <ul class="db_common_text">
                <li>{{ $t("Desarrollar aplicaciones web a medida, compatible con dispositivos móviles y SEO.") }}</li>
                <li>{{ $t("Desarrollar soluciones de e-commerse.") }}</li>
                <li>{{ $t("Desarrollar aplicaciones para Android/IOS.") }}</li>
                <li>{{ $t("Analisis y resolución de problemas en códigos.") }}</li>
                <li>{{ $t("Gestión y mantenimiento de bases de datos MYSQL y SQL.") }}</li>
                <li>{{ $t("Optimizar la seguridad de las APPs administradas.") }}</li>
              </ul>
            </div>

            <div class="db_experience_item dark_box_bg wow fadeInUp">
              <h4>{{ $t("Creación de bot para hacer trade de criptomonedas (Web APP con Python)") }} <a href="#">Freelance</a></h4>
              <div class="db_year">2018-2019</div>
              <ul class="db_common_text">
                <li>{{ $t("Desarrollar un algoritmo para detectar patrones financieros y enviar alertas de posibles operaciones a realizar.") }}</li>
                <li>{{ $t("Implementación de Arbitrage entre más de 4 exchanges.") }}</li>
                <li>{{ $t("Desarrollo de bot para Discord para comunicación directa con el cliente.") }}</li>
                <li>{{ $t("Configuración de servidor Amazon AWS e implementación.") }}</li>
              </ul>
            </div>


            <div class="db_experience_item dark_box_bg wow fadeInUp">
              <h4>{{ $t("Coordinador de Sala Situacional") }} <a href="#">Venezuela Productiva</a></h4>
              <div class="db_year">2015-2018</div>
              <ul class="db_common_text">
                <li>{{ $t("Desarrollar sistema automatizado para gestion de inventários (Aplicación web)") }}</li>
                <li>{{ $t("Recolección, analisis y tratamiento de datos de todas las gerencias para presentar al presidente de la empresa") }}</li>
                <li>{{ $t("Asesorar a nivel tecnológico al Presidente de la Empresa") }}</li>
                <li>{{ $t("Resolución de problemas técnicos") }}</li>
              </ul>
            </div>
            <div class="db_experience_item dark_box_bg wow fadeInUp">
              <h4>A{{ $t("Admin. Sistemas") }} <a href="#">SAIME</a></h4>
              <div class="db_year">2013-2015</div>
              <p>{{ $t("Mi trabajo principal consistía en velar por el buen funcionamiento del sistema de llamadas y reportes del CallCenter, resolución de problemas técnicos y reportes diarios.") }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyResume"
}
</script>

<style scoped>

</style>