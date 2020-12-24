<template>
  <main class="main-layout">

      <b-navbar toggleable="sm" type="light" variant="light">

        <b-navbar-brand to="/">Shop</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" exact active-class="active">Домашняя страница</b-nav-item>
            <b-nav-item to="/catalog" active-class="active">Каталог</b-nav-item>
            <b-nav-item to="/profile" active-class="active">Профиль</b-nav-item>
            <b-nav-item to="/login" active-class="active">Выйти</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>

  </main>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="scss" scoped>

</style>