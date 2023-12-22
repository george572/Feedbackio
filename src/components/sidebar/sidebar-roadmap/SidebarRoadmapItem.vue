<script setup lang="ts">
defineProps({
    tasksAmount: {
        type: Number,
        required: true,
    },
    taskType: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <div class="flex items-center justify-between w-full cursor-pointer text-gray">
    <div class="flex items-center gap-4">
      <div
        class="w-[8px] h-[8px] rounded-full"
        :class="taskType === 'planned' ? 'bg-[orange]' : taskType === 'inProgress' ? 'bg-purple' : 'bg-lightBlue'"
      />    
      <div class="font-[Jost-Regular] text-base">
        {{ taskType === 'planned' ? 'Planned' : taskType === 'inProgress' ? 'In-Progress' : 'Live' }}
      </div>
    </div>
    <div class="font-[Jost-Bold] text-base">
      {{ tasksAmount }}
    </div>
  </div>
</template>