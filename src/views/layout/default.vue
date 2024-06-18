<template>
    <HeaderSection />

    <div class="mt">
        <slot />
    </div>

    <FooterSection />

    <ContactModal />

    <MobileMenu />
</template>

<script setup>
import HeaderSection from '../../components/Header/HeaderSection.vue'
import FooterSection from '../../components/Footer/FooterSection.vue'
import ContactModal from '../../components/Inc/ContactModal.vue'
import MobileMenu from '../../components/Inc/MobileMenu.vue'

import { useBio } from '../../services/useBio'

const { getBio } = useBio()

getBio()
</script>

<style scoped>
.mt {
    margin-top: 109px
}

@media (max-width: 767px) {
    .mt {
        margin-top: 60px
    }
}
</style>
