<template>
  <div class="datePick-wrap">
    <div class="datepicker-trigger">
      Retrieve old records：
      <button id="datepicker-trigger">
        <i class="far fa-calendar-alt"></i>
        {{ formatDates(dateOne, dateTwo) || 'Enter Date Here'}}
      </button>
      <AirbnbStyleDatepicker :trigger-element-id="'datepicker-trigger'" :mode="'range'" :fullscreen-mobile="true" :date-one="dateOne" :date-two="dateTwo" :showShortcutsMenuTrigger="false" @date-one-selected="val => { dateOne = val }" @date-two-selected="val => { dateTwo = val }" @apply="chooseDate" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
import format from 'date-fns/format'

Vue.use(AirbnbStyleDatepicker, {
  colors: {
    selected: '#506478',
    inRange: '#A0B4C8',
    inRangeBorder: '#A0B4C8'
  },
  texts: {
    apply: 'Submit',
    cancel: 'Close'
  }
})

export default {
  data() {
    return {
      dateFormat: 'DD MMM',
      dateOne: '',
      dateTwo: ''
    }
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    },
    chooseDate() {
      //Fire when user hit "Submit"
    }
  }
}
</script>
<style lang="scss">
@import '../assets/global.scss';

.asd__mobile-only {
  display: none;
}

.asd__action-buttons {
  padding-top: 0;
}

.asd__action-buttons button {
  padding: 5px;
  border: 1px solid $black;
  color: $black !important;
}

.asd__action-buttons button:hover {
  text-decoration: none;
}

#datepicker-trigger {
  background: $blue;
  color: white;
  padding: 6px 10px;
  text-align: center;
  min-width: 100px;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  margin-top: 15px;
}

#datepicker-trigger i {
  margin-right: 5px;
  color: #fff;
}
</style>
