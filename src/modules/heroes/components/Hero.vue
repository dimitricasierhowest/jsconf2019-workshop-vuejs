<template>
    <article class="hero">
        <header>
            <h2>name</h2>        
            <h3><span>race</span> <span>gender</span></h3>
        </header>
        <div class="picture" style="backgroundImage=url(...)">
            <div>stars</div>
        </div>
        STATS COMPONENT     
        <div class="nolikeIcon"></div>  
    </article>
</template>
<script>

/*
    - class and style inding

    - components
    - props
    - methods
*/

export default {
    name: 'hero',
    
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