import firebase from 'firebase/app'

export default {
    state: {
        user: {}
    },
    mutations: {
        REMOVE_USER(state) {
            state.user = {}
        },
        SET_USER(state, payload) {
            state.user = payload
        }
    },
    actions: {
        GET_ID() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async INIT_USER_INFO({ dispatch, commit }) {
            try {
                const uid = await dispatch('GET_ID')
                const response = firebase.database().ref(`users/${uid}/info`)
                response.on('value', (snapshot) => {
                    if (snapshot.val())
                        commit('SET_USER', snapshot.val())
                })
            } catch(err) { throw err }
        },
        async LOGIN({ dispatch, commit }, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch(err) { throw err }
        },
        async REGISTER({ dispatch, commit }, { email, password, name }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('GET_ID')
                await firebase.database().ref(`/users/${uid}/info`).set({ name })
            } catch(err) { throw err }
        },
        async LOGOUT({ commit }) {
            try {
                await firebase.auth().signOut()
                commit('REMOVE_USER')
            } catch(err) { throw err }
        }
    },
    getters: {
        USER_NAME(state) {
            return state.user.name
        }
    }
}