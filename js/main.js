const app = new Vue({
    el: '#root',
    data: {
        emailsFinal: [],
        numEmails: 10,
    },
    methods: {
        
    },
    created() {
        let emails = [];
        for (let i = 0; i < this.numEmails; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // handle success
                emails.push(response.data.response);
                if (emails.length == this.numEmails) {
                    this.emailsFinal = [...emails]
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        };
    }
});