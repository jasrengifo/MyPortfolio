<template>

  <AnimatedBounce>
    <ProjectDetails v-if="show_project_details==true" :projectinfo="projectinf" @close-project-details="show_project_details=false"  ></ProjectDetails>
  </AnimatedBounce>

  <section id="portfolio" class="bg-ter pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 section-title text-center mt-2"><div class="d-inline-block titulo">{{ $t("Portafolio Reciente (Solo algunos ejemplos)") }}</div></div>
      </div>
      <div class="row">

        <div class="col-lg-4  mb-4" @click="selectProject(key);show_project_details=true" v-for="(project, key) in projects" :key="project.id">
          <div class="portfolio-img">
            <div class="image-caja">
              <img :src="project.image" />
            </div>
            <div class="overlay d-none">
                <div class="overlay-content text-center">
                  <div><i class="fas fa-search"></i></div>
                  <div class="overlay-title">{{ $t(project.title) }}</div>
                  <div>{{ $t(project.description) }}</div>
                </div>
            </div>
          </div>
        </div>



        <div class="col-lg-4  mb-4">
          <div class="portfolio-img">
            <div class="image-caja">
              <img src="/assets/img/portfolio/3.png" />
            </div>

            <div class="overlay d-none">
              <a href="https://trincanela.pt/" target="_blank">
                <div class="overlay-content text-center">
                  <div><i class="fas fa-search"></i></div>
                  <div class="overlay-title">Trincanela</div>
                  <div>{{ $t("Tienda Online") }}</div>
                </div>
              </a>
            </div>

          </div>
        </div>

        <div class="col-lg-4 mb-4">                                            b4v4vv45v43vb
          <div class="portfolio-img">
            <div class="image-caja">
              <img src="/assets/img/portfolio/4.png" />
            </div>

            <div class="overlay d-none">
              <a href="https://fjmpc.pt/pt/" target="_blank">
                <div class="overlay-content text-center">
                  <div><i class="fas fa-search"></i></div>
                  <div class="overlay-title">FJMPC</div>
                  <div>{{ $t("Tienda Online") }} + {{ $t("Página Web") }}</div>
                </div>
              </a>
            </div>

          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="portfolio-img">
            <div class="image-caja">
              <img class="invert-img" src="/assets/img/portfolio/5.png" />
            </div>

            <div class="overlay d-none">
              <div class="overlay-content text-center">
                <div><i class="fas fa-search"></i></div>
                <div class="overlay-title">Contas Correntes - Primavera</div>
                <div>{{ $t("Módulo para") }} Prestashop</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="portfolio-img">
            <div class="image-caja">
              <img class="" src="/assets/img/portfolio/6.png" />
            </div>

            <div class="overlay d-none">
              <a href="http://mynuts.store/" target="_blank">
                <div class="overlay-content text-center">
                  <div><i class="fas fa-search"></i></div>
                  <div class="overlay-title">Frusel</div>
                  <div>{{ $t("Tienda Online") }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>


        <div class="col-lg-4 mb-4">
          <div class="portfolio-img">
            <div class="image-caja">
              <img class="invert-img" src="/assets/img/portfolio/7.png" />
            </div>

            <div class="overlay d-none">
              <div class="overlay-content text-center">
                <div><i class="fas fa-search"></i></div>
                <div class="overlay-title">Aguas Andinas</div>
                <div>{{ $t("APP Android para gestión interna") }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="portfolio-img">
            <div class="image-caja">
              <img  src="/assets/img/portfolio/8.png" />
            </div>

            <div class="overlay d-none">
              <a href="http://vitorserralheiroecosta.com/" target="_blank">
                <div class="overlay-content text-center">
                  <div><i class="fas fa-search"></i></div>
                  <div class="overlay-title">VSC</div>
                  <div>{{ $t("Tienda Online") }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="portfolio-img">
            <div class="image-caja">
              <img  src="/assets/img/portfolio/9.png" />
            </div>

            <div class="overlay d-none">
              <a href="https://granjadecister.pt/" target="_blank">
                <div class="overlay-content text-center">
                  <div><i class="fas fa-search"></i></div>
                  <div class="overlay-title">Granja de Cister</div>
                  <div>{{ $t("Tienda Online") }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>

import ProjectDetails from "@/components/popups/ProjectDetails";

export default {
  name: "MyPortfolio",
  components: {
    ProjectDetails
  },
  data() {
    return {
      show_project_details: false,
      projectinf: {},
      projects: [
        {
          "title": "Easypay para Prestashop",
          "description": "Módulo de pagos para Prestashop",
          "image": "/assets/img/portfolio/2.png",
          "details": {
            title: "Easypay para Prestashop 1.7",
            desc: "En este proyecto creé un módulo de pagos online para Prestashop 1.7.x conectado con el gateway de pagos de Easypay mediante su API, ofrece la posibilidad de realizar pagos a traves de diferentes modalidades como es MBWAY, Tarjeta de crédito, Tarjeta de débito, Transferencia bancaria y Boleto. Además modifica ligeramente el comportamiento de prestashop para adicionar una nueva funcionalidad de pagos por subscripción, permitiendo al usuario suscribirse a ciertos productos que pueden ser configurados desde el panel de administración por el comerciante generando así un pago automático cada cierto tiempo según la configuración seleccionada. El usuario tiene siempre la posibilidad de cancelar sus suscripciones cuando lo desee, cancelar sus pagos o reintentar pagar su orden aun despues de haber caducado el método de pago generado durante el checkout.",
            url: "https://www.easypay.pt/en/platform/integracoes-en/prestashop-en/",
            img: [
              {
                name: "Easypay",
                url: "/assets/img/projects/easypay_1.jpg",
              },
              {
                name: "Easypay",
                url: "/assets/img/projects/easypay_2.jpg",
              },
              {
                name: "Easypay",
                url: "/assets/img/projects/easypay_3.jpg",
              },
            ],
            techs: [
              "PHP",
              "Prestashop",
              "API",
              "HTML",
              "CSS",
              "Javascript",
              "Bootstrap",
              "Git",
              "Composer",
              "Smarty",
              "MySQL",
              "jQuery",
              "JSON",
              "XML",
              "Webhooks",
              "WebServices",
              "CRON",
            ]
          }
        },
        {
          "title": "Gamershop",
          "description": "Tienda Online",
          "image": "/assets/img/portfolio/1.png",
          "details": {
            title: "Gamershop - Tienda Online",
            desc: "Una tienda online para venta al público de productos informáticos orientado principalmente al mundo gamer, con un diseño moderno y atractivo, el CMS utilizado es Prestashop 1.7 y por motivos funcionales desarrollé algunos módulos especiales como por ejemplo el módulo de búsqueda por AJAX en tiempo real, un módulo especial para extender las funciones de promociones para permitir nuevas reglas y características, un módulo especial para lo packs de productos ya que el base de prestashop no contaba con las características requeridas por el comerciante. Se realizaron optimizaciones y un sistema de filtros de productos diferente al que trae predefinido prestashop.",
            url: "https://gamershop.pt/",
            img: [
              {
                name: "Gamershop",
                url: "/assets/img/projects/gamershop_1.jpg",
              },
              {
                name: "Gamershop",
                url: "/assets/img/projects/gamershop_2.jpg",
              },
              {
                name: "Gamershop",
                url: "/assets/img/projects/gamershop_3.jpg",
              },
            ],
            techs: [
              "PHP",
              "Prestashop",
              "API",
              "HTML",
              "CSS",
              "Javascript",
              "Bootstrap",
              "Git",
              "Composer",
              "Smarty",
              "MySQL",
              "jQuery",
              "JSON",
              "XML",
              "Webhooks",
              "WebServices",
              "CRON",
              "Ajax",
              "VueJS"
            ]
          }
        },
        {
          "title": "Gamershop",
          "description": "Tienda Online",
          "image": "/assets/img/portfolio/1.png",
          "details": {
            title: "Gamershop - Tienda Online",
            desc: "Una tienda online para venta al público de productos informáticos orientado principalmente al mundo gamer, con un diseño moderno y atractivo, el CMS utilizado es Prestashop 1.7 y por motivos funcionales desarrollé algunos módulos especiales como por ejemplo el módulo de búsqueda por AJAX en tiempo real, un módulo especial para extender las funciones de promociones para permitir nuevas reglas y características, un módulo especial para lo packs de productos ya que el base de prestashop no contaba con las características requeridas por el comerciante. Se realizaron optimizaciones y un sistema de filtros de productos diferente al que trae predefinido prestashop.",
            url: "https://gamershop.pt/",
            img: [
              {
                name: "Gamershop",
                url: "/assets/img/projects/gamershop_1.jpg",
              },
              {
                name: "Gamershop",
                url: "/assets/img/projects/gamershop_2.jpg",
              },
              {
                name: "Gamershop",
                url: "/assets/img/projects/gamershop_3.jpg",
              },
            ],
            techs: [
              "PHP",
              "Prestashop",
              "API",
              "HTML",
              "CSS",
              "Javascript",
              "Bootstrap",
              "Git",
              "Composer",
              "Smarty",
              "MySQL",
              "jQuery",
              "JSON",
              "XML",
              "Webhooks",
              "WebServices",
              "CRON",
              "Ajax",
              "VueJS"
            ]
          }
        },
      ]
    };
  },
methods: {
  selectProject(key){
    this.projectinf = this.projects[key];
  }
}

}
</script>

<style scoped>

</style>