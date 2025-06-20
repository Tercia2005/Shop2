import { createStore } from 'vuex'
export default createStore({
  state: {
    products: [],
    cart: [
      {
        id: 1,
        name: 'Modern Sofa',
        category: 'Seating',
        quantity: 1,
        imageUrl: "https://thefoschini.vtexassets.com/arquivos/ids/193704490-1200-1600?v=638848973576600000&width=1200&height=1600&aspect=true",
  },
    ]
  },
  mutations: {
    update_product(state, payload){
      state.products = payload
    }
  },
  actions: {
    async fetch_products(store, payload_options){
      let data = await fetch('https://matthew-dean-brown.github.io/furniture/')
      let products = await data.json()
      store.commit('update_product', products)
    }
  },
}) //paste in store index.js to display product image//