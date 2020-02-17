<template>
  <div>
    <button @click="addc">+</button>
    {{increase_count}}
    <button @click="subc">-</button>
  </div>
</template>

<script>
import * as types from 'store/mutations_types'

export default {
  computed: {
    increase_count() {
      return this.$store.getters[types.INCREASE_COUNT]
    }
  },
  methods: {
    addc() {
      this.$store.commit('add')
    },
    subc() {
      this.$store
      .dispatch('oneSecHandle', 2)
      .then(res => {
        console.log('完成')
      })
    }
  }
}
</script>