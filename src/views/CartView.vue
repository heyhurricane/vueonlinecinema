<template>
  <cart-item></cart-item>
  <h2 class="cart__title">Ваши покупки:</h2>
  <div class="cart__orders" v-if="purchasedTickets.length > 0">
    <div class="cart__order" v-for="ticket in purchasedTickets">
      <div class="cart__order-info">
        <span class="cart__order-movie"><b>{{ ticket.movie }}</b></span>
        <span class="cart__order-date">{{ ticket.session }}</span>
        <div class="cart__order-tickets">
          <div class="cart__order-tickets-item" v-for="place in ticket.places">
            <span class="cart__order-tickets-row">Ряд: <b>{{ place.row + 1 }}</b></span>
            <span class="cart__order-tickets-place">Место: <b>{{ place.place + 1 }}</b></span>
          </div>
        </div>
      </div>

      <button class="cart__order-return cart__btn" @click="returnTickets(ticket)">Вернуть</button>
    </div>
  </div>

  <p class="cart__text" v-else style="color: red;">Вы не совершили ни одной покупки</p>
</template>

<script>

import CartItem from "@/components/CartItem.vue";
import {mapState} from "vuex";
export default {
  name: "CartView",
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      purchasedTickets: state => state.tickets.purchasedTickets
    }),
  },
  methods: {
    returnTickets(ticket) {
      this.$store.commit('tickets/RETURN_TICKET', ticket);
    }
  }
}
</script>

<style scoped>

</style>