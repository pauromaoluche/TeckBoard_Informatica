import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    /* state é o estado atual */
    state: {
        colum: []
    },
    /* a mutations fara a mudança desse estado */
    mutations: {
        /* estamos setando, o novo valor de estado */
        incrementsColum(state) {
            console.log(state);
            return state.colum = [{
                    id: 'id',
                    name: 'name',
                    email: 'email',
                    phone: 'phone',
                }

            ]
        }
    },

    getters: {
        filters({ colum }) {
            return colum.length;
        }
    }
})

export default store