<script setup lang="ts">
import SidebarFiltersCategory from './SidebarFiltersCategory.vue';
import { ref } from 'vue';
import { useSuggestionsStore } from '@/stores/suggestionsStore';

const store = useSuggestionsStore();

const categories = ref([
  { title: "All", value: 'all', isActive: true },
  { title: "UI", value: 'ui', isActive: false },
  { title: "UX", value: 'ux', isActive: false },
  { title: "Enhancement", value: 'enhancement', isActive: false },
  { title: "Bug", value: 'bug', isActive: false },
  { title: "Feature", value: 'feature', isActive: false },
]);

const filterByCategory = ( categoryName: string) => {
  const category = categories.value.find(el => el.value === categoryName)!;
  if (category.isActive) return;
  categories.value.forEach(el => el.isActive = false);
  category.isActive = true;
  store.setCurrentCategory(category.value);
};
</script>

<template>
  <div class="min-w-[223px] md:min-w-[initial] w-full bg-white rounded-xl h-[178px] lg:h-[166px] px-6 py-4 flex flex-wrap gap-2 items-start gap-y-3.5 overflow-hidden">
    <SidebarFiltersCategory
      v-for="category in categories"
      :key="category.value"
      :category-value="category.value"
      :is-active="category.isActive"
      @filter-by-category="(categoryName: string) => filterByCategory(categoryName)"
    >
      <span class="capitalize">{{ category.title }}</span>
    </SidebarFiltersCategory>
  </div>
</template>