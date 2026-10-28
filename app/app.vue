<template>
    <main>
        <navbar />
        <hero />
        <div class="h-dvh bg-black" />
    </main>
</template>

<script lang="ts" setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)
</script>
