const  authModule ={
   state(){
    return{
        isLoggedIn:false
    }
   },
   mutations:{
    login(state) {
        state.isLoggedIn = true;
      },
      logout(state) {
        state.isLoggedIn = false;
      },
   },
   getters:{
      isAuthLogin(state){
       return  state.isLoggedIn
      }
   },
   actions:{
    login(context){
        context.commit('login')
    },
    logout(context){
        context.commit('logout')
    },
   }


}

export default authModule