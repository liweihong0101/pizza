const state ={
    currentUser: null,
}
const getters ={
    currentUser: state => state.currentUser
}
const mutations ={
    //更改用户信息
    userStatus (state, user) {
        if(user){
            state.currentUser = user;
        }else{
            state.currentUser = null;
        }
    }
}
const actions ={
    //应用mutation
    setUser({commit}, user) {
        commit('userStatus', user)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}
