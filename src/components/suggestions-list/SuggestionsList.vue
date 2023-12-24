<script setup lang="ts">
import SuggestionsHeader from './SuggestionsHeader.vue';
import SuggestionItem from './SuggestionItem.vue';
import { onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSuggestionsStore } from '../../stores/suggestionsStore';


const store = useSuggestionsStore();

const { suggestionsData, totalSuggestions, currentlySelectedCategory } = storeToRefs(store);

const filteredSuggestionsData = computed(() => {
  if (currentlySelectedCategory.value === 'all') return suggestionsData.value;
  return suggestionsData.value.filter((suggestion) => suggestion.category === currentlySelectedCategory.value);
});


onMounted(() => {
  store.getSuggestionsData();
  store.sortSuggestionsList('most-upvotes');
});

</script>

<template>
  <div class="w-full px-0 lg:px-0">
    <SuggestionsHeader :total-suggestions="totalSuggestions" />
    <div class="relative px-6 mt-6 overflow-hidden md:px-0">
      <transition-group
        name="list"
        tag="ul"
      >
        <SuggestionItem
          v-for="suggestion in filteredSuggestionsData"
          :key="suggestion.id"
          :upvotes-amount="suggestion.upvotes"
          :title="suggestion.title"
          :description="suggestion.description"
          :tag="suggestion.category"
          :comments-amount="suggestion.comments ? suggestion.comments.length : 0"
        />
      </transition-group>
    </div>
  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: opacity 0.3s ease;
}

.list-leave-active {
  position: absolute;
}
</style>../../stores/suggestionsStore