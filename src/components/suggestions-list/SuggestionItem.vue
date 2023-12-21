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
  <div class="flex items-center justify-between w-full px-8 my-5 bg-white py-7 rounded-xl">
    <div class="flex gap-10">
      <div class="w-[40px] h-[53px] bg-darkGray rounded-xl flex items-center justify-center flex-col gap-1 cursor-pointer">
        <img src="../../assets/images/upvote-sign.svg">
        <span class="text-[13px] font-[Jost-Bold]">{{ upvotesAmount }}</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-darkBlue font-[Jost-Bold] text-lg">{{ title }}</span>  
        <span class="text-gray font-[Jost-Regular] text-base">{{ description }}</span>
        <div
          class="px-4 py-2 mt-2 rounded-xl font-[Jost-Semibold] text-[13px] transition-all duration-200 text-blue bg-darkGray text-center"
        >
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2 cursor-pointer">
      <img src="../../assets/images/comment.svg">
      <span class="text-base font-[Jost-Bold]">{{ commentsAmount }}</span>
    </div>
  </div>
</template>