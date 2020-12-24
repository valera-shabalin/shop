<template>
  <div class="admin-page">
    <div class="row">
      <div class="col-12">
        <h1>Товары в вашем магазине</h1>
      </div>
      <div class="col-12 mt-3">
        <b-table striped hover bordered :items="items" :fields="fields"></b-table>
      </div>
      <div class="col-12 mt-3">
        <h2>Добавить товар</h2>
        <b-form @submit.prevent="onSubmit" class="mt-3">
          <b-form-group id="input-group-1">
            <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Название"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2">
            <b-form-input
                id="input-2"
                v-model="form.category"
                type="text"
                placeholder="Категория"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-form-input
                id="input-3"
                v-model="form.price"
                type="number"
                placeholder="Цена"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-input
                id="input-4"
                v-model="form.desc"
                type="text"
                placeholder="Описание"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5">
            <b-form-input
                id="input-5"
                v-model="form.count"
                type="number"
                placeholder="Количество"
                required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Добавить</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data: () => ({
    form: {
      name: '',
      category: '',
      price: null,
      desc: '',
      count: null
    },
    fields: [
      { key: 'name', label: 'Название' },
      { key: 'category', label: 'Категория' },
      { key: 'price', label: 'Цена' },
      { key: 'desc', label: 'Описание' },
      { key: 'count', label: 'Количество' },
    ]
  }),
  computed: {
    items() {
      return this.$store.getters.GET_CATALOG
    }
  },
  methods: {
    async onSubmit() {
      try {
        const newItem = await this.$store.dispatch('ADD_ITEM', this.form)
        this.items.push(newItem)
        this.resetForm()
      } catch(err) {
        console.error(err)
      }
    },
    resetForm() {
      this.form.name = ''
      this.form.category = ''
      this.form.price = null
      this.form.desc = ''
      this.form.count = null
    }
  }
}
</script>
