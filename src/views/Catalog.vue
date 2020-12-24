<template>
  <div class="catalog-page">
    <div class="row">
      <div class="col-12 mb-4">
        <h1>Каталог товаров</h1>
      </div>

      <div class="col-lg-4 col-md-6 mb-3"
           v-for="(item, index) of items"
           :key="item.id"
      >
        <b-card
            :title="item.name"
            tag="article"
            class="mb-2"
        >
          <b-list-group class="my-3">
            <b-list-group-item>Описание: {{ item.desc }}</b-list-group-item>
            <b-list-group-item>Стоимость: {{ item.price }} рублей</b-list-group-item>
            <b-list-group-item>Категория: {{ item.category }}</b-list-group-item>
            <b-list-group-item>Количество: {{ item.count }}</b-list-group-item>
          </b-list-group>

          <b-button href="#" variant="primary" @click.prevent="buyItem(item, index)">Купить</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  computed: {
    items() {
      return this.$store.getters.GET_CATALOG
    }
  },
  methods: {
    async buyItem(item, index) {
      try {
        const deleteStatus = await this.$store.dispatch('BUY_ITEM', item)
        if (deleteStatus)
          this.items.splice(index, 1)
        else
          this.items[index].count--
      } catch(err) {
        console.error(err)
      }
    }
  }
}
</script>
