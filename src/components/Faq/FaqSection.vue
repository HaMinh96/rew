<template>
    <section class="pt-3" id="faq">
        <div class="container-fluid">
            <img src="/src/assets/img/logo-bg.svg" alt="rew" class="bg-logo">
            <h2 class="rew-text-brown section-title">
                <span class="rew-text-green">Frequently asked</span>
                questions
            </h2>
            <h4 class="text-center section-sub-title mb-3 mb-md-5">
                In a quandary of not knowing what you don’t know about Slate? You’re not alone! Here are some of the questions that we help Slate schools answer:
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
import { ref } from 'vue'

const faqs = ref([
    {
        id: 'faq1',
        btnid: 'faqbtn1',
        title: 'My staff spends a significant amount of time/effort on completing manual operations processes and serving as human bridges for data integrations. How can we automate?',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item'
    },
    {
        id: 'faq2',
        btnid: 'faqbtn2',
        title: 'Our Admission Office is overwhelmed by a Neve<span class="rew-text-green">rE</span>nding Story of internal Slate requests from campus stakeholders. How can we optimize our in-house Slate Support and get ahead?',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item'
    },
    {
        id: 'faq3',
        btnid: 'faqbtn3',
        title: 'We are ready to take our Slate systems and operations documentation to the next level. Where do we start?',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item'
    },
    {
        id: 'faq4',
        btnid: 'faqbtn4',
        title: 'I watched a webinar where a Slater showcased an awesome portal their school has. How can we build something similar?',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item'
    },
    {
        id: 'faq5',
        btnid: 'faqbtn5',
        title: 'We are hiring for a Slate position, but we continue to have failed searches. What more can we do?',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item'
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