<template>
    <div class="stats">      
        <ul>
            <li >
                <label>stat</label> <div class="bar" style="width: 50px">50</div>
            </li>
        </ul>        
    </div>
</template>
<script>

/*
    - style binding

    - computed
    - props
*/

export default{
    name: "stats",
    
}
</script>
<style>
    .stats li{
        display: flex;
        margin: 1px 0;
       
    }

    .stats li label{
        width: 30%;
        text-align: left;
    }

    .stats li .bar{
        height: 20px;
        background-color: gold;
        padding: 2px 0;
    }
</style>