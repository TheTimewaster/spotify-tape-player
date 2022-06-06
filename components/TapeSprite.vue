<template>
  <div class="relative">
    <svg ref="tapeSprite" viewBox="0 0 330 220" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
      <defs>
        <linearGradient id="color-0" bx:pinned="true">
          <title>grey</title>
          <stop style="stop-color: rgb(238, 238, 238)"></stop>
        </linearGradient>
        <linearGradient id="color-1" bx:pinned="true">
          <title>lavender</title>
          <stop style="stop-color: rgb(122, 136, 255)"></stop>
        </linearGradient>
        <linearGradient id="color-2" bx:pinned="true">
          <title>radioactive</title>
          <stop style="stop-color: rgb(182, 255, 140)"></stop>
        </linearGradient>
        <linearGradient id="color-3" bx:pinned="true">
          <title>rose</title>
          <stop style="stop-color: rgb(255, 0, 0)"></stop>
        </linearGradient>
      </defs>
      <ellipse
        style="fill: none; stroke: url(#color-2)"
        cx="-281.854"
        cy="-198.036"
        rx="6.556"
        ry="6.556"
        transform="matrix(-1, 0, 0, -1, 0, 0)"
      ></ellipse>
      <ellipse
        style="fill: none; stroke: url(#color-2)"
        cx="-45.564"
        cy="-197.898"
        rx="6.556"
        ry="6.556"
        transform="matrix(-1, 0, 0, -1, 0, 0)"
      ></ellipse>
      <g id="tape-enclosure">
        <title>tape-enclosure</title>
        <rect
          x="-125.525"
          y="-198.374"
          width="9.228"
          height="9.331"
          style="fill: none; stroke: url(#color-0)"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></rect>
        <rect
          x="-210.527"
          y="-198.528"
          width="9.228"
          height="9.331"
          style="fill: none; stroke: url(#color-0)"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></rect>
        <path
          d="M 305.589 210.713 L 23.024 210.685 C 15.93 210.684 10.178 204.899 10.179 197.763 L 10.179 195.843 L 5.945 194.806 L 6.069 142.862 L 10.053 140.303 L 10.179 19.583 C 10.179 12.447 15.93 6.662 23.024 6.663 L 305.59 6.691 C 312.683 6.692 318.434 12.477 318.434 19.613 L 318.473 139.859 L 322.73 142.39 L 322.677 194.898 L 318.467 196.354 L 318.434 197.793 C 318.433 204.929 312.683 210.714 305.589 210.713 Z"
          style="fill-rule: nonzero; paint-order: fill; fill: none; stroke: url(#color-0)"
        ></path>
        <path
          d="M 267.896 210.651 L 58.779 210.699 L 68.764 165.847 C 69.628 162.877 70.236 160.665 75.133 160.665 L 254.379 160.665 C 257.241 160.665 258.811 163.142 259.33 165.917 L 267.896 210.651 Z"
          style="opacity: 0.9; fill: none; stroke: url(#color-0)"
        ></path>
        <ellipse
          style="fill: none; stroke: url(#color-0)"
          cx="-23.66"
          cy="-195.624"
          rx="5.651"
          ry="5.651"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="fill: none; stroke: url(#color-0)"
          cx="-304.116"
          cy="-195.431"
          rx="5.651"
          ry="5.651"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="fill: none; stroke: url(#color-0)"
          cx="-23.914"
          cy="-18.675"
          rx="5.651"
          ry="5.651"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="fill: none; stroke: url(#color-0)"
          cx="-304.116"
          cy="-18.404"
          rx="5.651"
          ry="5.651"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="fill: none; stroke: url(#color-0)"
          cx="-239.316"
          cy="-198.411"
          rx="5.651"
          ry="5.651"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="fill: none; stroke: url(#color-0)"
          cx="-88.617"
          cy="-198.825"
          rx="5.651"
          ry="5.651"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="fill: none; stroke: url(#color-0)"
          cx="-163.97"
          cy="-168.071"
          rx="5.651"
          ry="5.651"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
      </g>
      <path
        id="tape-strip"
        style="fill: none; stroke: url(#color-1)"
        :d="`M ${rightStripEnd} 95.909 L 290.347 196.897 C 290.347 196.897 291.144 200.839 288.36 203.915 C 285.779 206.767 282.038 206.744 282.038 206.744 L 45.991 206.682 C 45.991 206.682 41.39 206.848 38.886 204.06 C 36.175 201.041 36.951 196.422 36.897 196.368 L ${leftStripEnd} 95.909`"
      >
        <title>tape-strip</title>
      </path>
      <ellipse
        id="left-roll"
        style="stroke: rgb(122, 136, 255); fill: none"
        cx="-101.255"
        cy="-95.909"
        :rx="leftRollRadius"
        :ry="leftRollRadius"
        transform="matrix(-1, 0, 0, -1, 0, 0)"
      >
        <title>left-roll</title>
      </ellipse>
      <g id="left-spinner" class="spinner">
        <title>left-spinner</title>
        <ellipse
          style="fill: none; stroke: url(#color-1)"
          cx="-101.255"
          cy="-95.909"
          rx="25"
          ry="25"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="
            stroke-dasharray: 15, 6;
            stroke-dashoffset: 19px;
            fill: none;
            stroke-linecap: round;
            stroke: url(#color-2);
          "
          cx="-101.255"
          cy="-95.909"
          rx="19.702"
          ry="19.702"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <path
          style="stroke-linejoin: round; fill: none; stroke: url(#color-2)"
          d="M 105.202 109.707 C 103.056 111.033 97.576 111.15 95.423 109.694 L 97.317 105.827 C 95.77 105.039 94.389 104.43 92.933 103.583 L 90.794 107.708 C 88.929 106.325 86.278 100.95 86.329 98.85 L 90.252 98.726 C 90.218 97.014 90.211 95.212 90.252 93.501 L 86.053 93.607 C 86.447 90.712 88.18 86.58 90.921 85.093 L 92.961 88.843 C 94.602 87.896 95.946 87.218 97.39 86.364 L 95.717 82.763 C 98.03 81.116 102.515 81.155 104.652 82.517 L 102.937 86.502 C 104.503 87.202 105.666 88.09 107.139 88.976 L 109.511 85.177 C 112.413 86.78 114.776 90.937 114.274 93.745 L 109.752 93.777 C 109.688 95.535 109.703 97.014 109.752 98.726 L 114.182 98.712 C 114.086 102.744 112.321 105.108 109.636 107.153 L 107.139 103.251 C 105.875 103.979 104.437 104.949 102.914 105.849 C 103.047 106.206 105.512 109.611 105.202 109.707 Z"
        ></path>
        <path
          style="fill: none; stroke-linejoin: round; stroke-linecap: round; stroke: url(#color-3)"
          d="M 93.593 74.31 C 97.848 72.761 103.087 73.03 106.546 74.403"
        ></path>
      </g>
      <ellipse
        id="right-roll"
        style="fill: none; stroke: url(#color-1)"
        cx="-226.743"
        cy="-95.909"
        :rx="rightRollRadius"
        :ry="rightRollRadius"
        transform="matrix(-1, 0, 0, -1, 0, 0)"
      >
        <title>right-roll</title>
      </ellipse>
      <g id="right-spinner" class="spinner">
        <title>right-spinner</title>
        <ellipse
          style="fill: none; stroke: url(#color-1)"
          cx="-226.743"
          cy="-95.909"
          rx="25"
          ry="25"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <ellipse
          style="
            stroke-dasharray: 15, 6;
            stroke-dashoffset: 19px;
            fill: none;
            stroke-linecap: round;
            stroke: url(#color-2);
          "
          cx="-226.917"
          cy="-95.909"
          rx="19.702"
          ry="19.702"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        ></ellipse>
        <path
          style="stroke-linejoin: round; fill: none; stroke: url(#color-2)"
          d="M 231.363 109.573 C 229.217 110.899 223.737 111.017 221.584 109.561 L 223.478 105.693 C 221.931 104.905 220.55 104.297 219.094 103.45 L 216.955 107.574 C 215.09 106.192 212.439 100.816 212.49 98.717 L 216.414 98.592 C 216.379 96.881 216.372 95.079 216.414 93.367 L 212.214 93.473 C 212.609 90.579 214.341 86.446 217.082 84.959 L 219.123 88.71 C 220.763 87.762 222.107 87.085 223.551 86.23 L 221.878 82.63 C 224.192 80.983 228.676 81.022 230.814 82.383 L 229.098 86.368 C 230.665 87.069 231.828 87.957 233.301 88.843 L 235.672 85.044 C 238.575 86.646 240.937 90.803 240.435 93.611 L 235.913 93.644 C 235.849 95.401 235.865 96.881 235.913 98.592 L 240.343 98.578 C 240.247 102.611 238.482 104.974 235.797 107.02 L 233.301 103.117 C 232.037 103.845 230.598 104.816 229.075 105.716 C 229.208 106.073 231.673 109.478 231.363 109.573 Z"
        ></path>
        <path
          style="fill: none; stroke-linejoin: round; stroke-linecap: round; stroke: url(#color-3)"
          d="M 233.345 117.545 C 230.305 118.865 225.344 119.26 220.394 117.79"
        ></path>
      </g>
    </svg>

    <div
      v-if="currentPlaybackStore.currentContext"
      class="absolute top-0 bg-grey-500 bg-opacity-80 rounded color-white h-[5rem]"
    >
      <img class="h-full w-auto" :src="currentPlaybackStore.currentContext.images[0].url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentPlaybackStore } from '~~/store/playing-now';

const tapeSprite = ref<SVGElement>(null);
const currentPlaybackStore = useCurrentPlaybackStore();

const rightStripInitValue = 252.1;
const rightStripEnd = ref<number>(rightStripInitValue);
const leftStripInitValue = 26;
const leftStripEnd = ref<number>(leftStripInitValue);
const leftRollRadius = ref<number>(75);
const rightRollRadius = ref<number>(25);

const startTime = ref<number>(0);
const endTime = ref<number>(0);

const { pause, resume } = useRafFn(
  () => {
    const now = new Date().getTime();
    const songProgress = (now - startTime.value) / currentPlaybackStore.currentDuration;
    rightStripEnd.value = rightStripInitValue + 50 * songProgress;
    leftStripEnd.value = leftStripInitValue + 50 * songProgress;

    leftRollRadius.value = 25 + 50 * (1 - songProgress);
    rightRollRadius.value = 25 + 50 * songProgress;
  },
  { immediate: false }
);

watchEffect(() => {
  if (!currentPlaybackStore.hasPlayback) return;

  if (tapeSprite.value != null) {
    const spinners = Array.from<Element>(tapeSprite.value.getElementsByClassName('spinner'));
    if (currentPlaybackStore.isPlaying) {
      spinners.forEach((spinnerGroup) => spinnerGroup.classList.add('spinner--spin'));

      endTime.value = new Date().getTime() + currentPlaybackStore.currentDuration;
      startTime.value = new Date().getTime() - currentPlaybackStore.currentProgress;
      resume();
    } else {
      spinners.forEach((spinnerGroup) => spinnerGroup.classList.remove('spinner--spin'));

      pause();
    }
  }
});
</script>

<style scoped>
/* spin solution is meh because it does not save the state, maybe use requestAnimationFrame instead */
.spinner--spin {
  transform-origin: center;
  transform-box: fill-box;
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
