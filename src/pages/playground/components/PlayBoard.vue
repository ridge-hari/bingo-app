<script setup lang="ts">
defineProps<{
  numbers: Number[],
  row: Number,
  col: Number,
  fetchableNumbers: Number[],
  isVisible: boolean,
}>();
</script>

<template>
  <div>
    <table class="table-auto shadow-2xl bg-slate-600">
      <thead>
        <tr>
          <th class="font-serif hover:animate-spin cursor-pointer text-8xl text-yellow-400 font-bold px-10 whitespace-nowrap">B</th>
          <th class="font-serif hover:animate-spin cursor-pointer text-8xl text-yellow-400 font-bold px-10 whitespace-nowrap">I</th>
          <th class="font-serif hover:animate-spin cursor-pointer text-8xl text-yellow-400 font-bold px-10 whitespace-nowrap">N</th>
          <th class="font-serif hover:animate-spin cursor-pointer text-8xl text-yellow-400 font-bold px-10 whitespace-nowrap">G</th>
          <th class="font-serif hover:animate-spin cursor-pointer text-8xl text-yellow-400 font-bold px-10 whitespace-nowrap">O</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="r in row" :key="r">
          <tr>
            <template v-for="c in col" :key="c">
              <td v-if="fetchableNumbers.includes(numbers[(r-1)*col+(c-1)])"
                class="font-serif text-xl text-gray-400 font-medium px-10 pb-4 whitespace-nowrap text-center"
              >
                {{ isVisible?numbers[(r-1)*col+(c-1)]:"▬" }}
              </td>
              <td v-else
                class="font-serif text-2xl text-yellow-400 font-medium px-10 pb-4 whitespace-nowrap text-center"
              >
                {{ numbers[(r-1)*col+(c-1)] }}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlayBoard",
};
</script>
