<template>
  <main class="main-layout">

      <b-navbar toggleable="sm" type="light" variant="light">

        <b-navbar-brand to="/">Shop</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" exact active-class="active">Главная</b-nav-item>
            <b-nav-item to="/catalog" active-class="active">Каталог</b-nav-item>
            <b-nav-item to="/profile" active-class="active" v-if="auth">Профиль</b-nav-item>

            <b-button @click.prevent="logout" class="ml-3" variant="outline-danger" v-if="auth">Выйти</b-button>
            <b-button to="/login" class="ml-3" variant="outline-primary" v-else>Войти</b-button>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>

      <div class="container">
        <router-view />
      </div>

  </main>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'MainLayout',
  async created() {
    await this.$store.dispatch('INIT_USER_INFO')
  },
  computed: {
    auth() {
      return firebase.auth().currentUser
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('LOGOUT')
      await this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>