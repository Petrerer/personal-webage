import { createStore } from 'vuex'
import createPresitedState from 'vuex-persistedstate'
import cards from './modules/cards.js'

export default createStore({
    plugins: [
        createPresitedState
    ],
    modules: {
        cards
    },
})
