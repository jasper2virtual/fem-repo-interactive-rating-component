<template>
    <single-card>
        <div class="flex flex-col gap-4">
            <div class="p-2 app-circle-bg w-[40px]"><img src="/src/assets/images/icon-star.svg" alt="star" /></div>
            <h1 class="app-text-heading-large text-white">How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve
                our offering!</p>

            <div class="flex gap-4">

                <label v-for="rate in 5" class="app-text-rating app-circle-bg w-[51px] feedback__rate-btn">
                    {{ rate }}
                    <input type="radio" :value="rate" v-model="rateSelected" class="feedback__rate-btn-input w-0 h-0" />
                </label>

            </div>
            <button class="feedback__submit  app-text-heading-medium" @click="onSubmit">SUBMIT</button>
        </div>

    </single-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SingleCard from '/src/templates/SingleCard.vue'
const router = useRouter()
const rateSelected = ref(0)

const onSubmit = () => {
    router.push({ name: 'thanks', params: { rate: rateSelected.value } })
}

</script>

<style lang="scss" scoped>
.feedback__rate-btn:hover {
    background: none;
    @apply bg-primary text-base-200;
}

.feedback__rate-btn:has(.feedback__rate-btn-input:checked) {
    background: none;
    @apply bg-white text-base-300;
}

.feedback__submit {
    @apply bg-primary text-base-300 rounded-full p-2 hover:bg-white;
}
</style>