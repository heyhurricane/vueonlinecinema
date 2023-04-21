<template>
  <div class="dropdown">
    <button class="dropdown__icon" @click="showOrder"></button>
    <div class="dropdown__content" v-if="dialogVisible">
        <cart-item></cart-item>
    </div>
  </div>


</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
  name: "MyDropdown",
  components: {
    CartItem
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showOrder() {
      this.dialogVisible = !this.dialogVisible;
    },
  }
}
</script>

<style scoped>

</style>