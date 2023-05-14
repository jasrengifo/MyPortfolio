<template>
  <section id="skills" class="bg-ter pt-5 pb-5" >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 section-title text-center mt-2"><div class="d-inline-block titulo">{{ $t("Habilidades") }}</div></div>

        <div class="row">
          <div class="col-lg-6">
            <div class="col-lg-12 section-title2"><div class="d-inline-block titulo2">{{ $t("Habilidades Técnicas") }}</div></div>
            <div class="row">


              <div class="col-lg-12 mb-3 pe-5" v-for="technicalSkill in tecnicalSkills" :key="technicalSkill.id" >
                <div class="info">
                  <div class="nome">{{ technicalSkill.name }}</div>
                </div>
                <div class="progressBar">
                  <div class="percentagem" :style="'width: '+technicalSkill.current+'%;'">
                    <div class="percentagem-num">{{ technicalSkill.current }}%</div>
                  </div>
                </div>
              </div>



            </div>
          </div>
          <div class="col-lg-6">
            <div class="col-lg-12 section-title2"><div class="d-inline-block titulo2">{{ $t("Habilidades Personales") }}</div></div>
            <div class="row">

              <div class="col-lg-12 mb-3 pe-5" v-for="personalSkill in personalSkills" :key="personalSkill.id">
                <div class="info">
                  <div class="nome">{{ $t(personalSkill.name) }}</div>
                </div>
                <div class="progressBar">
                  <div class="percentagem" :style="'width: '+personalSkill.current+'%;'">
                    <div class="percentagem-num">{{ personalSkill.current }}%</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MySkills",
  data() {
    return {
      tecnicalSkills: [
          {name: "PHP", max: 95, current: 0},
          {name: "Javascript", max: 85, current: 0},
          {name: "HTML", max: 95, current: 0},
          {name: "CSS", max: 85, current: 0},
          {name: "Prestashop", max: 95, current: 0},
          {name: "Symfony", max: 75, current: 0},
          {name: "VueJS", max: 90, current: 0},
          {name: "Rest Api", max: 85, current: 0},
          {name: "Github", max: 75, current: 0},
          {name: "PyroCMS", max: 65, current: 0},
          {name: "CPanel & Plesk", max: 95, current: 0},
          {name: "NodeJS", max: 75, current: 0},
          {name: "Photoshop", max: 85, current: 0},
      ],
      personalSkills: [
        {name: "Comunicación", max: 85, current: 0},
        {name: "Trabajo en equipo", max: 90, current: 0},
        {name: "Creatividad", max: 75, current: 0},
        {name: "Concentración", max: 90, current: 0},
        {name: "Aprendizaje", max: 95, current: 0},
        {name: "Resolución de Problemas", max: 95, current: 0},
        {name: "Organización del tiempo", max: 85, current: 0},
        {name: "Responsabilidad", max: 100, current: 0},
      ]
    }
  },
  mounted() {
    let vue = this;

    vue.startAnimate();



    window.addEventListener('scroll', () => vue.startAnimate(vue));


  },
  unmounted() {
  },
  methods: {
    animateSkills(){
      let vue = this;

      for(let i = 0; i < vue.tecnicalSkills.length; i++){
        vue.tecnicalSkills[i].current = vue.tecnicalSkills[i].max;
      }

      for(let i = 0; i < vue.personalSkills.length; i++){
        vue.personalSkills[i].current = vue.personalSkills[i].max;
      }


    },
    startAnimate(){
      let vue = this;
      let windowspos = window.scrollY;
      let skillspos = document.getElementById('skills').offsetTop;
      if(windowspos > skillspos-500){
        setInterval(() => {
          vue.animateSkills();
        }, 2);
      }


    }
  },


}
</script>

<style scoped>

</style>