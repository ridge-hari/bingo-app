<script setup lang="ts">
import PlayBoard from "./components/PlayBoard.vue";
import PreviousNumbers from "./components/PreviousNumbers.vue";
import CurrentNumber from "./components/CurrentNumber.vue";
import NextNumberButton from "./components/NextNumberButton.vue";
import GameRefreshButton from "./components/GameRefreshButton.vue";

const row = 15;
const col = 5;
</script>

<template>
  <div class="flex">
    <div class="w-1/2">
      <div class="flex justify-center items-center">
        <PlayBoard :row="row" :col="col" />
      </div>
    </div>
    <div class="w-1/2">
      <div class="flex justify-center items-center">
        <div>
          <div class="bg-green-700 rounded-lg mb-12 drop-shadow-2xl">
            <span class="text-4xl">Previous Numbers:</span>
            <PreviousNumbers :size="col" />
          </div>
          <div class="bg-green-700 mb-24 drop-shadow-2xl">
            <span class="text-4xl">Current Number:</span>
            <CurrentNumber :size="col" />
          </div>
          <div class="grid grid-cols-2 grid-flow-col gap-4 my-8 h-10">
            <NextNumberButton />
            <GameRefreshButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlayGround",
  components: {
    PlayBoard,
    PreviousNumbers,
    CurrentNumber,
    NextNumberButton,
    GameRefreshButton,
  },
};
</script>
