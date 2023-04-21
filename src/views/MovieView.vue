<template>
  <div class="about">
    <h1>This is an about page</h1>

    <movie-item
        :movie="movie[0]"
        :key="movie[0].id"
    />
  </div>
</template>


<script>

import movieItem from "@/components/MovieItem.vue";
import {mapGetters, mapState} from "vuex";
export default {
  name: "MovieView",
  components: {
    movieItem
  },
  data() {
    return {
      movie: [],
    }
  },
  methods: {
  },
  created() {
    this.movie = [...this.movies].filter(movie => movie.id === +this.$route.params.id);
  },
  computed: {
    ...mapState({
      movies: state => state.movie.movies,
    }),
  },
}
</script>

<style scoped>

</style>

