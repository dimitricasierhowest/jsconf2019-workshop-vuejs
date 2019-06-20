<template>    
    <div class="heroes">
        <header>x hero(es) to like!</header>
        <section> 
            list of heroes
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

    - mixins
*/

export default {
    name: "heroes"

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