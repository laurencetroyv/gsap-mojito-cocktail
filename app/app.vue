<template>
  <div>
    <p class="flex-center">Hello Gsap!</p>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)
</script>
