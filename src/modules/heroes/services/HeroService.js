export default class HeroService{

    /*
    Fetching all heroes
    */
    async heroes(){
        let response = await fetch('/heroes.json')
        let data = await response.json();
        let likes = this.getLikes()

        return data.filter(value => {
            return value !== null
        })
        .map(hero => {  
    
            return {
                id: hero.id,
                name: hero.name,
                picture: hero.image.url,
                stats: hero.powerstats,
                appearance: hero.appearance,
                stars: this._getStars(hero.powerstats),
                starsRaw: this._getStars(hero.powerstats),
                liked: likes.indexOf(parseInt(hero.id)) === -1 ? false : true 

            }
        })
    }

    /*
    Fetching all 'liked' heroes
    */
    async myHeroes(){
        let heroes = await this.heroes()
        
        return heroes.filter(value => {
            return value.liked
        })
    }

    /*
    Applying filter on list of heroes
    */
    filter(heroes, filter){
       return heroes
        .filter(hero => {     
            if(filter === null)
                return true  
            
            return hero.name.toLowerCase().includes(filter.name.toLowerCase())
            &&  filter.gender.indexOf(hero.appearance.gender) !== -1
            && hero.appearance.race.toLowerCase().includes(filter.race.toLowerCase())
            &&  filter.stars.indexOf(parseInt(hero.stars)) !== -1

        })      
        
        
    }

    /*
    Sorting a llist of heroes
    */
    sort(heroes, sort){
        if(sort === null || !sort.field)
            return heroes

        return  heroes.sort((heroA, heroB) =>{

            if(sort.field === "stars")
                return (sort.order === "asc") ? heroA.stars - heroB.stars : heroB.stars - heroA.stars

            if(sort.field === "name")
                return (sort.order === "asc") ? ((heroA.name < heroB.name) ? -1 : 1) : ((heroA.name > heroB.name) ? -1 : 1)

            if(sort.field === "race")
                return (sort.order === "asc") ? ((heroA.appearance.race  < heroB.appearance.race ) ? -1 : 1) : ((heroA.appearance.race  > heroB.appearance.race ) ? -1 : 1)                        
        })
    }

    
    /*
        Liking a hero
    */
    like(id){
        id = parseInt(id)
        let likes = this.getLikes()
        likes.push(id)
        this._saveLikes(likes) 

        return likes
        
    }

    /*
        Unliking a hero
    */
    unLike(id){
        id = parseInt(id)
        let likes = this.getLikes()
        let index = likes.indexOf(id)
        if(index === -1)
            return likes

        likes.splice(index, 1)
        this._saveLikes(likes)

        return likes
    }

    /*
        Getting the ids of the liked heroes
    */
    getLikes(){
        let likes = localStorage.getItem('heroes.likes')
        likes = likes ? JSON.parse(likes) : []

        return likes
    }

    /*
        Counting the numbers of likes
    */
    countLikes(){
        return this.getLikes().length
    }

    // -- private
    /*
    Calculating the stars
    */
    _getStars(powerstats){
    return ((Object.values(powerstats).reduce((bag, item) => {                                
            return bag + ((item/100))
        }, 0))).toFixed()
    }   

    /*
    Saving likes in localstorage
    */
    _saveLikes(likes){
        localStorage.setItem('heroes.likes', JSON.stringify(likes))
    }
}
