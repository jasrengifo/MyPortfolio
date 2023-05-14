<template>
  <section id="contact" class="contacto pt-5 pb-5">
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-lg-12 section-title text-center mt-2"><div class="d-inline-block titulo">{{ $t("Contactame") }}</div></div>
      </div>

      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 text-center">
          <form action="./contact.php" method="post" name="contacto">
            <input class="from-control mb-4" name="nombre" pattern="([\wã-õä-üá-úà-ùâ-û]{2,30}) ?([\wã-õä-üá-úà-ùâ-û?]{2,30})" required :placeholder="$t('Su nombre')"/>
            <input class="from-control mb-4" name="telefono" pattern="[0-9\+\(\) ]{9,20}" :placeholder="$t('Teléfono')"/>
            <input class="from-control mb-4" name="email" pattern="[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}" required :placeholder="$t('Su Email')"/>
            <input class="from-control mb-4" name="asunto" pattern="[\w\W\d\D]{2,100}" required :placeholder="$t('Asunto')"/>
            <textarea class="from-control mb-4" required name="mensaje">  </textarea>
            <button class="enviar btn mb-5">{{ $t("Enviar") }}</button>
          </form>
        </div>
        <div class="col-lg-4"></div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ContactNow"
}
</script>

<style scoped>

</style>