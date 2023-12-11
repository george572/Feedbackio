<script setup lang="ts">
import SidebarFiltersTag from './SidebarFiltersTag.vue';
import { ref } from 'vue';

const tags = ref([
  { title: "All", value: 'all', isActive: false },
  { title: "UI", value: 'ui', isActive: false },
  { title: "UX", value: 'ux', isActive: true },
  { title: "Enhancement", value: 'enhancement', isActive: false },
  { title: "Bug", value: 'bug', isActive: false },
  { title: "Feature", value: 'feature', isActive: false },
]);

const filterByTag = ( tagName: string) => {
  console.log('Filter requested by tag: ', tagName);
};
</script>

<template>
  <div class="w-full bg-white rounded-xl h-[166px] px-6 py-4 flex flex-wrap gap-2 items-start gap-y-3.5">
    <SidebarFiltersTag
      v-for="tag in tags"
      :key="tag.value"
      :tag-name="tag.value"
      :is-active="tag.isActive"
      @filter-by-tag="(tagName: string) => filterByTag(tagName)"
    >
      <span class="capitalize">{{ tag.title }}</span>
    </SidebarFiltersTag>
  </div>
</template>