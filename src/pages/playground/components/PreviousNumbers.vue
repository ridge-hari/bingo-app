<script setup lang="ts">
defineProps<{
  previousNums: Number[];
}>();
</script>
<template>
  <div class="grid grid-cols-3 grid-flow-row bg-slate-600 rounded-lg">
    <template v-for="i in 3" :key="i">
      <div class="font-serif flex flex-col mx-10 my-8 w-16 text-pink-700">
        <span class="text-4xl">{{ previousNums[i-1] }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "PreviousNumbers",
};
</script>
