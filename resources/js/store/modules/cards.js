const urlCards="/main-api/cards/"

export default{
    state:{
        cards:[],
        card: {
            id: 0,
            name: "",
            type: "",
        }
    },
    getters:{
        getCard: state => state.card,
        getCardId: state => state.card.id,
    },
    mutations:{
        setCard(state, data){
            state.card=data;
        },
        setCardId(state, data){
            state.card.id=data;
        }
    },
    actions:{
        async getCard(state){
            //var id = state.getters.getCardId;
            //await axios.get(urlCards + "get/" + '1')
            // await axios.get("main-api/cards/get/1")
            // .then(response => {
            //     console.log(response);
            //     state.commit("setCard", response.data.card);
            // })
            var id = state.getters.getCardId;
            console.log(urlCards + "get/" + id);
            await axios.get(urlCards + "get/" + id)
                .then(response => {
                    if(response.data)
                    {
                        state.commit("setCard", response.data);
                    }
                })
        }

    },

}
