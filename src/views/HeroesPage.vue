<template>
  <div class="heroes">
    <hero-filter></hero-filter>
    <heroes></heroes>
  </div>
</template>
<script>

import HeroFilter from '@/modules/heroes/components/HeroFilter.vue'
import Heroes from '@/modules/heroes/components/HeroesFull.vue'

export default {
  name: 'heroes-page',
  components: { HeroFilter, Heroes },
  data(){
    return {     
    }
  }
}
</script>
