<script setup lang="ts">
import PlayBoard from "./components/PlayBoard.vue";
import { computed, ref } from "vue";
import PreviousNumbers from "./components/PreviousNumbers.vue";
import CurrentNumber from "./components/CurrentNumber.vue";
import NextNumberButton from "./components/NextNumberButton.vue";
import GameRefreshButton from "./components/GameRefreshButton.vue";
import router from "@/router";

const row = 15;
const col = 5;
const index = ref(0);
const numbers = ref(Array.from({length: row*col}, (_, i) => i + 1));
const fetchableNumbers = ref(Array.from({length: row*col}, (_, i) => i + 1));
const isEmpty = ref(false);
const currentNum = ref(0);
const previousNums = ref([0, 0, 0]);
const isShowAnimation = ref(false);
const isButtonDisabled = ref(false);

const showAnimation = () => {
  return new Promise( resolve => setTimeout(resolve, 2000) );
}
const onClickNextButton = () => {
  if(isEmpty.value) {
    alert("All the numbers has already been fetched!!! Please refresh the Game.");
    return;
  }
  if (isButtonDisabled.value) {
    return;
  }
  isButtonDisabled.value=true;
  (async () => {
    isShowAnimation.value=true;
    await showAnimation();
    isShowAnimation.value=false;
    //update previous numbers
    previousNums.value[0] = previousNums.value[1];
    previousNums.value[1] = previousNums.value[2];
    previousNums.value[2] = currentNum.value;
    //get randow number
    currentNum.value = fetchableNumbers.value[Math.floor(Math.random()*fetchableNumbers.value.length)];
    //delete current number from fetchable array
    index.value = fetchableNumbers.value.indexOf(currentNum.value);
    fetchableNumbers.value.splice(index.value, 1);
    //disable next button if fetchable numbers empty
    if(fetchableNumbers.value.length==0) {
      isEmpty.value = true;
    }
    isButtonDisabled.value=false;
  })();
}
const onClickRefreshButton = () => {
  if (confirm('再起動よろしいですか?')) {
    router.go(0);
  }
}
</script>

<template>
  <div class="flex">
    <div class="w-1/2">
      <div class="flex justify-center">
        <PlayBoard :numbers="numbers" :row="row" :col="col" :fetchableNumbers="fetchableNumbers"/>
      </div>
    </div>
    <div class="w-1/2">
      <div class="flex justify-center">
        <div>
          <div class="bg-slate-700 rounded-lg mb-12 drop-shadow-2xl">
            <span class="font-serif text-yellow-400 text-xl">履歴番号:</span>
            <PreviousNumbers :previousNums="previousNums" />
          </div>
          <div class="bg-slate-700 mb-24 drop-shadow-2xl aspect-[3/1]">
            <span class="font-serif text-yellow-400 text-2xl">現在番号:</span>
            <CurrentNumber :currentNum="currentNum" :isShowAnimation="isShowAnimation"/>
          </div>
          <div class="flex justify-between mx-12">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-600 to-slate-500 group-hover:from-yellow-600 group-hover:to-slate-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <NextNumberButton :onclick="onClickNextButton " />
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-slate-500 group-hover:from-red-600 group-hover:to-slate-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <GameRefreshButton :onclick="onClickRefreshButton" />
              </span>
            </button>
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
