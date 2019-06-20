<template>
    <div class="heroFilter">
  
        <div>
            <div class="search row">
                <div class="group">
                    <label>name</label> <input/>
                </div>
                <div class="group">
                    <label>race</label> <input/>
                </div>
            </div>
            <div class="selection row">
                <div class="group">
                    <label>gender</label>
                    <ul>
                        <li><label for="male">Male</label> <input id="male" type="checkbox" value="Male"/></li>
                        <li><label for="female">Female</label><input id="female" type="checkbox" value="Female"/></li>
                        <li><label for="none">None</label><input id="none" type="checkbox" value="-"/></li> 
                    </ul>
                </div>
                <div class="group">
                    <label>stars</label>
                    <ul >
                        <!-- loop stars from 1 to 6 -->
                        <li>
                            <label for="star_x" >star</label> 
                            <input id="star_x" type="checkbox" value="star" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sort row">
                <div class="group">
                    <label>sort</label>
                    <select>
                        <option value=""></option>
                        <option value="name">name</option>
                        <option value="race">race</option>
                        <option value="stars">stars</option>
                    </select>
                    <select>
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


export default {
    name: "hero-filter",    
    
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
