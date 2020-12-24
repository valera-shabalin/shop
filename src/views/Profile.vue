<template>
  <div class="profile-page">
    <div class="row">
      <div class="col-12 mt-4">
        <h1>Редактировать профиль</h1>
        <b-form @submit.prevent="onSubmit" class="mt-3" v-if="show">
          <b-form-group
              id="input-group-1"
              label="Имя:"
              label-for="input-1"
          >
            <b-form-input
                id="input-1"
                v-model="user.name"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-2"
              label="Фамилия:"
              label-for="input-2"
          >
            <b-form-input
                id="input-2"
                v-model="user.surname"
                required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Сохранить</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  mounted() {
    this.name = this.$store.getters.GET_USER.name
  },
  data: () => ({
    show: true,
    name: ''
  }),
  computed: {
    user() {
      return this.$store.getters.GET_USER
    }
  },
  methods: {
    async onSubmit() {
      const data = {
        name: this.user.name,
        surname: this.user.surname
      }
      try {
        await this.$store.dispatch('CHANGE_USER_INFO', data)
        alert('Данные обновлены!')
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>
