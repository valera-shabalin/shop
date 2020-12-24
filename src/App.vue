<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout: () => import('@/layouts/EmptyLayout'),
    MainLayout: () => import('@/layouts/MainLayout'),
    AuthLayout: () => import('@/layouts/AuthLayout')
  }
}
</script>
