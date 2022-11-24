<script setup lang="ts">
defineProps<{
  currentNum: Number,
  isShowAnimation: Boolean,
}>();
</script>

<template>
  <div v-if="currentNum!=0" class="flex items-center justify-center bg-yellow-600 shadow-lg aspect-[3/1]">
    <span v-if="isShowAnimation" class="random font-serif text-8xl text-black"></span>
    <span v-else class="font-serif text-9xl text-black">{{ currentNum }}</span>
  </div>
  <div v-else class="flex items-center justify-center bg-yellow-600 shadow-lg aspect-[3/1]">
    <span v-if="isShowAnimation" class="random font-serif text-8xl text-black"></span>
    <span v-else class="font-serif text-9xl text-black">
      --
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentNumber",
};
</script>
