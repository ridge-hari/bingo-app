<script setup lang="ts">
defineProps<{
  currentNum: Number,
  isShowAnimation: Boolean,
}>();
</script>

<template>
  <div v-if="currentNum!=0" class="flex items-center justify-center rounded-lg bg-yellow-600 shadow-lg">
    <span v-if="isShowAnimation" class="random font-serif text-8xl text-black mb-5"></span>
    <span v-else class="font-serif text-9xl text-black mb-5">{{currentNum}}</span>
  </div>
  <div v-else class="flex items-center justify-center rounded-lg bg-yellow-600 shadow-lg">
    <span v-if="isShowAnimation" class="random font-serif text-8xl text-black mb-5"></span>
    <span v-else class="font-serif text-9xl text-black mb-5">
      <vue-feather type="smile" size="100"></vue-feather>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentNumber",
};
</script>
