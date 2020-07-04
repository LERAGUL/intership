<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header
      q-toolbar

        q-btn(
          :to = "{name: 'myself'}"
          label = "Myself"
          flat
        )

        q-btn(
          :to = "{name: 'skills'}"
          label = "My Skills"
          flat
        )

        q-btn(
          :to = "{name: 'practice'}"
          label = "Practice"
          flat
        )
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

<script>

export default {
  name: 'MainLayout'
}
</script>
