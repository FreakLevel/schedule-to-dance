<template>
    <div>
        <section>
            <h2>{{schedule}}</h2>
        </section>
        <section>
            <div>
                <span>Name: </span>
                <input type="text" v-model="name" />
            </div>
            <div>
                <span>Email: </span>
                <input type="email" v-model="email" />
            </div>
            <button v-on:click='createAppointment'>Create Appointment</button>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Form',
    props: ['date', 'time'],
    data: function() {
        return {
            name: '',
            email: '',
            schedule: `${this.date} ${this.time.HH}:${this.time.mm}`
        }
    },
    methods: {
        createAppointment: function() {
            if(this.name === '') {
                alert('Require name')
            } else if (this.email === '') {
                alert('Require email')
            } else {
                axios.post('api/appointments', {
                    email: this.email,
                    name: this.name,
                    schedule: this.schedule
                }).then(() => {
                    alert('Your appointment has been created successfully.')
                    location.reload()
                }).catch(error => {
                    alert(JSON.stringify(error))
                })
            }
        }
    }
}
</script>