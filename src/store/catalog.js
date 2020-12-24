import firebase from 'firebase/app'

export default {
    state: {
        catalog: []
    },
    mutations: {
        SET_CATALOG(state, payload) {
            state.catalog = payload
        },
        ADD_ITEM(state, payload) {
            state.catalog.push(payload)
        }
    },
    actions: {
        async INIT_CATALOG({ dispatch, commit }) {
            try {
                const list = (await firebase.database().ref(`/catalog`).once('value')).val() || {}
                const data = Object.keys(list).map(key => ({ ...list[key], id: key }))
                commit('SET_CATALOG', data)
            } catch(err) { throw err }
        },
        async ADD_ITEM({ dispatch, commit }, { name, category, price, desc, count }) {
            try {
                const item = await firebase.database().ref(`/catalog`).push({ name, category, price, desc, count })
                commit('ADD_ITEM', item)
                return { name, category, price, desc, count, id: item.key }
            } catch(err) { throw err }
        },
        async BUY_ITEM({ dispatch, commit }, { name, category, price, desc, count, id }) {
            try {
                if (--count > 0) {
                    await firebase.database().ref(`/catalog/${id}`).update({ count })
                    return false
                } else {
                    await firebase.database().ref(`/catalog/${id}`).remove()
                    return true
                }
            } catch(err) { throw err }
        }
    },
    getters: {
        GET_CATALOG(state) {
            return state.catalog
        },
        GET_COUNT(state) {
            return state.catalog.length
        }
    }
}