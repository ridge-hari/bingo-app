<script setup lang="ts">
defineProps<{
  previousNums: Number[];
}>();
</script>
<template>
  <div class="grid grid-cols-3 grid-flow-row bg-slate-700 rounded-lg">
    <template v-for="i in 3" :key="i">
      <div class="flex flex-col mx-10 my-8 w-16">
        <div
          class="max-w-sm rounded bg-stone-500 rounded overflow-hidden shadow-lg text-center"
        >
          <span class="text-6xl">{{ previousNums[i-1] }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "PreviousNumbers",
};
</script>
