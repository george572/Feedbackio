<script setup lang="ts">
defineProps({
  categoryValue: {
        type: String,
        required: true,
    },
    isActive : {
        type: Boolean,
        required: false,
        default: false,
    },
});

defineEmits(["filterByCategory"]);
</script>

<template>
  <div
    class="px-4 py-2 rounded-xl font-[Jost-Semibold] text-[13px] transition-all duration-200 "
    :class="{'bg-blue text-white': isActive, 'text-blue bg-darkGray cursor-pointer hover:bg-[#CFD7FF]': !isActive,}"
    @click="$emit('filterByCategory', categoryValue)"
  >
    <slot />
  </div>
</template>