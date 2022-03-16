var app = new Vue({
    el: '#app',
    data:{
        newMessage:{
            message: '', //per messaggi ANCORA DA FARE
            sent: 'true',
        },

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
                    sent: 'true', //io
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'no no',
                    sent: 'true', //io
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Certo, come no!',
                    sent: 'false', //contatto
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
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati lavare la lavastoviglie',
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    sent: 'false',
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
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'non mi va',
                    sent: 'false',
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
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    sent: 'false',
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
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    sent: 'false',
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
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    sent: 'false',
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
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    sent: 'false',
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
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: 'true',
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    sent: 'false',
                    }
                ]
            },
        ]
    } ,
    methods:{
        functionActiveChat(i) {
            this.activeChat = i;
        },
        postMessage(){
            const newMessage = {...this.newMessage};
            this.conversations[this.activeChat].messages.push(newMessage);
        },
    }
})

/*
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/