import './style.scss';
import Vue from 'vue';
import genres from './util/genres'

new Vue({
  el:'#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
       <div v-for=" movie in movies" class="movie"> {{ movie.title }} </div>
       </div>`,
      data() {
          return {
            movies: [
              { title: 'pulp fiction' },
              { title: 'forrest gump' },
              { title: 'tot' },
              { title: 'bwrfbvwerfbvwerbv' }
            ]
          }
        }
    },
    'movie-filter': {
      data() {
        return {
          genres
        }
      },
       template: `<div id="movie-filter">
          <h2> Filter results </h2>
          <div class="filter-group">
            <check-filter v-for="genre in genres" :title="genre"></check-filter>
          </div>
        </div>`,
      components: {
        'check-filter': {
          props: ['title'],
          template: `<div class="check-filter">
                <span class="checkbox"></span>
                <span class="check-filter-title">{{title}}</span>
              </div>`
        }
      }
    }
  }


})