var app = new Vue({
    el: '#app',
    data:{
        // selectedMessage: 0,
        // searchName:'',
        visibleDeleteMenu: true,
        newMessage:{
            message: '',
            sent: true,
        },

        activeChat: 0,
        activeMenuIndex: null,

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
                // visibleMenu: true,
                messages: [
                    {
                    date: '2020-10-01 15:30:55',
                    message: 'si si',
                    sent: true, //io
                    // visibleMenu: true,
                },
                    {
                    date: '2020-10-01 15:50:00',
                    message: 'no no',
                    sent: true, //io
                    // visibleMenu: true,
                },
                    {
                    date: '2020-10-01 16:15:22',
                    message: 'Certo, come no!',
                    sent: false, //contatto
                    // visibleMenu: true,
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
                    date: '2020-10-01 15:30:55',
                    message: "Hai portato a spasso l'orso?",
                    sent: true,
                    },
                    {
                    date: '2020-10-01 15:50:00',
                    message: 'Ricordati lavare la lavastoviglie',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 16:15:22',
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
                    date: '2020-10-01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 16:15:22',
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
                    date: '2020-10-01 15:30:55',
                    message: 'Hai portato a spasso il topo?',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 15:50:00',
                    message: 'Certo, come tutti i giorni...',
                    sent: false,
                    },
                    {
                    date: '2020-10-01 16:15:22',
                    message: 'interessante!',
                    sent: true,
                    }
                ]
            },

            {
                name: 'Berlusconi',
                contactImg: '_5',
                time: '07:00',
                visibleMenu: true,
                messages: [
                    {
                    date: '2020-10-01 15:30:55',
                    message: 'Mi consenta!',
                    sent: false,
                    },
                    {
                    date: '2020-10-01 15:50:00',
                    message: 'Sei sempre sul pezzo',
                    sent: true,
                    },
                    // {
                    // date: '2020-10-01 16:15:22',
                    // message: 'Tutto fatto!',
                    // sent: false,
                    // }
                ]
            },

            {
                name: 'Silvia',
                contactImg: '_6',
                time: '01:00',
                visible: true,
                messages: [
                    {
                    date: '2020-10-01 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 16:15:22',
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
                    date: '2020-10-01 15:30:55',
                    message: 'Hai comprato le prugne?',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 15:50:00',
                    message: 'Ricordati di chiamare Fragola!',
                    sent: true,
                    },
                    {
                    date: '2020-10-01 16:15:22',
                    message: 'Ho comprato solo i lamponi!',
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
                    date: '2020-10-01 15:30:55',
                    message: 'Prugna ancora non mi ha chiamato...',
                    sent: false,
                    },
                    // {
                    // date: '2020-10-01 15:50:00',
                    // message: 'Ricordati di stendere i panni',
                    // sent: true,
                    // },
                    // {
                    // date: '2020-10-01 16:15:22',
                    // message: 'Tutto fatto!',
                    // sent: false,
                    // }
                ]
            },
        ]
    } ,
    methods:{
        functionActiveChat(i) {
            this.activeChat = i;
            this.activeMenuIndex = null //resetta il menu attivo al cambio della chat
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

        // TOFIX 
        getFormattedDate(date, format){
            let formatStr = 'dd/MM/yyyy HH:mm:ss';
            switch(format){
                case 'italian':
                    formatStr = 'dd/MM/yyyy HH:mm:ss';
                    break;
                case 'american':
                    formatStr = '/MM/dd/yyyy HH:mm:ss';
            }
            return luxon.DateTime.fromISO(date).toFormat(formatStr);
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

        
        deleteMessage(messageIndex) {
            this.activeMenuIndex = null //resetta il menu attivo al click del cancella
            this.conversations[this.activeChat].messages.splice(messageIndex, 1)
        },
        
        activateMenu(messageIndex){
            if(this.activeMenuIndex == messageIndex){
                this.activeMenuIndex = null
                // confronto (==) e se la variabile è null => nessun menu aperto, else => attiva menu
            }else{
                this.activeMenuIndex = messageIndex;
            }
        },
        
        
        /*
        menuDeleteVisible(index) {
            if (this.visibleDeleteMenu == true) {
                this.visibleDeleteMenu = this.conversations[this.activeChat].messages[index]
            }
            else {
                this.visibleDeleteMenu = true
            }
        }, */ 
/*
        deleteMessage(i) {
            this.conversations[this.activeChat].messages.splice(i, 1);
        },
        */
    }
})
