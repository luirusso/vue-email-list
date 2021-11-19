/**
 * Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Link doc Axios: https://github.com/axios/axios;
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

const app = new Vue({
    el: '#app',
    data: {
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emails: [],
    },
    created() {
        this.getEmail();
    },
    methods: {
        getEmail() {
            for(i = 0; i < 10; i++) {
                axios.get(this.apiURL).then( response => {
                    console.log(response);
                    this.emails.push(response.data.response);
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    },
}); 