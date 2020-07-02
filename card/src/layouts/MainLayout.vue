<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
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
      q-toolbar
        .row.q-pa-xs
          q-item
            .col-3
              q-item-section
                q-icon(name="mail")
            .col-3
              q-item-section
                | gul.lera.5@mail.ru
    q-page-container
      router-view
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>
