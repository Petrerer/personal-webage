<template>
    This is card component
    <v-text-field v-model="card.id" @change="getCard()"></v-text-field>

    {{card.name}}
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
    </v-btn>

</template>

<script>
export default {
    computed: {
        card(){
            return this.$store.getters.getCard;
        },
    },
    methods: {
        async getCard()
        {
            await this.$store.dispatch("getCard")
            .then(response=> {
                console.log(this.$store.getters.getCard);
            });
        },
        async setCardId(id)
        {
            this.$store.commit("setCardId", id);
        },
        async getCards()
        {
            this.$store.commit("setCards");

        },
        decrementQuantity(){
            if(this.card.quantity>0)
            {
            this.card.quantity--;
            }
        },
        incrementQuantity(){
            this.card.quantity++;
        },
        save(){

        }


    }
}
</script>
