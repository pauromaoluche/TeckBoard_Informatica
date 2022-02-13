const state = {
        colum: []
    }
    /* a mutations fara a mudança desse estado */
const mutations = {
        /* estamos setando, o novo valor de estado */
        incrementsColum(state) {
            console.log(state);
            return state.colum = [
                'col1',
                'col2',
                'col3'
            ]
        }
    },

    export default {
        state,
        mutation
    }