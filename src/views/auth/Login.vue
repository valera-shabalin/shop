<template>
  <div class="login-page">
    <h1>Авторизация</h1>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group
          id="input-group-1"
          label="Адрес электронной почты:"
          label-for="input-1"
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Введите Ваш адрес электронной почты"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-2"
          label="Пароль:"
          label-for="input-2"
      >
        <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="Введите ваш пароль"
            required
        ></b-form-input>
      </b-form-group>

      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <b-button type="submit" variant="primary" class="mr-2">Войти</b-button>
          <b-button type="reset" variant="danger">Очистить</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import messages from '@/utils/messages'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('LOGIN', this.form)
        await this.$router.push('/profile')
      } catch(err) {
        alert(messages[err.code])
      }
    },
    onReset() {
      this.form.email = ''
      this.form.name = ''

      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page {
    h1 {
      margin-bottom: 20px;
      text-align: center;
    }
  }
</style>