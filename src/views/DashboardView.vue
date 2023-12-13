<script setup lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue';
import SuggestionsList from '@/components/suggestions-list/SuggestionsList.vue';
</script>

<template>
  <main class="max-w-[1110px] mx-auto flex items-start gap-8 my-24">
    <Sidebar />
    <SuggestionsList />
  </main>
</template>
