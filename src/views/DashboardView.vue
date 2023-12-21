<script setup lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue';
import SuggestionsList from '@/components/suggestions-list/SuggestionsList.vue';
</script>

<template>
  <main class="max-w-[1110px] mx-auto flex items-start gap-10 lg:gap-8 my-14 lg:my-24 px-10 flex-col lg:flex-row">
    <Sidebar />
    <SuggestionsList />
  </main>
</template>
