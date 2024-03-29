const {
    createApp
} = Vue
createApp({
    data() {
        return {
            cercaCont: "",
            user: {
                name: 'Nome Utente',
                avatar: '_io'
            },
            contacts: [{
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            activeChat: 0
        }

    },
    mounted() {
        
    },
    methods: {
        changeUser(index)
            {
         this.activeChat = index
        },

        newMessage(){
            if (this.newMessage.trim() !== ''){
                const oraAttuale = newDate()
                const newMessage = {
                    date:  `${oraCorrente.getHours()}:${oraCorrente.getMinutes()}`,
                    message: this.newMessage,
                    status: 'sent',
                }

                this.contacts[this.activeChat].messages.push(newMessage)
                setTimeout(() => {
                    this.rispMessage();
                }, 1000);
            }
            this.newMessage = ""
        },

        rispMessage(){
            if (this.newReply === "ciao"){
                const oraAttuale = newDate()
                const newMessageTwo = {
                    date: `${oraCorrente.getHours()}:${oraCorrente.getMinutes()}`,
                    message: this.newReply,
                    status: 'received'
                }
                 this.contacts[this.utente].messages.push(newMessageTwo)
            }
        },

        //funzione filtro contatti

         cercaNome(){
              if(this.cercaCont.trim() !== ''){
                  this.contacts.forEach(element => {
                      if (element.name.toLowerCase().includes(this.cercaCont.toLowerCase())){
                          element.visible = true;
                      } else {
                          element.visible = false;
                      }
                  });
              } 
                else { this.contacts.forEach(element => {
                  element.visible = true;
              });
         }

    }
}, ).mount('#app')