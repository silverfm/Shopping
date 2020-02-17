<template>
  <div>
    <button @click="addc">+</button>
    {{$store.state.count}}
    <button @click="subc">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    addc() {
      this.$store.commit('add')
    },
    subc() {
      this.$store.commit('sub')
    }
  }
}
</script>