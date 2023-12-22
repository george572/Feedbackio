<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag : {
    type: String,
    required: true,
  },
  commentsAmount : {
    type: Number,
    required: true,
  },
  upvotesAmount: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row items-end justify-between w-full px-6 my-5 bg-white sm:px-8 sm:items-center py-7 rounded-xl">
    <div class="flex flex-col-reverse gap-4 sm:gap-10 sm:flex-row">
      <div class="min-w-[40px] max-w-[69px] h-[32px] flex-row-reverse sm:h-[53px] bg-darkGray rounded-xl flex items-center justify-center sm:flex-col gap-1 cursor-pointer hover:bg-[#CFD7FF] transition-all duration-200">
        <img src="../../assets/images/upvote-sign.svg">
        <span class="text-[13px] font-[Jost-Bold]">{{ upvotesAmount }}</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-darkBlue font-[Jost-Bold] text-lg cursor-pointer">{{ title }}</span>  
        <span class="text-gray font-[Jost-Regular] text-base pr-0 sm:pr-3 cursor-pointer">{{ description }}</span>
        <div
          class="px-4 py-2 mt-2 rounded-xl font-[Jost-Semibold] text-[13px] transition-all duration-200 text-blue bg-darkGray text-center"
        >
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="relative flex items-center gap-2 pr-3 cursor-pointer sm:pr-0 bottom-1 xs:bottom-0">
      <img src="../../assets/images/comment.svg">
      <span class="text-base font-[Jost-Bold]">{{ commentsAmount }}</span>
    </div>
  </div>
</template>