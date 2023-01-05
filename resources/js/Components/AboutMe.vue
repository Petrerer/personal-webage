<template>
    <div class="aboutme">
        <div class="info">
            <div class="photobox">
                <img src="../../../public/images/ProfilePic.png" class="photo">
            </div>
            <p>Piotr Franc</p>
            <h6>Poznań</h6>
            <Socials/>
            <Card/>
        </div>
    </div>
</template>

<style>
@import '../../css/styles.css';
</style>



<script>
import Socials from "./Socials.vue"
import Card from "./Card.vue"
export default {
    components:{
        Socials,
        Card
    }

}
</script>
