<template>
  <div class="profile-page">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    name() {
      return this.$store.getters.USER_NAME || ''
    }
  }
}
</script>
