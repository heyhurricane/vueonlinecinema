<template>
  <div class="movie">
    <div class="movie__img" :style="{ background: `url(/img/movies/${movie.img}.webp) no-repeat center / cover`  }"></div>
    <div class="movie__info">
      <div class="movie__name"><strong>{{ movie.name }}</strong></div>
      <div class="movie__desc">{{ movie.desc }}</div>
      <router-link :to="{
                    name: 'MoviePage',
                    params: {
                      id: movie.id,
                    }
                  }" class="movie__link">Купить билеты</router-link>
    </div>
<!--    <div class="movie__btns">-->
<!--      <my-button @click="$emit('done', movie)" class="btn"></my-button>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    },
  },
  name: "MovieItem"
}
</script>

<style scoped>

</style>