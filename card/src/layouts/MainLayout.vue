
<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header.menu
      q-toolbar

        q-btn(
          :to = "{name: 'myself'}"
          :label="$t('myself')"
          flat
        )

        q-btn(
          :to = "{name: 'skills'}"
          :label="$t('skills')"
          flat
        )

        q-btn(
          :to = "{name: 'practice'}"
          :label="$t('practice')"
          flat
        )
        q-space
        
        q-btn-toggle(
          v-model="lang"
          :options="langOptions"
          flat
        )   
          <template v-slot:English>
          .row.items-center.no-wrap
            .text-white.q-pa-xs
              | Eng  
          q-img(src="~assets/en2.png"
          style="width: 25px"
          )

          </template>

          <template v-slot:Russian>
          .row.items-center.no-wrap
            .text-white.q-pa-xs
              | Rus
            q-img(src="~assets/ru2.png"
              style="width: 25px")
          </template>
    q-footer
      .row.q-pa-sm
        .col-2.q-pa-xs
            q-icon(name="ion-mail")
            |  gul.lera.5@mail.ru
        .col-2.q-pa-xs
            q-icon(name="ion-logo-vk")
            |  vk.com/id170724277
        .col-2.q-pa-xs
            q-icon(name="ion-logo-instagram")
            |  srpsee
    q-page-container
      router-view
</template>

<style>

</style>

<script>
import style from "src/css/style.css"

export default {
  name: 'MainLayout', 
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', slot: 'English' },
        { value: 'ru-ru', slot: 'Russian' }
      ]
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
