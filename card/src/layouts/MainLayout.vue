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

    q-page-container
      router-view
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>
