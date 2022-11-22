<script setup lang="ts">
defineProps<{
  size: Number;
}>();
</script>

<template>
  <div class="flex items-center justify-center rounded-lg bg-red-600 shadow-lg">
    <span class="text-9xl text-black">?</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentNumber",
};
</script>
