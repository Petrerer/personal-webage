<template>
    Create Card
    <v-text-field v-model="card.name"></v-text-field>
    <v-text-field v-model="card.type"></v-text-field>
    <v-text-field v-model="card.quantity"></v-text-field>
    <br>
    <v-btn @click="createCard">Add Card</v-btn>
    <br><br><br><br>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Actions</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="card in cards">
                <td>{{ card.id }}</td>
                <td>{{ card.name }}</td>
                <td>{{ card.type }}</td>
                <td>{{ card.quantity }}</td>
                <td>
                    <v-btn @click="decrementQuantity(card.id)" color="red">
                        -
                    </v-btn>
                    <v-btn @click="incrementQuantity(card.id)" color="blue">
                        +
                    </v-btn>
                        
                </td>
                <td>
                    <v-btn @click="destroyCard(card.id)" color="black">
                        X
                    </v-btn>
                </td>
            </tr>
        </tbody>
    </table>



    <!-- {{card.name}}
    <br>
    {{card.type}}
    <br>
    {{card.quantity}}

    <br><br>

    <v-btn v-model="card.quantity" @click="decrementQuantity" color="red">
        -
    </v-btn>
    <v-btn v-model="card.quantity" @click="incrementQuantity" color="blue">
        +
    </v-btn> -->

</template>



<script>
export default {
    computed: {
        card(){
            return this.$store.getters.getCard;
        },
        cards(){
            return this.$store.getters.getCards;
        },
    },
    methods: {
        async getCard()
        {
            await this.$store.dispatch("getCard");
            // .then(response=> {
            //     console.log(this.$store.getters.getCard);
            // });
        },
        async setCardId(id)
        {
            this.$store.commit("setCardId", id);
        },
        async listCards()
        {
            await this.$store.dispatch("listCards");
            // .then(response=> {
            //     console.log(this.$store.getters.listCards);
            // })

        },
        decrementQuantity(id){
            if(this.cards.find(card => card.id == id).quantity>0)
            {
                this.cards.find(card => card.id == id).quantity--;
            }
        },
        incrementQuantity(id){
            this.cards.find(card => card.id == id).quantity++;
        },
        createCard(){
            this.$store.dispatch("createCard");
        },
        destroyCard(id){
            this.$store.dispatch("destroyCard", id);
        }


    },
    beforeMount(){
        this.listCards();
    }
}
</script>
