<script setup lang="ts">
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';

const activeSortOption = computed(() => {
    const el = sortOptions.value.find(el => el.isActive)!;
    return el.title;
});

const dropdownEl = ref(null);
const openSortDropdown = ref(false);

const sortOptions = ref([
    { title: 'Most Upvotes', value: 'most-upvotes', isActive: true },
    { title: 'Least Upvotes', value: 'least-upvotes', isActive: false },
    { title: 'Most Comments', value: 'most-comments', isActive: false },
    { title: 'Least Comments', value: 'least-comments', isActive: false },   
]);

const sortByOption = (value: string) => {
  const option = sortOptions.value.find(el => el.value === value)!;
  if (option.isActive) return;
  sortOptions.value.forEach(el => el.isActive = false);
  option.isActive = true;
};

onClickOutside(dropdownEl, (event) => {
   if ((event.target as HTMLElement).className.includes('opener')) {
        return;
   } else {
        openSortDropdown.value = false;
   }
});
</script>

<template>
  <div class="relative">
    <div
      class="flex flex-col items-start text-white cursor-pointer xs:items-center xs:flex-row"
      @click="openSortDropdown = !openSortDropdown"
    >
      <span class="opener font-[Jost-Regular] text-sm pr-1">Sort By :</span>
      <div class="opener font-[Jost-Bold] flex gap-1 items-center">
        {{ activeSortOption }}
        <img
          src="../../assets/images/dropdownarrow.svg"
          class="transition-transform duration-200"
          :class="{ 'transform rotate-180': openSortDropdown }"
        >
      </div>
    </div>
    <Transition>
      <div
        v-if="openSortDropdown"
        class="absolute bottom-[-210px] drop-shadow-xl left-0 w-[255px] rounded-xl bg-white transition-all duration-500 h-[200px] text-darkBlue"
      > 
        <div
          v-for="(option, index) in sortOptions"
          :key="option.title"
          ref="dropdownEl"
          class="flex items-center justify-between px-6 py-3 transition-all duration-200 cursor-pointer hover:text-purple font-[Jost-Regular] text-base"
          :class="{'border-b border-[darkGray]': index < sortOptions.length - 1 }"
          @click="sortByOption(option.value)"
        >
          {{ option.title }}
          <img
            v-if="option.isActive"
            src="../../assets/images/selectedsortoption.png"
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>