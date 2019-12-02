<template>
    <div>
        <section>
            <h2>
                This is the datetime for you appointment
            </h2>
            <h3>{{schedule}}</h3>
        </section>
        <section>
            <div>
                <div class="div__form div--inline">
                    <span>Name: </span>
                </div>
                <input type="text" v-model="name" />
            </div>
            <div>
                <div class="div__form div--inline">
                    <span>Email: </span>
                </div>
                <input type="email" v-model="email" />
            </div>
            <button class="button" v-on:click='createAppointment'>Create Appointment</button>
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

<style scoped>
.div__form {
    width: 75px;
}

.div--inline {
    display: inline-block;
}

h3 {
    text-decoration: underline;
}

span {
    font-weight: bold
}

.button {
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    background-color: aliceblue;
    color: black;
}
</style>