import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import suggestionsDataMock from '../../data.json';

export const useSuggestionsStore = defineStore('Suggestions Store', () => {
  const totalSuggestions = computed(() => suggestionsData.value.length);
  const suggestionsData = ref<any[]>([]);
  const currentlySelectedCategory = ref<string>('all');

  const getSuggestionsData = () => {
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
    'most-comments': (a, b) => (b.comments?.length ?? 0) - (a.comments?.length ?? 0),
    'least-comments': (a, b) => (a.comments?.length ?? 0) - (b.comments?.length ?? 0),
    'most-upvotes': (a, b) => b.upvotes - a.upvotes,
    'least-upvotes': (a, b) => a.upvotes - b.upvotes,
  };

  const sortSuggestionsList = (sortBy: string) => {
    const sortFunction = sortFunctions[sortBy];
    if (sortFunction) {
      suggestionsData.value.sort(sortFunction);
    }
  };

  const setCurrentCategory = (category: string) => {
    currentlySelectedCategory.value = category;
  };
  
  return { totalSuggestions, getSuggestionsData, suggestionsData, sortSuggestionsList, setCurrentCategory, currentlySelectedCategory };
});