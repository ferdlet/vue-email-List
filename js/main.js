const app = new Vue({
    el: '#root',
    data: {
        emails: [],
        emailsFinal: [],
        numEmails: 10,
    },
    methods: {
        
    },
    created() {
        for (let i = 0; i < this.numEmails; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // handle success
                this.emails.push(response.data.response);
                if (this.emails.length == this.numEmails) {
                    this.emailsFinal = [...this.emails]
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    }
});