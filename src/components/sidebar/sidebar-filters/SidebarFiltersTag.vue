<script setup lang="ts">
defineProps({
    tagName: {
        type: String,
        required: true,
    },
    isActive : {
        type: Boolean,
        required: false,
        default: false,
    },
});

defineEmits(["filterByTag"]);
</script>

<template>
  <div
    class="px-4 py-2 rounded-xl font-[Jost-Semibold] text-[13px] transition-all duration-200 hover:bg-blue hover:text-white"
    :class="{'bg-blue text-white': isActive, 'text-blue bg-darkGray cursor-pointer': !isActive,}"
    @click="$emit('filterByTag', tagName)"
  >
    <slot />
  </div>
</template>