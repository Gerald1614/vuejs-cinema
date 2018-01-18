<template>
<div id="day-select">
  <ul class="days">
    <li :class="{day: true, active: isActive(day) }" v-for="(day, index) in days" :key="index" @click="selectDay(day)">{{ formatDay(day) }}</li>
    <li class="day-selector">
      <span class="dec" @click="changeDay(-1)"></span>
      <span class="inc" @click="changeDay(+1)"></span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: [
    'selected'
  ],
  data()
    {
      return {
        days: [0, 1, 2, 3, 4, 5, 6].map(num => this.$moment().add(num, 'days'))
      }
    },
    methods: {
      changeDay(arg) {
        let newDay = this.$moment(this.selected).add(arg, "days");
        if (this.days.find(day => newDay.isSame(day, 'day'))) {
         this.selectDay(newDay);
        }

      },
      isActive(day) {
        return day.isSame(this.selected, 'day')
      },
      formatDay(raw) {
        if (raw.isSame(this.$moment(), 'day')) {
          return 'Today';
        } else {
          return raw.format('ddd DD/MM');
        }
      },
      selectDay(day) {
        this.$bus.$emit('set-day', day);
      }
    }
 }
</script>
