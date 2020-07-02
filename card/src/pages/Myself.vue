<template lang="pug">
  q-page(
    padding
  )
    .row
      .q-pa-ms.col-4
        q-img(
          src="https://sun9-20.userapi.com/c854024/v854024977/471b9/Bb-ZP-46RAU.jpg"
          style="width: 93%"
        )
      .q-pa-md.col-8
        .text-h5.q-mb-md
          | Обо мне
        .q-mb-md
          | Привет, меня зовут Лера! Сейчас я учусь на втором курсе университета.
          | Ещё со школы мне особенно нравились математика и информатика, поэтому я поступила в технический ВУЗ.
          | Свою будущую профессию хочу связать с IT-сферой.
          | Помимо учёбы в университете я дополнительно изучаю английский язык, увлекаюсь игрой на пианино и занимаюсь репетиторством.
        .text-h5.q-mb-md
          | Личные качества

        .row
          q-item
          .q-pb-sm.col-3
            q-item-section
              q-item-label
                | Ответственность
          .q-pb-sm.col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
        
        .row
          q-item
          .q-pb-sm.col-3
            q-item-section
              q-item-label
                | Коммуникабельность
          .q-pb-sm.col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
        
        .row
          q-item
          .q-pb-sm.col-3
            q-item-section
              q-item-label
                | Самостоятельность
          .q-pb-sm.col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
        
        .row
          q-item
          .q-pb-sm.col-3
            q-item-section
              q-item-label
                | Готовность учиться новому
          .q-pb-sm.col-3
            q-item-section
              .text-orange
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
                q-icon(name="star")
        .text-h5.q-mb-md
            | Образование
        q-timeline(color="secondary")
          q-timeline-entry(
            subtitle="2007-2018"
          )
            div
              | МБОУ Щёлковский лицей №7
          q-timeline-entry(
            subtitle="2018-2022"
          )
            div
              | МГТУ им. Баумана, кафедра "Информационные системы и сети", направление "Прикладная информатика"    
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>