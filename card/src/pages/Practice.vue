<template lang="pug">
  q-page(
    padding
  )
    div(
      style="width: 50%; margin:0 auto"
    )
      q-card.post-item-wrap(
        flat
      )
        a.post-link(href="https://github.com/LERAGUL/Practice.git" target="_blank")
          q-card-section.text-h5.title
            | {{$t('edu_practice')}}
          q-card-section.content
            | {{$t('qt')}}   
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>