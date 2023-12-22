<script setup lang="ts">
import { watch } from 'vue';
import SidebarRoadmap from '../sidebar/sidebar-roadmap/SidebarRoadmap.vue';
import SidebarFilters from '../sidebar/sidebar-filters/SidebarFilters.vue';
const props = defineProps({
    isNavOpen: {
        type: Boolean,
        required: false,
        default: false,
    },
});

defineEmits(['closeNav']);

const scrollHandler = () => {
    window.scrollTo(0, 0);
};

watch(() => props.isNavOpen, (value) => {
    if (value) {
        window.addEventListener('scroll', scrollHandler);
    } else {
        window.removeEventListener('scroll', scrollHandler);
    }
});
</script>

<template>
  <div
    class="absolute left-0 top-[72px] w-full z-50"
    :class="{'invisible' : !isNavOpen}"
  >
    <div
      class="absolute left-0 w-full h-screen bg-black bg-opacity-20"
      :class="{'flex' : isNavOpen, 'hidden' : !isNavOpen}"
      @click="$emit('closeNav')"
    />
    <div
      class="box-border absolute right-0 z-50 flex flex-col items-center justify-start h-screen gap-6 pt-6 overflow-hidden text-white transition-all duration-300 bg-lightGray"
      :class="{'w-[271px] px-6': isNavOpen, 'w-0': !isNavOpen}"
    >
      <SidebarRoadmap v-if="isNavOpen" />
      <SidebarFilters v-if="isNavOpen" />
    </div>
  </div>
</template>