<script setup lang="ts">
defineProps<{
  row: Number;
  col: Number;
}>();
</script>

<template>
  <div class="flex flex-col mx-10">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <tbody>
              <template v-for="i in row" :key="i">
                <tr class="border-b bg-green-100 border-green-200">
                  <template v-for="j in col" :key="col * (i - 1) + j">
                    <td
                      class="text-2xl text-gray-400 font-medium px-20 whitespace-nowrap"
                    >
                      {{ col * (i - 1) + j }}
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
