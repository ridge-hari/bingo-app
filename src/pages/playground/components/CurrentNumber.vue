<script setup lang="ts">
defineProps<{
  currentNum: Number,
  isShowAnimation: Boolean,
}>();
</script>

<template>
  <div v-if="currentNum!=0" class="flex items-center justify-center shadow-lg aspect-[3/1] ring-2 dark:ring-yellow-600">
    <span v-if="isShowAnimation" class="random font-serif text-8xl text-black"></span>
    <span v-else class="font-serif text-9xl text-black">{{ currentNum }}</span>
  </div>
  <div v-else class="flex items-center justify-center shadow-lg aspect-[3/1] ring-2 dark:ring-yellow-600">
    <span v-if="isShowAnimation" class="random font-serif text-8xl text-black"></span>
    <span v-else class="font-serif text-9xl text-black">
      <vue-feather type="dribbble" class="animate-bounce text-yellow-900" size="80"></vue-feather>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentNumber",
};
</script>
