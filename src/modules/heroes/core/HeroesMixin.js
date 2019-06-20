import HeroService from '@/modules/heroes/services/HeroService.js'

export default {
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
   },
    methods:{
        onLike(hero){
            let service = this.getService() 
            if(hero.liked) {      
                service.like(hero.id)                
                return
            }//endif

            service.unLike(hero.id)
        },
        getService(){
            return new HeroService
        }
    }
}