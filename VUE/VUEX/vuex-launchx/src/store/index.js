import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: {
    cuadrado(state){
      return state.contador * state.contador;
    }
  },
  mutations: {
    bajarcontador(state, random){
      state.contador-=random;
    },
    subircontador(state, random){
      state.contador += random;
    }
  },
  actions: {
    async subirContador({ commit }) {
      const res= await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("subircontador",results)
    },
    async bajarContador({ commit }) {
      const res= await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("bajarcontador",results)
    }
    
  },
  modules: {
  }
})
