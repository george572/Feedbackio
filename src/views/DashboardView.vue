<script setup lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue';
import SuggestionsList from '@/components/suggestions-list/SuggestionsList.vue';
import MobileHeader from '@/components/base/MobileHeader.vue';
</script>

<template>
  <main class="max-w-[1110px] mx-auto flex items-start gap-0 md:gap-8 lg:gap-8 my-0 md:my-14 lg:my-24 px-0 md:px-10 flex-col lg:flex-row">
    <Sidebar class="hidden md:flex" />
    <MobileHeader class="md:hidden" />
    <SuggestionsList />
  </main>
</template>
