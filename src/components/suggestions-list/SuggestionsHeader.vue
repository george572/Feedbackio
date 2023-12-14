<script setup lang="ts">
import SuggestionsHeaderSortComponent from './SuggestionsHeaderSortComponent.vue';
import AppButton from '../base/AppButton.vue';

defineProps({
    totalSuggestions: {
        type: Number,
        required: false,
        default: 0,
    },
});
</script>

<template>
  <div class="w-full h-[72px] py-6 px-4 flex bg-darkBlue rounded-xl text-white justify-between items-center">
    <div class="flex items-center gap-8">
      <!-- total amount of suggestions -->
      <div class="flex items-center gap-4 pl-2">
        <img
          src="../../assets/images/suggestion-header-icon.svg"
        >
        <h2 class="font-[Jost-Bold] text-lg">
          {{ totalSuggestions }} Suggestions
        </h2>
      </div>
    
      <SuggestionsHeaderSortComponent />
    </div>
    <AppButton :bg-color="'purple'">
      + Add Feedback
    </AppButton>
  </div>
</template>