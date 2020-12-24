<template>
  <main class="auth-layout">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="auth-layout__menu">
            <b-list-group horizontal="sm">
              <b-list-group-item to="/">Главная</b-list-group-item>
              <b-list-group-item to="/register">Регистрация</b-list-group-item>
              <b-list-group-item to="/login">Авторизация</b-list-group-item>
            </b-list-group>
          </div>
        </div>
        <div class="col-md-8">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
  .auth-layout {
    height: 100vh;
    display: flex;
    align-items: center;
    &__menu {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>