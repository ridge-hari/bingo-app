<script setup lang="ts">
defineProps<{
  showLinks: boolean;
}>();
</script>

<template>
  <div
    v-if="!showLinks"
    class="max-w-screen flex min-h-screen flex-col bg-yellow-900 text-white"
  >
    <header
      class="flex h-12 w-full flex-row items-center justify-center bg-yellow-900 py-1 text-white shadow-lg border-b border-slate-800"
    >
      <div class="px-2 w-full text-left text-sm sm:text-base">BINGO</div>
    </header>
    <RouterView />
  </div>

  <div
    v-if="showLinks"
    class="max-w-screen flex min-h-screen flex-col bg-green-700 text-white"
  >
    <header
      class="flex h-10 w-full flex-row items-center justify-center py-20 bg-green-700 text-white"
    >
      <div
        class="font-serif animate-bounce px-2 w-10/12 text-center text-9xl cursor-pointer"
      >
        BINGO
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script lang="ts">
export default {
  name: "ConsoleLayout.vue",
};
</script>
