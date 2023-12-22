import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import suggestionsDataMock from '../../data.json';

export const useSuggestionsStore = defineStore('Suggestions Store', () => {
  const totalSuggestions = computed(() => suggestionsData.value.length);
  const suggestionsData = ref([]);

  const getSuggestionsData = () => {
    console.log(suggestionsDataMock);
    suggestionsDataMock.productRequests.forEach((suggestion) => {
      suggestionsData.value.push({
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

  const sortSuggestions = (sortBy) => {
    if ( sortBy === 'most-comments' || sortBy === 'least-comments' ) {
      //   ne rabotaet
      suggestionsData.value.comments.sort((a, b) => {
        if (sortBy === 'most-comments') {
          return a.comments.length - b.comments.length;
        }
        if (sortBy === 'least-comments') {
          return b.comments.length - a.comments.length;
        }
      });
    } else {
      suggestionsData.value.sort((a, b) => {
        if (sortBy === 'most-upvotes') {
          return b.upvotes - a.upvotes;
        }
        if (sortBy === 'least-upvotes') {
          return a.upvotes - b.upvotes;
        }
      });
    }
    return 0;
  };
  return { totalSuggestions, getSuggestionsData, suggestionsData, sortSuggestions };
});