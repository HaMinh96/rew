<template>
    <section class="pt-3" id="faq">
        <div class="container-fluid">
            <img src="/src/assets/img/logo-bg.svg" alt="rew" class="bg-logo">
            <h2 class="rew-text-brown section-title">
                <span class="rew-text-green">Frequently asked</span>
                questions
            </h2>
            <h4 class="text-center section-sub-title mb-3 mb-md-5">
                In a quandary of not knowing what you don’t know about Slate? You’re not alone! Here are some of the
                questions that we help Slate schools answer:
            </h4>
            <div class="faq-content mx-auto">
                <div data-aos="fade-down" class="accordion accordion-flush" id="rew-faq">
                    <div v-for="item in faqs" class="accordion-item">
                        <h2 class="accordion-header" :id="item.btnid">
                            <div class="accordion-button collapsed d-block" v-html="item.title">
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useTextStore } from '../../store/text'

const store = useTextStore()
const content = computed(() => store.content?.faq)

const faqs = ref([
    {
        id: 'faq1',
        btnid: 'faqbtn1',
        title: content.value?.faq1,
    },
    {
        id: 'faq2',
        btnid: 'faqbtn2',
        title: content.value?.faq2,
    },
    {
        id: 'faq3',
        btnid: 'faqbtn3',
        title: content.value?.faq3,
    },
    {
        id: 'faq4',
        btnid: 'faqbtn4',
        title: content.value?.faq4,
    },
    {
        id: 'faq5',
        btnid: 'faqbtn5',
        title: content.value?.faq5,
    }
]) 
</script>

<style>
.accordion-button {
    font-weight: 400;
}

.accordion-button::after {
    display: none;
}
</style>