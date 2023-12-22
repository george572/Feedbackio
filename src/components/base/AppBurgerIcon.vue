<script setup lang="ts">
defineProps({
    isNavOpen: {
        type: Boolean,
        required: false,
        default: false,
    },
});

defineEmits(['openNav']);

</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-1 p-1 cursor-pointer"
    @click="$emit('openNav')"
  >
    <div
      class="w-[20px] h-[3px] bg-white transition-all duration-300"
      :class="{'transform rotate-[40deg] relative top-[5px]' : isNavOpen}"
    />
    <div
      v-if="!isNavOpen"
      class="w-[20px] h-[3px] bg-white"
    />
    <div
      class="w-[20px] h-[3px] bg-white transition-all duration-300" 
      :class="{'transform rotate-[-40deg] relative bottom-[2px]' : isNavOpen}"
    />
  </div>
</template>
