<template>
<div>
    <h1>{{today}}</h1>
    <v-date-picker mode='single' v-model="date" is-dark is-inline
        :min-date="today" :disabled-dates='{ weekdays: [1, 7] }' :dayclick='selectDate(date)'
    />
</div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DatePicker',
    data: function () {
        return {
            date: null,
            today: null
        }
    },
    mounted() {
        this.today = moment().add(1, 'day').format('YYYY-MM-DD')
    },
    methods: {
        selectDate(date) {
            if(date !== null) {
                this.$emit('choose-day', moment(date).format('YYYY-MM-DD'))
            }
        },
    }
}
</script>
