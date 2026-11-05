<script lang="ts" setup>
import gsap from "gsap"
import { feature_lists, good_list } from "~/constants"

const is_mobile = useMediaQuery("(max-width: 767px)")

useGsap(() => {
  const start = is_mobile.value ? "top 20%" : "top top"

  const masked_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#art",
      start,
      end: "bottom center",
      scrub: 1.5,
      pin: true,
    },
  })

  masked_timeline
    .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
    .to(".masked-img", {
      scale: 1.3,
      maskSize: "400% auto",
      duration: 1,
      ease: "power1.inOut",
    })
    .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" })
})
</script>

<template>
  <div id="art">
    <div class="container mx-auto h-full pt-20">
      <h2 class="will-fade">The ART</h2>

      <div class="content">
        <ul class="will-fade space-y-4">
          <li
            v-for="(feature, index) in good_list"
            :key="index"
            class="flex items-center gap-2"
          >
            <img
              src="/images/check.png"
              alt="check"
            />
            <p>{{ feature }}</p>
          </li>
        </ul>

        <div class="cocktail-img">
          <img
            src="/images/under-img.jpg"
            alt="cocktail"
            class="abs-center masked-img size-full object-contain"
          />
        </div>

        <ul class="will-fade space-y-4">
          <li
            v-for="(feature, index) in feature_lists"
            :key="index"
            class="flex items-center justify-start gap-2"
          >
            <img
              src="/images/check.png"
              alt="check"
            />
            <p class="w-60 md:w-fit">{{ feature }}</p>
          </li>
        </ul>
      </div>

      <div class="masked-container">
        <h2 class="will-fade">Sip-Worthy Perfection</h2>
        <div id="masked-content">
          <h3>Made with Craft, Poured with Passion</h3>
          <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
        </div>
      </div>
    </div>
  </div>
</template>
