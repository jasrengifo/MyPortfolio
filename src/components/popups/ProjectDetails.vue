<template>

<div class="popup-overlay">
  <div class="close-popup" @click="$emit('close-project-details')">
    <font-awesome-icon icon="far fa-times-circle" />
  </div>
</div>

    <div class="details-project" v-if="test==true">

    <div class="project-details">
      <div class="project-details-caixa">
        <div class="text-center titulo" @click="test=false">
          <h1>{{ projectinfo.details.title }}</h1>
        </div>

        <div class="project-details-html">

          <!-- HTML content here -->
          <div class="row mw-100 mt-5">
            <div class="col-lg-12">
              <p>
                {{ $t(projectinfo.details.desc) }}
              </p>
            </div>

            <div class="col-lg-12 text-end mb-4" v-if="projectinfo.details.url!=''">
              <a :href="projectinfo.details.url" class="btn btn-primary" target="_blank">{{ $t("Visitar proyecto") }}</a>
            </div>

            <div class="col-lg-12 " v-if="projectinfo.details.img.length>0">

              <div class="row">
                <div class="titulo mb-4 text-center"><h3>{{ $t("Imagenes del proyecto") }}</h3></div>
                <div class="col-md-4 image-item mb-3" v-for="image in projectinfo.details.img" :key="image.id">
                  <img :src="image.url" :alt="image.name" class="project-image-item max-w" />
                </div>


              </div>

            </div>
            <div class="col-lg-12">
              <div class="titulo mb-4 text-center mt-4"><h3>{{ $t("Detalles Técnicos") }}</h3></div>
              <div class="datos-tecnicos">

                  <div v-for="tech in projectinfo.details.techs" :key="tech.id">{{ $t(tech) }}</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>

export default {

  name: "ProjectDetails",
  props: {
    projectinfo: Array
  },
  watch: {

  },
  data() {
    return {
      test: true,
    }
  },
}
</script>


<style scoped>

  .close-popup{
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 40px;
  }

  .close-popup:hover{
    cursor: pointer;
    color: var(--sec-green);
  }

  .details-project{
    position: fixed;
    z-index: 10;
  }

  .project-details-html
  {
    max-width: 100%;
  }

  .popup-overlay
  {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .project-details {
    background-color: var(--quar-dark);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 80%;
    z-index: 12;
    padding: 20px;
    border-radius: 10px;

  }

  .project-details-caixa{
    overflow-y: scroll;
    max-height: 100%;
    width: 100%;
  }

  .project-details .titulo {
    font-family: Righteous, sans-serif;
  }

  .image-item{
  }

  .project-image-item{
    width: 100%;
    border-radius: 5px;
  }

  .datos-tecnicos div{
    display: inline-block;
    padding: 0 10px;
    background-color: var(--sec-green);
    margin: 5px 5px;
    border-radius: 5px;
  }

  .datos-tecnicos div:hover {
    background-color: var(--sec-green-hover);
    cursor: pointer;
  }
</style>