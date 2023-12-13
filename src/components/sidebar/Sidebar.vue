<script setup lang="ts">
import SidebarAppInfo from './SidebarAppInfo.vue';
import SidebarFilters from './sidebar-filters/SidebarFilters.vue';
import SidebarRoadmap from './sidebar-roadmap/SidebarRoadmap.vue';
</script>

<template>
  <div class="max-w-[255px] w-full flex flex-col gap-6">
    <SidebarAppInfo />
    <SidebarFilters />
    <SidebarRoadmap />
  </div>
</template>