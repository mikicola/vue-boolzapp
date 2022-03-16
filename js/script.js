/*
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/

var app = new Vue({
    el: '#app',
    data:{
        text: '', //per messaggi ANCORA DA FARE

        activeChat: 0,

        conversations:[
            {
                name: 'Michele',
                contactImg: '_1',
                time: '12:00',
                messages: [
                    {
                    date: '10/01/2020 15:30:55', //da mettere sul messaggio
                    message: 'si si',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'no no',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Certo!',
                    status: 'received',
                    }
                ]
            },

            {
                name: 'Francesco',
                contactImg: '_2',
                time: '12:57',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: "Hai portato a spasso l'orso?",
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati lavare la lavastoviglie',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    }
                ]
            },

            {
                name: 'Gianni',
                contactImg: '_3',
                time: '17:00',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'non mi va',
                    status: 'received',
                    }
                ]
            },

            {
                name: 'Melissona',
                contactImg: '_4',
                time: '02:00',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    }
                ]
            },

            {
                name: 'Berlusconi',
                contactImg: '_5',
                time: '07:00',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    }
                ]
            },

            {
                name: 'Silvia',
                contactImg: '_6',
                time: '01:00',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    }
                ]
            },

            {
                name: 'Prugna',
                contactImg: '_7',
                time: '12:00',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    }
                ]
            },

            {
                name: 'Fragola',
                contactImg: '_8',
                time: '14:00',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    }
                ]
            },
        ]
    } ,
    methods:{
        functionActiveChat(i) {
            this.activeChat = i;
        }

    }
})