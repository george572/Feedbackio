<script setup lang="ts">
import { ref } from 'vue';
import AppBurgerIcon from './AppBurgerIcon.vue';
import MobileNavMenu from './MobileNavMenu.vue';

const openNavMenu = ref(false);
</script>

<template>
  <div class="h-[72px] header w-full flex justify-between items-center py-6 px-4 relative">
    <div>
      <h1 class="text-white font-[Jost-Bold] text-xl">
        Feedbackio.web.app
      </h1>
      <h2 class="text-white font-[Jost-Medium] text-[15px] opacity-80">
        Feedback Board
      </h2>
    </div>
    <AppBurgerIcon
      :is-nav-open="openNavMenu"
      @open-nav="openNavMenu = !openNavMenu"
    />
    <MobileNavMenu
      :is-nav-open="openNavMenu"
      @close-nav="openNavMenu = false"
    />
  </div>
</template>

<style scoped>
.header {
    background-image: url('../../assets/images/mobile-header.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translaxeX(100%);
}
</style>