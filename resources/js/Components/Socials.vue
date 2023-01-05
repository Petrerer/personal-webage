<template>
    <div class="socials">
        <v-btn @click="redirectToYoutube()" color="error">
                YouTube
        </v-btn>
        <v-btn @click="redirectToTwitch()" color="primary">
                Twitch
        </v-btn>
    </div>
</template>

<script>
export default {
    methods:{
        redirectToYoutube(){
            window.location.href = 'https://www.youtube.com/@MrBeast';
            return 0;
        },
        redirectToTwitch(){
            window.location.href = 'https://www.twitch.tv/mrbeast6000';
            return 0;
        },
    }
}
</script>
