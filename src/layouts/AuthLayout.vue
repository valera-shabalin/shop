<template>
  <main class="auth-layout">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="auth-layout__menu">
            <router-link to="/register" class="btn">Регистрация</router-link>
            <router-link to="/login" class="btn">Авторизация</router-link>
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