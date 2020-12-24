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
                    const data = snapshot.val()
                    if (data) {
                        data.email = firebase.auth().currentUser.email
                        commit('SET_USER', data)
                    }
                })
            } catch(err) { throw err }
        },
        async CHANGE_USER_INFO({ dispatch, commit }, { name, surname }) {
            console.log(name, surname)
            try {
                const uid = await dispatch('GET_ID')
                await firebase.database().ref(`/users/${uid}/info`).set({ name, surname })
                commit('SET_USER', { name, surname })
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
        GET_USER(state) {
            return state.user
        }
    }
}