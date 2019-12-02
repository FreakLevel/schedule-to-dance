<template>
    <div>
        <vue-timepicker v-model="time" close-on-complete @input="handleTimePicker"></vue-timepicker>
    </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import moment from 'moment'

export default {
    name: 'TimePicker',
    props: {
        appointments: {
            type: Array,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        timeChoosed: { required: true }
    },
    components: { VueTimepicker },
    data: function() {
        return {
            time: this.timeChoosed
        }
    },
    methods: {
        handleTimePicker: function(event) {
            if(event.HH !== '' && event.mm !== '') {
                if(parseInt(event.HH) < 9) {
                    this.time = { HH: '', mm: ''}
                    alert('The first dance is at 09:00 AM')
                } else if(parseInt(event.HH) > 17 && parseInt(event.mm) > 0) {
                    this.time = { HH: '', mm: ''}
                    alert('The last dance is at 17:00 PM')
                } else if(this.checkTime(event)){
                    this.time = { HH: '', mm: ''}
                    alert('Time collides with another dance')
                } else {
                    this.$emit('choose-time', event)
                }
            }
        },
        checkTime(event) {
            let selectedDate = moment(`${this.date} ${event.HH}:${event.mm}:00`, 'YYYY-MM-DD HH:mm:ss')
            return this.appointments.reduce((busy, appointment) =>{
                if(busy) return true

                let appointmentMoment = moment(appointment.schedule, 'YYYY-MM-DD HH:mm:ss')
                return Math.abs(selectedDate.diff(appointmentMoment, 'hours')) < 1
            }, false)
        }
    }
}
</script>