<script setup lang="ts">
import SidebarFiltersTag from './SidebarFiltersTag.vue';
import { ref } from 'vue';

const tags = ref([
  { title: "All", value: 'all', isActive: false },
  { title: "UI", value: 'ui', isActive: false },
  { title: "UX", value: 'ux', isActive: false },
  { title: "Enhancement", value: 'enhancement', isActive: false },
  { title: "Bug", value: 'bug', isActive: false },
  { title: "Feature", value: 'feature', isActive: false },
]);

const filterByTag = ( tagName: string) => {
  const tag = tags.value.find(el => el.value === tagName)!;
  if (tag.isActive) return;
  tags.value.forEach(el => el.isActive = false);
  tag.isActive = true;
};
</script>

<template>
  <div class="w-full bg-white rounded-xl h-[166px] px-6 py-4 flex flex-wrap gap-2 items-start gap-y-3.5">
    <SidebarFiltersTag
      v-for="tag in tags"
      :key="tag.value"
      :tag-value="tag.value"
      :is-active="tag.isActive"
      @filter-by-tag="(tagName: string) => filterByTag(tagName)"
    >
      <span class="capitalize">{{ tag.title }}</span>
    </SidebarFiltersTag>
  </div>
</template>