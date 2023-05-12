<template>
  <div class="cart">
    <div class="cart__wrap" v-if="cartTickets.length > 0">
      <div class="cart__item" v-for="session in cartTickets">
        <span class="cart__movie">{{ session.movie }}</span>
        <span class="cart__date">{{ session.session }}</span>
        <div class="cart__tickets">
          <div class="cart__tickets-item" v-for="ticket in session.places">
            <span class="cart__tickets-row">Ряд: <b>{{ ticket.row}}</b></span>
            <span class="cart__tickets-place">Место: <b>{{ ticket.place}}</b></span>
          </div>
        </div>
      </div>
      <button class="cart__btn" @click="buyTickets">Купить</button>
    </div>
    <h2 v-else style="color: red;">no tickets in your cart</h2>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapState({
      cartTickets: state => state.tickets.tickets,
    }),
  },
  methods: {
    buyTickets() {
      this.$store.commit('tickets/BUY_TICKET', this.cartTickets);
    }
  }
}
</script>

<style scoped>

</style>