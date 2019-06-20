<template>
    <article class="hero">
        <header>
            <h2>{{ hero.name }}</h2>        
            <h3><span>{{ hero.appearance.race }}</span> <span>{{ hero.appearance.gender }}</span></h3>
        </header>
        <div class="picture" :style="{ backgroundImage: 'url('  + hero.picture + ')'}">
            <div>{{ hero.stars }}</div>
        </div>
        <stats :stats="hero.stats"></stats>      
        <div :class="{ nolikeIcon: !hero.liked, likeIcon: hero.liked}" @click="toggleLike(hero.id)"></div>  
    </article>
</template>
<script>

/*
    - class and style inding

    - components
    - props
    - methods
*/

import Stats from '@/modules/heroes/components/Stats.vue'

export default {
    name: 'hero',
    components: { Stats },
    props: {
        hero: Object,
    },
    methods: {
        toggleLike(){
            this.hero.liked = !this.hero.liked
            this.$emit('liked', this.hero)
        }
    }
}
</script>
<style>
    .hero{
        width: calc(100% -4px) ;
        background: #fff;
        border: 1px solid #000; 
        margin: 2px;
        padding: 5px;
    }

    .hero h2{
        font-size: 30px;
        margin-bottom: 10px;
    }

    .hero .picture{       
        height: 300px;
        border: 1px solid #eee; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 3px;
        font-size: 300px;
        color: rgba(255,255,255,0.6);
    }

    h3{
        display: flex;
        justify-content: space-around;
        margin-bottom: 5px;
    }

    .likeIcon, .nolikeIcon{
        width: 50px;
        height: 50px;
        background-image: url('../../../assets/nolike.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 10px auto 5px auto;
    }   

    .likeIcon{        
        background-image: url('../../../assets/like.png');
    }   
</style>