<script setup lang="ts">
import SidebarRoadmapItem from './SidebarRoadmapItem.vue';

const tasksData = [
  { type: 'planned', tasks: 12 },
  { type: 'inProgress', tasks: 3 },
  { type: 'live', tasks: 0 },
];
</script>

<template>
  <div class="w-full h-[178px] rounded-xl bg-white py-5 px-6">
    <div class="flex items-center justify-between">
      <h2 class="font-[Jost-Bold] text-lg text-darkBlue">
        Roadmap
      </h2>
      <a
        href="#!"
        class="underline text-blue text-[13px] font-[Jost-Semibold] hover:text-[#8397F8] transition-all duration-200"
      >View</a>
    </div>
    <div class="flex flex-col gap-2 mt-6">
      <SidebarRoadmapItem
        v-for="task in tasksData"
        :key="task.type"
        :task-type="task.type"
        :tasks-amount="task.tasks"
      />
    </div>
  </div>
</template>