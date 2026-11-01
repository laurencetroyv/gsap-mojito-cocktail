<template>
  <main>
    <navbar />
    <hero />
    <cocktails />
    <about />
    <art />
  </main>
</template>

<script lang="ts" setup vapor>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
</script>
