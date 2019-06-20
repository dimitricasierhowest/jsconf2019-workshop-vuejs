<template>    
    <div class="heroes">
        <header>{{ counter }} hero<span v-show="counter != 1">es</span> to like!</header>
        <section> 
            <hero v-for="hero in this.getHeroes()" :key="hero.id" :hero="hero" @liked="onLike"></hero>   
        </section>
    
    </div> 
</template>
<script>

/*
    - components
    - eventbus
    - hooks (created & beforeDestroy)
    - methods
    - service
*/

import HeroService from '@/modules/heroes/services/HeroService.js'
import Hero from '@/modules/heroes/components/Hero.vue'
import {EventBus} from '@/modules/core/EventBus.js'

export default {
    name: "heroes",
    components: { Hero },
     data(){
        return {
            counter: 0,
            filter: null,
            sort: null,
            heroes: [],   
            service: new HeroService 
         
        }
    },
    created(){
        this.load()
        EventBus.$on('filterChanged', this.setFilter)
        EventBus.$on('sortChanged', this.setSort) 
    },
    beforeDestroy(){
        EventBus.$off('filterChanged', this.setFilter)
        EventBus.$off('sortChanged', this.setSort)
    },
    methods:{                
        getHeroes(){
            let service = this.getService()

            let heroes = service.filter(this.heroes, this.filter)
            heroes = service.sort(heroes, this.sort)

            this.counter = heroes.length
            return heroes
        },
        getService(){
            return new HeroService
        },
        load(){            

            // -- load heroes
            let service = this.getService()
            service.heroes().then(data => {
                this.heroes = data
                this.counter = this.heroes.length
            })      
        },   
        onLike(hero){
            let service = this.getService() 
            if(hero.liked) {      
                service.like(hero.id)                
                return
            }//endif

            service.unLike(hero.id)
        },              
        setFilter(filter){
            this.filter = filter
        },
        setSort(sort){
            this.sort = sort
        },
        
     
    }
}
</script>
<style>
    .heroes{
        max-width: 1200px;
        margin: 0 auto;
        
    }
    .heroes > header{
        padding: 10px 0;
        color: gold;
        font-size: 50px;
    }
    .heroes section{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto; 
        width: 100%;
    }      

</style>