<script setup lang="ts">
defineProps({
  bgColor: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    class="w-[128px] xs:w-[158px] h-[44px] text-center leading-[44px] transition-all duration-300 text-white rounded-xl text-sm font-[Jost-Bold]"
    :class="{
      'bg-purple hover:bg-[#C75AF6]': bgColor === 'purple',
      'bg-blue hover:bg-[#7C91F9]': bgColor === 'blue',
      'bg-darkBlue hover:bg-[#656EA3]': bgColor === 'darkBlue',
      'bg-red hover:bg-[#E98888]': bgColor === 'red',
    }"
  >
    <slot />
  </button>
</template>