var app = new Vue({
    el: '#app',
    data:{
        // selectedMessage: 0,
        // searchName:'',
        visible: true,
        newMessage:{
            message: '',
            sent: true,
        },

        activeChat: 0,

        mainUser:{
            name: 'Michela',
            contactImg: '_io',
        },

        conversations:[
            {
                name: 'Michele',
                contactImg: '_1',
                time: '12:00',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: 'si si',
                    sent: true, //io
                    // menuDropDown: false,
                },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'no no',
                    sent: true, //io
                    // menuDropDown: false,
                },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'Certo, come no!',
                    sent: false, //contatto
                    // menuDropDown: false,
                }
                ]
            },

            {
                name: 'Francesco',
                contactImg: '_2',
                time: '12:57',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: "Hai portato a spasso l'orso?",
                    sent: true,
                    },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'Ricordati lavare la lavastoviglie',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'Tutto fatto!',
                    sent: false,
                    }
                ]
            },

            {
                name: 'Gianni',
                contactImg: '_3',
                time: '17:00',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'non mi va',
                    sent: false,
                    }
                ]
            },

            {
                name: 'Melissona',
                contactImg: '_4',
                time: '02:00',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'Tutto fatto!',
                    sent: false,
                    }
                ]
            },

            {
                name: 'Berlusconi',
                contactImg: '_5',
                time: '07:00',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'Tutto fatto!',
                    sent: false,
                    }
                ]
            },

            {
                name: 'Silvia',
                contactImg: '_6',
                time: '01:00',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'Tutto fatto!',
                    sent: false,
                    }
                ]
            },

            {
                name: 'Prugna',
                contactImg: '_7',
                time: '12:00',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'Tutto fatto!',
                    sent: false,
                    }
                ]
            },

            {
                name: 'Fragola',
                contactImg: '_8',
                time: '14:00',
                visible: true,
                messages: [
                    {
                    date: '2020/10/01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020/10/01 16:15:22',
                    message: 'Tutto fatto!',
                    sent: false,
                    }
                ]
            },
        ]
    } ,
    methods:{
        functionActiveChat(i) {
            this.activeChat = i;
        },


        postSentMessage(){
            const newMessage = {...this.newMessage};
            this.postPushMessage(newMessage);
            this.newMessage.message = '';
            setTimeout(this.postReply, 1000);
        },
        postPushMessage(message){
            this.conversations[this.activeChat].messages.push(message); 
        },
        postReply(){
            this.postPushMessage({
                message: 'ok',
                sent: false,
            })
        },


        functionSearchName(){
            this.conversations.forEach((item) =>{
                if (item.name.toLowerCase().includes(this.searchName.toLowerCase())){
                    item.visible = true;
                } else{
                    item.visible = false;
                }
            })
        },

        //non funziona bene TOFIX
        deleteMessage(index) {
            this.conversations[this.activeChat].messages.splice(index, 1)
        },
        menuDeleteVisible(index) {
            if (this.visible == true) {
                this.visible = this.conversations[this.activeChat].messages[index]
            }
            else {
                this.visible = true
            }
        }, 
        

/*
        deleteMessage(i) {
            this.conversations[this.activeChat].messages.splice(i, 1);
        },
        */
    }
})

/*
Milestone 5
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
*/