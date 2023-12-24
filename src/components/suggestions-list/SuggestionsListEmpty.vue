<script setup lang="ts">
import AppButton from '../base/AppButton.vue';
</script>

<template>
  <div class="max-h-[600px] py-28 flex items-center justify-center flex-col bg-white rounded-xl my-6 px-5 w-full">
    <img
      src="../../assets/images/empty-icon.png"
      alt=""
      class="mb-10"
    >
    <div class="max-w-[410px]">
      <h2 class="capitalize font-[Jost-Bold] text-2xl text-darkBlue text-center mb-5">
        There is no feedback yet.
      </h2>
    </div>
    <div class="max-w-[410px] mb-5">
      <p class="capitalize font-[Jost-Regular] text-base text-center leading-[16px] text-gray">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
      </p>
    </div>
    <AppButton :bg-color="'purple'">
      + Add Feedback
    </AppButton>
  </div>
</template>