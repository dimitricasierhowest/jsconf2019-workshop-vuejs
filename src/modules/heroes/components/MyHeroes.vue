<template>    
    <div class="heroes">      
        <header>You liked {{ counter }} hero<span v-show="counter != 1">es</span></header>
        <section> 
            <hero v-for="hero in this.heroes" :key="hero.id" :hero="hero" @liked="onLike"></hero>   
        </section>

    </div> 
</template>
<script>

import HeroesMixin from '@/modules/heroes/core/HeroesMixin.js'
import Hero from '@/modules/heroes/components/Hero.vue'

export default {
    name: "heroes",
    mixins: [HeroesMixin],
    components: { Hero }, 
   
    methods:{
        load(){            

            // -- load heroes
            let service = this.getService()
            service.myHeroes().then(data => {
                this.heroes = data
                this.counter = this.heroes.length
            }) 
        },       
        getHeroes(){            
            // -- load heroes
            let service = this.getService()
            service.myHeroes().then(data => {
                this.heroes = data
                this.counter = this.heroes.length
            })      
        },                           
     
    }
}
</script>
<style>
    .heroes{
        max-width: 1200px;
        margin: 0 auto;
        
    }
    .heroes section{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto; 
        width: 100%;
    }      


</style>