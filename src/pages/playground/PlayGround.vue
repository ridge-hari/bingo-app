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
const isVisible = ref(false);

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
      <div class="flex justify-end mr-24 p-4">
        <PlayBoard :numbers="numbers" :row="row" :col="col" :fetchableNumbers="fetchableNumbers" :isVisible="isVisible"/>
      </div>
    </div>
    <div class="w-1/2 flex justify-start p-4">
      <div class="flex flex-row mr-24 p-4">
        <div>
          <div class="bg-slate-200 mb-12 drop-shadow-xl ring-2 dark:ring-yellow-500">
            <span class="font-serif text-slate-800 text-xl">履歴数字</span>
            <PreviousNumbers :previousNums="previousNums" />
          </div>
          <div class="bg-slate-200 mb-24 drop-shadow-2xl aspect-[3/1] ring-4 dark:ring-yellow-600">
            <span class="font-serif text-slate-800 text-2xl">現在数字</span>
            <CurrentNumber :currentNum="currentNum" :isShowAnimation="isShowAnimation"/>
          </div>
          <div class="flex justify-between">
            <button class="w-56 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-600 to-slate-500 group-hover:from-yellow-600 group-hover:to-slate-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="w-56 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
      <div class="flex flex-col p-4 drop-shadow-2xl bg-slate-600">
        <p class="text-right">
          <vue-feather type="settings" class="text-yellow-600" size="25" />
        </p>
        <label class="inline-flex relative items-center mr-10 cursor-pointer mt-5">
          <input type="checkbox" value="" class="sr-only peer" @change="isVisible=(!isVisible)">
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 ring-yellow-600 ring-1 peer-focus:ring-yellow-200 dark:peer-focus:ring-yellow-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
          <span class="ml-3 text-sm font-medium text-slate-200">数字表示</span>
        </label>
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
