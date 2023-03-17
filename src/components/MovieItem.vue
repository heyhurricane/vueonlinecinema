<template>
  <div class="movie">
    <div class="movie__img" :style="{ background: `url(/img/movies/${movie.img}.webp) no-repeat center / cover`  }"></div>
    <div class="movie__info">
      <div class="movie__name"><strong>{{ movie.name }}</strong></div>
      <div class="movie__desc">{{ movie.desc }}</div>
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
  .movie {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    width: 95%;
    margin: 0 auto 30px;
    border: 2px solid black;
    padding: 20px;
  }

  .movie__img {
    margin-right: 20px;
    height: 200px;
    width: 150px;
    border: 2px solid black;
  }

  .movie__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    max-width: 400px;
    width: 100%;
  }

  .movie__name {
    margin-bottom: 20px;
    font-size: 35px;
  }
</style>