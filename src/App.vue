<template>
  <template v-if="store.loading">
    <div class="position-absolute align-items-center justify-content-center top-50 start-50 translate-middle"
      style="display: flex">
      <div class="loading-indicator"></div>
    </div>
  </template>
  <template v-if="!store.loading">
    <component :is="layout">
      <router-view />
    </component>
  </template>
</template>

<script setup>
import AOS from 'aos'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTextStore } from './store/text'

const store = useTextStore()

AOS.init({ mirror: false, once: true })

const route = useRoute();

const layout = computed(() => `${route?.meta?.layout}-layout` ?? 'div')

store.getContent()
</script>

<style>
@font-face {
  font-family: 'Ondo Medium';
  src: local('Ondo Medium'), url('./assets/fonts/OndoMedium.otf') format('truetype');
}

.rew-font {
  font-family: 'Ondo Medium', sans-serif !important;
  font-weight: 500 !important;
}
</style>
