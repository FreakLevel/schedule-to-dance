<template>
  <div id="app">
    <keep-alive>
      <div v-if="step === 0" >
        <DatePicker :dateChoosed='date' @choose-day="selectDate" />
      </div>
      <div v-else-if="step === 1" >
        <TimePicker :timeChoosed='time' @choose-time="selectTime" :appointments='dateAppointments' :date='date' />
      </div>
      <div v-else >
        <Form :date='date' :time='time' />
      </div>
    </keep-alive>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import DatePicker from './components/DatePicker'
import TimePicker from './components/TimePicker'
import Form from './components/Form'

export default {
  name: 'app',
  components: {
    DatePicker,
    TimePicker,
    Form
  },
  data: function () {
    return {
      step: 0,
      appointments: null,
      date: null,
      dateAppointments: [],
      example: null,
      time: {}
    }
  },
  mounted() {
    axios.get('api/appointments').then(response => this.appointments = response.data)
  },
  methods: {
    selectDate: function (date) {
      this.date = date
      this.step += 1
      this.filterDateAppointment()
    },
    filterDateAppointment() {
      this.example = this.appointments
      this.dateAppointments = this.appointments.filter(appointment => {
        if(moment(appointment.schedule.split(' ')[0]).isSame(this.date)) {
          return appointment
        }
      })
    },
    selectTime(time) {
      this.time = time
      this.step += 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
