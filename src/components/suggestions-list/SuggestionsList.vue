<script setup>
import SuggestionsHeader from './SuggestionsHeader.vue';
import SuggestionItem from './SuggestionItem.vue';
import suggestionsDataMock from '../../../data.json';
import { onMounted, ref } from 'vue';


onMounted(() => {
  parseSuggestionsData();
  console.log(suggestionsDataMock);
});

const suggesionsData = ref([]);

const parseSuggestionsData = () => {
  suggestionsDataMock.productRequests.forEach((suggestion) => {
    suggesionsData.value.push({
      id: suggestion.id,
      title: suggestion.title,
      description: suggestion.description,
      category: suggestion.category,
      upvotes: suggestion.upvotes,
      status: suggestion.status,
      comments: suggestion.comments,
    });
  });
};
</script>

<template>
  <div class="w-full px-0 lg:px-0">
    <SuggestionsHeader />
    <div class="mt-6">
      <SuggestionItem
        v-for="suggestion in suggesionsData"
        :key="suggestion.id"
        :upvotes-amount="suggestion.upvotes"
        :title="suggestion.title"
        :description="suggestion.description"
        :tag="suggestion.category"
        :comments-amount="suggestion.comments ? suggestion.comments.length : 0"
      />
    </div>
  </div>
</template>