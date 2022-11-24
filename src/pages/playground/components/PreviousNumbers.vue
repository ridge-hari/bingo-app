<script setup lang="ts">
defineProps<{
  previousNums: Number[];
}>();
</script>
<template>
  <div class="grid grid-cols-3 grid-flow-row bg-slate-200 ring-2 dark:ring-yellow-500">
    <template v-for="i in 3" :key="i">
      <div class="font-serif flex flex-col mx-10 my-8 w-16 text-black">
        <span class="text-xl text-black">{{ 4-i }}回前</span>
        <vue-feather type="arrow-down" class="text-black ml-5" size="20"></vue-feather>
        <span v-if="previousNums[i-1]!=0" class="text-2xl ml-5">{{ previousNums[i-1] }}</span>
        <span v-else class="text-2xl ml-5">--</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "PreviousNumbers",
};
</script>
