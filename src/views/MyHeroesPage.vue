<template>
  <div class="heroes">
    <heroes></heroes>
  </div>
</template>
<script>


import Heroes from '@/modules/heroes/components/MyHeroes.vue'

export default {
  name: 'my-heroes-page',
  components: { Heroes },
  data(){
    return {     
    }
  }
}
</script>
