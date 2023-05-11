<template>
  <div class="movie">
    <my-dialog v-model:show="buyTicketPopupVisible">
      <div class="movie__name"><strong>{{ movie.name }}</strong></div>
      <div class="movie__session"><strong>{{ pickedSession }}</strong></div>
      <hall-component @click="selectedPlaces"></hall-component>
      <button class="movie__buy-tickets" @click="addingToCart">Добавить в корзину</button>
    </my-dialog>

    <div class="movie__img" :style="{ background: `url(/img/movies/${movie.img}.webp) no-repeat center / cover`  }"></div>
    <div class="movie__info">
      <div class="movie__name"><strong>{{ movie.name }}</strong></div>
      <div class="movie__desc">{{ movie.desc }}</div>
      <router-link v-if="!isMoviePage" :to="{
                    name: 'MoviePage',
                    params: {
                      id: movie.id,
                    }
                  }" class="movie__link">Купить билеты</router-link>

      <div v-if="isMoviePage" class="movie__sessions">
        <div class="movie__sessions-text">Выберите сеанс:</div>
        <button class="movie__sessions-item" v-for="session in movie.sessions" :key="session" @click="showPopup">{{ session }}</button>
      </div>
    </div>
<!--    <div class="movie__btns">-->
<!--      <my-button @click="$emit('done', movie)" class="btn"></my-button>-->
<!--    </div>-->
  </div>
</template>

<script>
import hallComponent from "@/components/HallComponent.vue";
import myDialog from "@/components/UI/MyDialog.vue";
import {mapState} from "vuex";
export default {
  components: {hallComponent, myDialog},
  data() {
    return {
      buyTicketPopupVisible: false,
      pickedSession: '',
      ticket: {},
    }
  },
  props: {
    movie: {
      type: Object,
      required: true
    },
  },
  computed: {
    isMoviePage() {
      return this.$route.name === 'MoviePage';
    },

    ...mapState({
      cartTickets: state => state.tickets.tickets,
    }),
  },
  methods: {
    showPopup(value) {
      this.buyTicketPopupVisible = true;
      this.pickedSession = value.target.textContent;
    },
    selectedPlaces(ticket) {
      this.tickets = ticket;
    },
    addingToCart() {
      this.ticket['movie'] = this.movie.name;
      this.ticket['session'] = this.pickedSession;
      this.ticket['places'] = [];
      this.tickets.forEach((ticket)=> {
        this.ticket['places'].push(ticket);
      });
      this.$store.commit('tickets/ADD_TICKET', this.ticket);
      this.buyTicketPopupVisible = false;
    }
  },
  name: "MovieItem"
}
</script>

<style scoped>

</style>