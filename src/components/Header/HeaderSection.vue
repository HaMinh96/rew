<template>
    <header class="fixed-top">
        <nav class="navbar navbar-expand-md bg-transparent">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{ name: 'Home' }">
                    <img src="/src/assets/img/main-logo.svg" alt="ReWorkflow" width="231" height="30">
                </router-link>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-label="menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="justify-content-end d-md-block d-none" id="rewHeader">
                    <div class="navbar-nav">
                        <a v-for="link in links" @click.prevent="goToHomeLink(link.href, route, router, setActive)"
                            :key="link.href" :href="`#${link.href}`" class="nav-link ms-sm-0 ms-md-5"
                            :class="{ active: isActive(link.href) }">
                            {{ link.label }}
                        </a>
                        <a class="nav-link ms-sm-0 ms-md-5" :href="PODCAST_LINK" target="_blank">
                            Podcast
                        </a>
                        <router-link class="nav-link ms-sm-0 ms-md-5 nowrap" :to="{ name: 'OurTeam' }">
                            Our Team
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { _ROUTES } from '../../router/routes'
import { PODCAST_LINK } from '../../constants'
import { ref, computed } from 'vue'
import { useActive } from 'vue-use-active-scroll'
import { goToHomeLink } from '../../utils'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const links = ref([
    {
        label: 'home',
        href: 'home',
    },
    {
        label: 'about',
        href: 'about',
    },
    {
        label: 'services',
        href: 'service',
    },
    {
        label: 'FAQs',
        href: 'faq'
    }
])
const targets = computed(() => links.value.map(({ href }) => href))
const { isActive, setActive } = useActive(targets, {
    boundaryOffset: { toTop: 200, toBottom: 300 }
})

const routerLinks = computed(() => _ROUTES.filter(x => x.name !== 'Home'))

</script>

<style lang="scss" scoped>
header {
    background: rgba(240, 243, 239, 0.6);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}

.dropdown-menu {
    background: var(--rew-baby-grey);
    text-align: right;
    border: none;
    min-width: 208px;
    transform: scale(.8);
    transform-origin: top right;
    margin-top: 6px;

    .nav-link {
        transform-origin: right;
    }
}

.show-more:hover {
    & .dropdown-menu {
        display: block !important;
    }
}

.nav-link:has(.router-link-active) {
    color: var(--rew-active-brown)
}
</style>