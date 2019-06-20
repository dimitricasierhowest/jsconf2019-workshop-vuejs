<template>
    <div class="heroFilter">
  
        <div>
            <div class="search row">
                <div class="group">
                    <label>name</label> <input v-model="filter.name"/>
                </div>
                <div class="group">
                    <label>race</label> <input v-model="filter.race"/>
                </div>
            </div>
            <div class="selection row">
                <div class="group">
                    <label>gender</label>
                    <ul>
                        <li><label for="male">Male</label> <input id="male" type="checkbox" v-model="filter.gender" value="Male"/></li>
                        <li><label for="female">Female</label><input id="female" type="checkbox" v-model="filter.gender" value="Female"/></li>
                        <li><label for="none">None</label><input id="none" type="checkbox" v-model="filter.gender" value="-"/></li> 
                    </ul>
                </div>
                <div class="group">
                    <label>stars</label>
                    <ul >
                        <li v-for="star in 6" :key="star">
                            <label :for="'star_' + star" >{{star}}</label> 
                            <input :id="'star_' + star" type="checkbox" v-model="filter.stars" :value="star" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sort row">
                <div class="group">
                    <label>sort</label>
                    <select v-model="sort.field">
                        <option value=""></option>
                        <option value="name">name</option>
                        <option value="race">race</option>
                        <option value="stars">stars</option>
                    </select>
                    <select v-model="sort.order" v-show="sort.field">
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                    </select>
                </div>
            </div>
            
        </div> 
    </div>
</template>

<script>

/*
  - eventbus
  - watchers
*/

import {EventBus} from '@/modules/core/EventBus.js'

export default {
    name: "hero-filter",    
    data(){
        return {
            filter: {
                name: "",
                gender: ['Female', 'Male', '-'],
                race: "",
                stars: [1,2,3,4,5,6],
            },
            sort: {
                field: "name",
                order: "asc"
            }
        }
    },
    watch: {
        'filter': {
            handler(newValue) {
                 EventBus.$emit('filterChanged', newValue)
            },
            deep: true
        },
        'sort': {
            handler(newValue) {
                 EventBus.$emit('sortChanged', newValue)
            },
            deep: true
        }
    },
}
</script>

<style>
    
    .heroFilter label{
        font-size: 20px;
        text-transform: lowercase;
        margin: 0 5px;
       
    }


    .heroFilter .group > label{
        width: 100px;
        text-align: left;
    }

    .heroFilter li > label{
        text-align: left;
    }
    .heroFilter input{
        padding: 7px;
    
    }

    .heroFilter .search, .heroFilter .selection{
        display: flex;
        justify-content: flex-start;
        
    }

    .heroFilter .search input{
        margin: 0;
        width: 300px;
    }

    .heroFilter .row{
        margin-bottom: 20px;
    }

    .group  ul{
        display: flex;
        justify-content: flex-start;

        
    }

    .heroFilter {
        background: rgba(255,255,255,1);
        padding: 10px;
        max-width: 1200px;
        margin: 0 auto;
    }


    .heroFilter .group{
        width: 50%;
        display: flex;
    }
    
    
</style>
