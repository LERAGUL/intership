<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-page.text(
      padding
    )
      div(
        style="width: 50%; margin:0 auto"
      )
        q-card.post-skill.q-ma-md(
          flat
        )
          q-card-section.text-h5.q-pb-none.title
            | {{ $t('databases')}}
            i(
              class="fas fa-database"
              style="float: right"
            )
          q-card-section.q-pt-none.content
            ul
              li
                | {{ $t('knowledge')}} SQL
              li
                | {{ $t('dbms')}}
              li
                | Oracle Application Express
        q-card.post-skill.q-ma-md(
          flat
        )
          q-card-section.text-h5.q-pb-none.title
              | {{$t('programming')}}
              q-icon(
                name="ion-code"
                style="float: right"
              )
          q-card-section.q-pt-none.content
            ul
              li
                | C/C++, JS, Ruby, Pascal
              li
                | {{ $t('knowledge')}} OOP
              li
                | Qt, Lasarus
              li
                | Ruby on Rails, Vue
              li
                | HTML, CSS
              li
                | {{ $t('assembler') }} masm32
              li
                | {{ $t('knowledge') }}  {{$t('compilation')}}
        q-card.post-skill.q-ma-md(
          flat
        )
          q-card-section.text-h5.q-pb-none.title
              | {{$t('additionalskills')}}
              q-icon(
                name="ion-add-circle-outline"
                style="float: right"
              )
          q-card-section.q-pt-none.content
            ul
              li
                | {{$t('documentation')}}
              li
                | {{$t('technicalreport')}}
              li
                | {{$t('software')}}
              li
                | {{$t('english')}}
</template>    
<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>