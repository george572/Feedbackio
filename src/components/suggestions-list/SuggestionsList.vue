<script setup lang="ts">
import SuggestionsHeader from './SuggestionsHeader.vue';
import SuggestionItem from './SuggestionItem.vue';
import SuggestionsListEmpty from './SuggestionsListEmpty.vue';
import { onMounted, computed, watch } from 'vue';
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
  store.setTotalSuggestions(filteredSuggestionsData.value.length);
});

watch(filteredSuggestionsData, () => {
  if (filteredSuggestionsData.value.length === 0) {
    store.setSuggestionsListEmpty(true);
  } else {
    store.setSuggestionsListEmpty(false);
  }
  store.setTotalSuggestions(filteredSuggestionsData.value.length);
});

</script>

<template>
  <div class="w-full px-0 lg:px-0">
    <SuggestionsHeader :total-suggestions="totalSuggestions" />
    <Transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="filteredSuggestionsData.length > 0"
        class="relative px-6 mt-6 overflow-hidden md:px-0"
      >
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
      <div
        v-else
        class="px-5 md:px-0"
      >
        <SuggestionsListEmpty />
      </div>
    </Transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>