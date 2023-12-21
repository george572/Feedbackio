<script setup lang="ts">
import SidebarAppInfo from './SidebarAppInfo.vue';
import SidebarFilters from './sidebar-filters/SidebarFilters.vue';
import SidebarRoadmap from './sidebar-roadmap/SidebarRoadmap.vue';
</script>

<template>
  <div class="w-full lg:max-w-[255px] flex flex-row lg:flex-col gap-2.5 lg:gap-6">
    <SidebarAppInfo />
    <SidebarFilters />
    <SidebarRoadmap />
  </div>
</template>