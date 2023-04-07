<template>
  <my-select :model-value="selectedSort"
             @update:model-value="setFilterOptions"
             :options="sortOptions"/>

  <my-select :model-value="selectedFilter"
             @update:model-value="setFilteredSort"
             :options="filterOptions"/>
</template>

<script>
export default {
  name: "my-filters",
  data() {
    return {
      selectedSort: '',
      selectedFilter: '',
      selectedMainOption: '',
      selectedOption: '',
      sortOptions: [
        {value: 'year', name: 'По году'},
        {value: 'genre', name: 'По жанру'},
        {value: 'rate', name: 'По рейтингу'},
      ],
      filterOptions: [],
    }
  },
  props: {
    movies: {
      type: Array,
      required: true
    },
  },
  methods: {
    setFilteredSort(selectedFilter) {
      if (this.selectedMainOption == 'year' || this.selectedMainOption == 'rate') {
        this.selectedOption = Number(selectedFilter);
        this.$emit('filter', this.selectedMainOption, this.selectedOption);
      }
      else {
        this.selectedOption = selectedFilter;
        this.$emit('filter', this.selectedMainOption, this.selectedOption)
      }
    },
    setFilterOptions(selectedSort) {
      if (this.selectedMainOption !== selectedSort) {
        this.selectedOption = '';
      }
      this.selectedMainOption = selectedSort;
      this.filterOptions = this.movies.map(v => ({value: v[selectedSort], name: v[selectedSort]}));
      console.log(this.filterOptions);

      this.filterOptions = [...new Map(this.filterOptions.map(item => [item.value, item])).values()]
          .sort(function(a, b) {
            return a.value - b.value;
          });
    },
  }
}
</script>

<style scoped>

</style>