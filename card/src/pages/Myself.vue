<template lang="pug">
  q-page.text(
    padding
  )
    .row
      .col-4
        q-img.q-ma-xs(
          src="https://sun9-20.userapi.com/c854024/v854024977/471b9/Bb-ZP-46RAU.jpg"
          style="width: 30%; position: fixed"
        )
      .col-8
        .text-h5.q-mb-sm.title
          | {{ $t('myself')}}
        .q-mb-md.content
          | {{ $t('greeting') }}

        .text-h5.q-mb-md.title
          | {{ $t('personalquality') }}

        .row.content
          q-item
          .col-4
            q-item-section
              q-item-label
                | {{ $t('responsibility')}}
          .col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
        
        .row.content
          q-item
          .col-4
            q-item-section
              q-item-label
                | {{ $t('sociability')}}
          .col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="ion-star-outline")
        .row.content
          q-item
          .col-4
            q-item-section
              q-item-label
                | {{ $t('independence')}}
          .col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="ion-star-outline")
        
        .row.content
          q-item
          .col-4
            q-item-section
              q-item-label
                | {{$t('new')}}
          .col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")

        .text-h5.q-mb-md.title
            | {{ $t('education') }}
        q-timeline.content(color="secondary")
          q-timeline-entry(
            subtitle="2007-2018"
          )
            | {{$t('school')}}
          q-timeline-entry(
            subtitle="2018-2022"
          )
            div
              | {{ $t('university')}}    
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>