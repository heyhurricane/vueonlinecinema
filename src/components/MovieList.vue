<template>
  <div v-if="movies.length > 0">
    <h3 style="color: #3b3bff">Movie List</h3>

    <my-filters :movies="movies"
                @filter="setSelectedOptions"
    ></my-filters>

    <transition-group name="movie-list">
      <movie-item
          v-for="movie in paginatedMovies"
          :movie="movie"
          :key="movie.id"
      />
    </transition-group>

    <div class="pages">
      <div class="pages__item" v-for="(page, index) in pages" :key="index" @click="nextPage(page)">{{ page }}</div>
    </div>
  </div>
  <h2 v-else style="color: red;">movies list is empty</h2>
</template>

<script>

import MovieItem from "@/components/MovieItem.vue";
import {mapGetters, mapMutations, mapState} from "vuex";
import myFilters from "@/components/UI/MyFilters.vue";

export default {
  components: {myFilters, MovieItem},
  data() {
    return {
      limit: 4,
      pageNumber: 1,
      // selectedSort: '',
      // selectedFilter: '',
      selectedMainOption: '',
      selectedOption: '',
      filteredMovies: this.movies,
      // sortOptions: [
      //   {value: 'year', name: 'По году'},
      //   {value: 'genre', name: 'По жанру'},
      //   {value: 'rate', name: 'По рейтингу'},
      // ],
      // filterOptions: [],
    }
  },
  props: {
    movies: {
      type: Array,
      required: true
    },
  },
  events: ['filter'],
  methods: {
    nextPage(pageNum) {
      this.pageNumber = pageNum;
    },

    setSelectedOptions(mainOption, option) {
      this.selectedMainOption = mainOption;
      this.selectedOption = option;
    }
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters({
    }),
    pages() {
      return Math.ceil(this.moviesFilter.length / this.limit);
    },
    paginatedMovies() {
      let from = (this.pageNumber - 1) * this.limit;
      let to = from + this.limit;
      return this.moviesFilter.slice(from, to);
    },
    moviesFilter() {
      if (this.selectedMainOption && this.selectedOption) {
        return [...this.movies].filter(movie => movie[this.selectedMainOption] === this.selectedOption);
      }
      else {
        return this.movies;
      }
    }

  },
  watch: {
    moviesFilter(newValue) {
      this.pageNumber = 1;
    }
  },
  name: "MovieList"
}
</script>

<style scoped>
</style>