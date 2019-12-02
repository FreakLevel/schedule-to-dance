<template>
    <div class="container">
        <h2>Select the date do you want</h2>
        <v-date-picker class="container--margin-center" mode='single' v-model="date" is-dark is-inline
            :min-date="today" :disabled-dates='{ weekdays: [1, 7] }' :dayclick='selectDate(date)'
        />
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DatePicker',
    props: [ 'dateChoosed' ],
    data: function () {
        return {
            date: this.dateChoosed,
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

<style>
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.container--margin-center {
    margin: 0 auto;
}
</style>