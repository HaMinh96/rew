<template>
  <section class="pt-3" id="service">
    <img src="/src/assets/img/logo-bg.svg" alt="rew" class="bg-logo d-block d-md-none">
    <h2 class="rew-text-brown section-title">
      <span class="rew-text-green">Slaters</span>
      at your Service
    </h2>
    <div class="container d-md-block d-none">
      <div class="row justify-content-around">
        <div v-for="item, index in slaterRoles" class="col-6 col-lg-5 my-n3">
          <div data-aos="zoom-out" :data-aos-delay="index * 100" class="card">
            <div class="card-img">
              <img :src="item.imgSrc" :alt="item.title">
            </div>
            <div class="card-title nowrap" v-html="item.title"></div>
            <div class="card-content" v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-left" class="d-block d-md-none">
      <swiper-container slides-per-view="1.4" centered-slides="true" space-between="7">
          <swiper-slide v-for="item in slaterRoles">
            <div class="card">
              <div class="card-img">
                <img :src="item.imgSrcMobile" :alt="item.title">
              </div>
              <div class="card-title" v-html="item.title">
              </div>
              <div class="card-content" v-html="item.content"></div>
            </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { register } from 'swiper/element/bundle'
register()

import role01Url from '@/assets/img/role01.svg'
import role01MobileUrl from '@/assets/img/role01.webp'
import role02Url from '@/assets/img/role02.svg'
import role02MobileUrl from '@/assets/img/role02.webp'
import role03Url from '@/assets/img/role03.svg'
import role03MobileUrl from '@/assets/img/role03.webp'
import role04Url from '@/assets/img/role04.svg'
import role04MobileUrl from '@/assets/img/role04.webp'

const slaterRoles = ref([
  {
    imgSrc: role01Url,
    imgSrcMobile: role01MobileUrl,
    subTitle: 'Roles #1',
    title: 'Captaining',
    content: 'Team up with our Slate subject matter experts to have embedded project management, cycle prep, and strategic advisement at the ready.'
  },
  {
    imgSrc: role02Url,
    imgSrcMobile: role02MobileUrl,
    subTitle: 'Roles #2',
    title: 'Engineering',
    content: 'Let’s dream big together for implementing next-level Slate enhancements from portals and dashboards to workflow automations and system integrations.'
  },
  {
    imgSrc: role03Url,
    imgSrcMobile: role03MobileUrl,
    subTitle: 'Roles #3',
    title: 'Operationalizing',
    content: 'Troubleshooting, routine maintenance, querying, data integrity, you name it! <span class="rew-font"><span class="rew-text-green">Re</span>W</span>’s operations specialists take on daily tasks so that your team is free to focus on student-facing priorities.'
  },
  {
    imgSrc: role04Url,
    imgSrcMobile: role04MobileUrl,
    subTitle: 'Roles #4',
    title: '<span class="rew-font">Re</span><span class="rew-text-brown">Inforcing</span>',
    content: 'Looking for Slate-skilled seasonal readers and/or application processors? In need of temporary coverage for a key Slater going on leave? Unexpected turnover putting you in a bind? Call on <span class="rew-font"><span class="rew-text-green">Re</span>W</span> to bridge the gap.'
  },
])
</script>

<style scoped>
.section-title {
  text-transform: unset;
}

.my-n3 {
  margin-top: -30px;
  margin-bottom: -30px;
}
</style>