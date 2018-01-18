<template>
  <div id="movie-filter">
      <h2> Filter results </h2>
      <h3>By time of day</h3>
      <div class="filter-group">
        <check-filter v-for="(time, index) in times" category="time" :title="time" :key="index"></check-filter>
      </div>
      <h3>By genre</h3>
      <div class="filter-group">
        <check-filter v-for="(genre, index) in genres" category="genre"  :title="genre" :key="index"></check-filter>
      </div>
  </div>
</template>

<script>

import CheckFilter from './CheckFilter.vue';
import genres from '../util/genres';
import times from '../util/times';

export default {
  components: {
    CheckFilter
    },
  data() {
    return { 
      genres,
       times 
       }
    }
}
</script>
