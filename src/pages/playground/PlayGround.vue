<script setup lang="ts">
import PlayBoard from "./components/PlayBoard.vue";
import { computed, ref } from "vue";
import PreviousNumbers from "./components/PreviousNumbers.vue";
import CurrentNumber from "./components/CurrentNumber.vue";
import NextNumberButton from "./components/NextNumberButton.vue";
import GameRefreshButton from "./components/GameRefreshButton.vue";
import router from "@/router";

const row = 5;
const col = 5;
const index = ref(0);
const numbers = ref(Array.from({length: row*col}, (_, i) => i + 1));
const fetchableNumbers = ref(Array.from({length: row*col}, (_, i) => i + 1));
const isEmpty = ref(false);
const currentNum = ref(0);
const previousNums = ref([0, 0, 0]);
const onClickNextButton = () => {
  console.log(fetchableNumbers.value);
  if(isEmpty.value) {
    alert("All the numbers has already been fetched!!! Please refresh the Game.");
    return;
  }
  //get randow number
  currentNum.value = fetchableNumbers.value[Math.floor(Math.random()*fetchableNumbers.value.length)];
  //replace fetched number with zero
  index.value = numbers.value.indexOf(currentNum.value);
  numbers.value[index.value] = 0;
  //delete current number from fetchable array
  index.value = fetchableNumbers.value.indexOf(currentNum.value);
  fetchableNumbers.value.splice(index.value, 1);
  //disable next button if fetchable numbers empty
  if(fetchableNumbers.value.length==0) {
    isEmpty.value = true;
  }
  //update previous numbers
  previousNums.value[0] = previousNums.value[1];
  previousNums.value[1] = previousNums.value[2];
  previousNums.value[2] = currentNum.value;
}
const onClickRefreshButton = () => {
  router.go(0);
}
</script>

<template>
  <div class="flex">
    <div class="w-1/2">
      <div class="flex justify-center items-center">
        <PlayBoard :numbers="numbers" :row="row" :col="col" />
      </div>
    </div>
    <div class="w-1/2">
      <div class="flex justify-center items-center">
        <div>
          <div class="bg-green-700 rounded-lg mb-12 drop-shadow-2xl">
            <span class="font-serif text-4xl">Previous Numbers:</span>
            <PreviousNumbers :previousNums="previousNums" />
          </div>
          <div class="bg-green-700 mb-24 drop-shadow-2xl">
            <span class="font-serif text-4xl">Current Number:</span>
            <CurrentNumber :currentNum="currentNum" />
          </div>
          <div class="grid grid-cols-2 grid-flow-col gap-4 my-8 h-10">
            <NextNumberButton :onclick="onClickNextButton " />
            <GameRefreshButton :onclick="onClickRefreshButton" />
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
