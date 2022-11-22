<script setup lang="ts">
defineProps<{
  numbers: Number[],
  row: Number,
  col: Number,
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead>
              <tr class="border-b bg-green-100 border-green-200">
                <th class="font-serif hover:animate-spin cursor-pointer text-6xl text-yellow-400 font-bold px-20 whitespace-nowrap">B</th>
                <th class="font-serif hover:animate-spin cursor-pointer text-6xl text-yellow-400 font-bold px-20 whitespace-nowrap">I</th>
                <th class="font-serif hover:animate-spin cursor-pointer text-6xl text-yellow-400 font-bold px-20 whitespace-nowrap">N</th>
                <th class="font-serif hover:animate-spin cursor-pointer text-6xl text-yellow-400 font-bold px-20 whitespace-nowrap">G</th>
                <th class="font-serif hover:animate-spin cursor-pointer text-6xl text-yellow-400 font-bold px-20 whitespace-nowrap">O</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="r in row" :key="r">
                <tr class="border-b bg-green-100 border-green-200">
                  <template v-for="c in col" :key="c">
                    <td v-if="numbers[(r-1)*col+(c-1)]!=0"
                      class="font-serif text-2xl text-gray-400 font-medium px-20 whitespace-nowrap"
                    >
                      {{ numbers[(r-1)*col+(c-1)] }}
                    </td>
                    <td v-else
                      class="font-serif text-2xl text-pink-700 font-medium px-20 whitespace-nowrap"
                    >
                      <vue-feather type="smile" size="25"></vue-feather>
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlayBoard",
};
</script>
