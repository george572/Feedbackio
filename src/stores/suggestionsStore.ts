import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import suggestionsDataMock from '../../data.json';

export const useSuggestionsStore = defineStore('Suggestions Store', () => {
  const totalSuggestions = computed(() => suggestionsData.value.length);
  const suggestionsData = ref<any[]>([]);

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

  const sortFunctions: { [key: string]: (a: SuggestionDataObject, b: SuggestionDataObject) => number } = {
    'most-comments': (a: SuggestionDataObject, b: SuggestionDataObject) => (b.comments?.length ?? 0) - (a.comments?.length ?? 0),
    'least-comments': (a: SuggestionDataObject, b: SuggestionDataObject) => (a.comments?.length ?? 0) - (b.comments?.length ?? 0),
    'most-upvotes': (a: SuggestionDataObject, b: SuggestionDataObject) => b.upvotes - a.upvotes,
    'least-upvotes': (a: SuggestionDataObject, b: SuggestionDataObject) => a.upvotes - b.upvotes,
  };

  const sortSuggestionsList = (sortBy: string) => {
    const sortFunction = sortFunctions[sortBy];
    if (sortFunction) {
      suggestionsData.value.sort(sortFunction);
    }
  };
  return { totalSuggestions, getSuggestionsData, suggestionsData, sortSuggestionsList };
});