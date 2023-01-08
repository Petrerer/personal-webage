import axios from "axios";

const urlCards="/main-api/cards/"

export default{
    state:{
        cards:[],
        card: {
            name: "",
            type: "",
            quantity:0,
        }
    },
    getters:{
        getCard: state => state.card,
        getCardId: state => state.card.id,
        getCards: state =>state.cards,
    },
    mutations:{
        setCard(state, data){
            state.card=data;
        },
        setCardId(state, data){
            state.card.id=data;
        },
        setCards(state, data){
            state.cards=data;
        },
        resetCard(state)
        {
            state.card = {
                name: "",
                type: "",
                quantity:0,
            };
        }
    },
    actions:{
        async getCard(state){
            var id = state.getters.getCardId;
            console.log(urlCards + "get/" + id);
            await axios.get(urlCards + "get/" + id)
                .then(response => {
                    if(response.data)
                    {
                        state.commit("setCard", response.data);
                    }
                })
        },
        async listCards(state){
            await axios.get(urlCards + "list")
                .then(response => {
                    if(response.data)
                    {
                        console.log(response.data);
                        state.commit("setCards", response.data);
                    }
                })
        },
        async createCard(state){
            var card=state.getters.getCard;
            await axios.post(urlCards+"create",card)
            .then(response=>{
                console.log("added");
                state.dispatch("listCards");
                state.commit("resetCard");

            })
        },
        destroyCard(state, id){
            axios.delete(urlCards+"destroy/"+id)
            .then(response =>{
                console.log(response)
            })
            console.log("deleted");
            state.dispatch("listCards");
        }

    },

}
