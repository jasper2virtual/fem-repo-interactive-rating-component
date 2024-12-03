<template>
    <single-card>
        <div class="flex flex-col gap-4 items-center">
            <img src="/src/assets/images/illustration-thank-you.svg" alt="thank you" />
            <p class="text-primary">You selected {{rate}} out of 5</p>
            <h1 class=" text-white app-text-heading-large ">Thank you!</h1>
            <p class="text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    </single-card>
</template>

<script lang="ts" setup>
import SingleCard from '../templates/SingleCard.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const rate = route.params.rate;


</script>