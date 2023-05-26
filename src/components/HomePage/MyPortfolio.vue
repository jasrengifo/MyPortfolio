<template>

  <Transition name="mobile-menu" enter-active-class="animate__animated animate__bounceInDown" leave-active-class="animate__animated animate__bounceOutUp" >
    <div class="box-details" v-if="show_project_details==true">
      <ProjectDetails :projectinfo="projectinf" @close-project-details="show_project_details=false"  ></ProjectDetails>
    </div>
  </Transition>


  <section id="portfolio" class="bg-ter pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 section-title text-center mt-2"><div class="d-inline-block titulo">{{ $t("Portafolio Reciente (Solo algunos ejemplos)") }}</div></div>
      </div>
      <div class="row">

        <div class="col-lg-4  mb-4" @click="selectProject(key);show_project_details=true" v-for="(project, key) in projects" :key="project.id">
          <div class="portfolio-img">
            <div class="image-caja">
              <img :class="project.image_class" :src="project.image" />
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
          "image_class": "",
          "details": {
            title: "Easypay para Prestashop 1.7",
            desc: "En este proyecto, he desarrollado un módulo de pagos en línea para Prestashop 1.7.x y 8.0.x, El módulo se conecta con el gateway de pagos de Easypay mediante su API, lo que brinda a los comerciantes la posibilidad de ofrecer diversas opciones de pago a sus clientes. El módulo admite diferentes modalidades de pago, como MBWAY, tarjeta de crédito, tarjeta de débito, transferencia bancaria y boleto. Además, he implementado una funcionalidad adicional que permite a los usuarios suscribirse a ciertos productos. Esta función se configura desde el panel de administración, lo que permite generar pagos automáticos periódicos según la configuración establecida. Una característica destacada es la flexibilidad que ofrece a los usuarios. Incluso después de que haya caducado el método de pago seleccionado durante el proceso de compra, los usuarios aún tienen la opción de cancelar sus suscripciones, cancelar pagos o volver a intentar el pago de sus órdenes. Este módulo de pagos en línea ofrece una solución integral y confiable para Prestashop, brindando una experiencia de compra fluida y conveniente tanto para los comerciantes como para los clientes. Estoy seguro de que puede ser una adición valiosa para cualquier negocio en línea.",
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
          "image_class": "",
          "details": {
            title: "Gamershop - Tienda Online",
            desc: "He creado una tienda online dirigida al público en general, con un enfoque principal en productos informáticos para gamers. El diseño de la tienda es moderno y atractivo, y para su desarrollo he utilizado el CMS Prestashop 1.7. Con el fin de mejorar la funcionalidad de la tienda, he desarrollado algunos módulos personalizados. Por ejemplo, he creado un módulo de búsqueda en tiempo real utilizando AJAX, lo que permite a los usuarios obtener resultados instantáneos mientras escriben en el campo de búsqueda. Además, he creado un módulo especial para ampliar las funciones de promociones, permitiendo al comerciante establecer nuevas reglas y características para las promociones de productos. También he desarrollado un módulo especial para los paquetes de productos, ya que la versión base de Prestashop no ofrecía las características necesarias para satisfacer las necesidades del comerciante. Además de estas mejoras, he realizado optimizaciones en el rendimiento de la tienda y he implementado un sistema de filtros de productos personalizado, diferente al que viene predeterminado en Prestashop. Esto permite a los usuarios encontrar rápidamente los productos que desean, facilitando su experiencia de compra. En resumen, esta tienda online que he desarrollado ofrece una experiencia de compra atractiva y funcional para los usuarios interesados en productos informáticos, especialmente enfocados en el mundo gamer.",
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
          "title": "Trincanela",
          "description": "Tienda Online",
          "image": "/assets/img/portfolio/3.png",
          "image_class": "",
          "details": {
            title: "Trincanela - Tienda Online",
            desc: "He desarrollado una tienda online dirigida al público en general, con un enfoque especial en la venta de productos alimentarios. Sin embargo, el principal objetivo de esta tienda es controlar la distribución de mercancía a las diferentes tiendas físicas de la empresa. El diseño de la tienda es moderno y atractivo, y para su desarrollo he utilizado el CMS Prestashop 1.7. Con el fin de garantizar un control eficiente de la distribución de mercancía, he desarrollado algunos módulos especiales. Por ejemplo, he creado un módulo interno que permite al comerciante aplicar diversos filtros y generar archivos en formato Excel y/o PDF. Estos archivos brindan al comerciante una visión organizada de la distribución diaria de mercancía que debe realizarse en cada una de las tiendas físicas, basada en los pedidos realizados por los administradores de cada tienda. Estas herramientas especiales proporcionan al comerciante una forma eficiente de gestionar y comprender la distribución de mercancía, facilitando la coordinación entre las diferentes tiendas físicas y optimizando el proceso logístico. En resumen, esta tienda online que he desarrollado se centra en la venta de productos alimentarios y está especialmente diseñada para controlar la distribución de mercancía a las tiendas físicas de la empresa.",
            url: "https://trincanela.pt/",
            img: [
              {
                name: "Trincanela",
                url: "/assets/img/projects/trincanela_1.jpg",
              },
              {
                name: "Trincanela",
                url: "/assets/img/projects/trincanela_2.jpg",
              },
              {
                name: "Trincanela",
                url: "/assets/img/projects/trincanela_3.jpg",
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
              "VueJS",
              "EXCEL",
              "PDF"
            ]
          }
        },
        {
          "title": "Cuentas Corrientes - Primavera",
          "description": "Módulo para Prestashop",
          "image": "/assets/img/portfolio/5.png",
          "image_class": "invert-img",
          "details": {
            title: "Cuentas Corrientes de Primavera - Módulo Prestashop",
            desc: "He desarrollado un módulo para Prestashop que se integra fácilmente con el ERP Primavera. Este módulo muestra las cuentas pendientes y cuentas corrientes por cliente, facilitando el seguimiento de la información financiera. Además, ofrece la opción de descargar las facturas generadas por el software Primavera directamente desde la plataforma de administración de Prestashop. Asimismo, el módulo permite la descarga de un archivo Excel con los datos de las cuentas corrientes de los clientes, brindando una visión organizada y accesible de la información contable. Este módulo proporciona una solución eficiente para la gestión financiera en Prestashop, al permitir una integración fluida con el ERP Primavera y facilitar el acceso a datos clave de manera rápida y sencilla.",
            url: "",
            img: [
              {
                name: "Cuentas Corrientes",
                url: "/assets/img/projects/contascorrentes_1.jpg",
              },
              {
                name: "Cuentas Corrientes",
                url: "/assets/img/projects/contascorrentes_2.jpg",
              },
              {
                name: "Cuentas Corrientes",
                url: "/assets/img/projects/contascorrentes_3.jpg",
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
              "JSON",
              "XML",
              "Webhooks",
              "WebServices",
              "Ajax",
              "VueJS",
              "EXCEL",
              "PDF"
            ]
          }
        },
        {
          "title": "Frusel",
          "description": "Tienda Online",
          "image": "/assets/img/portfolio/6.png",
          "image_class": "",
          "url": "https://mynuts.store/",
          "details": {
            title: "Frusel - Tienda Online",
            desc: ".",
            url: "",
            img: [
              {
                name: "Trincanela",
                url: "/assets/img/projects/frusel_1.jpg",
              },
              {
                name: "Trincanela",
                url: "/assets/img/projects/frusel_2.jpg",
              },
              {
                name: "Trincanela",
                url: "/assets/img/projects/frusel_3.jpg",
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
              "JSON",
              "XML",
              "Webhooks",
              "WebServices",
              "Ajax",
              "VueJS",
              "EXCEL",
              "PDF"
            ]
          }
        },
        {
          "title": "Aguas Andinas",
          "description": "APP Android",
          "image": "/assets/img/portfolio/10.png",
          "image_class": "",
          "url": "",
          "details": {
            title: "APP - Aguas Andinas",
            desc: "He desarrollado una aplicación (APP) para el control de procesos internos relacionados con las operaciones de la empresa. Esta aplicación facilita la creación de formularios simples para que los trabajadores encargados de reportar la información puedan cargar los datos y registrarlos en la base de datos de manera rápida y sencilla. Durante el desarrollo de esta APP, hemos utilizado diversas tecnologías para satisfacer las necesidades específicas de nuestro cliente en términos de seguridad y funcionalidad. Como resultado, hemos complementado la aplicación con una API que he desarrollado. Esta API se encarga de actualizar los formularios, recibir la información enviada a través de ellos, almacenar los datos en la base de datos, enviar correos electrónicos, gestionar notificaciones y realizar otras funciones necesarias. La combinación de la aplicación y la API garantiza un proceso eficiente y seguro para el control de los procesos internos de la empresa.",
            url: "",
            img: [

            ],
            techs: [
              "Kotlin",
              "Java",
              "Android",
              "PHP",
              "Symfony",
              "API",
              "HTML",
              "CSS",
              "Bootstrap",
              "Git",
              "Composer",
              "PostgreSQL",
              "JSON",
              "WebServices",
              "EXCEL",
              "PDF",
            ]
          }
        },
        {
          "title": "Granja de Cister",
          "description": "Tienda Online",
          "image": "/assets/img/portfolio/9.png",
          "image_class": "",
          "url": "https://granjadecister.pt/",
          "details": {
            title: "Tienda Online - Granja de Cister",
            desc: "He desarrollado una tienda online utilizando Prestashop que permite la venta de productos tanto por peso como por unidad. Dado que Prestashop no ofrece funcionalidades nativas para este tipo de compras, y no encontré ningún módulo desarrollado que cumpliera con estos requisitos, creé un módulo personalizado desde cero. Este módulo amplía las funciones y vistas de Prestashop para satisfacer las necesidades específicas del cliente en este aspecto. Además, la tienda online cuenta con un diseño moderno y atractivo, que es compatible con dispositivos móviles y está optimizado para SEO. Esto asegura una experiencia de usuario óptima y una mejor visibilidad en los motores de búsqueda.",
            url: "",
            img: [
              {
                name: "Granja de Cister",
                url: "/assets/img/projects/granjadecister_1.jpg",
              },
              {
                name: "Granja de Cister",
                url: "/assets/img/projects/granjadecister_2.jpg",
              },
              {
                name: "Granja de Cister",
                url: "/assets/img/projects/granjadecister_3.jpg",
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
              "JSON",
              "XML",
              "Webhooks",
              "WebServices",
              "Ajax",
              "VueJS",
              "EXCEL",
              "PDF"
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
.box-details{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 12;
  background: rgba(0,0,0,0.8);
}
</style>