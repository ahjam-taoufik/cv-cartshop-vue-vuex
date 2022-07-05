import {createStore} from 'vuex'
import authModule from '../modules/authModule/authModule'
import shopModule from '../modules/shopModule/shopModule'


const store=createStore({
   modules:{
    authModule,
    shopModule
   },
//    state(){
//     return{}
//    },
//    mutations:{},
//    getters:{},
//    actions:{},
})

export default store;