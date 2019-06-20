<template>
    <div class="stats">      
        <ul>
            <li v-for="key in keys" :key="key">
                <label>{{key}}: </label> <div class="bar" :style="{width: (stats[key] *2) + 'px' }">{{ stats[key]}}</div>
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
    props: {
        stats: Object
    },
    computed: {
        keys(){
            return Object.keys(this.stats)
        }
    }
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