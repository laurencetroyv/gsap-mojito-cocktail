<script setup lang="ts">
import gsap from "gsap"
import { slider_lists } from "~/constants"

const content_ref = useTemplateRef("content_ref")

const current_index = ref(0)
const current_cocktail = computed(() => getCocktailAt(0))
const prev_cocktail = computed(() => getCocktailAt(-1))
const next_cocktail = computed(() => getCocktailAt(1))

const list_length = slider_lists.length

function goToSlide(index: number) {
  current_index.value = (index + list_length) % list_length
}

function getCocktailAt(index_offset: number) {
  return slider_lists[(current_index.value + index_offset + list_length) % list_length]
}

useGsap(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to("#m-left-leaf", { y: 200 }, 0)
    .to("#m-right-leaf", { y: 200 }, 0)

  watch(
    current_index,
    () => {
      gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 })
      gsap.fromTo(
        ".cocktail img",
        { opacity: 0, xPercent: -100 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        },
      )
      gsap.fromTo(
        ".details h2",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 100,
          ease: "power1.inOut",
        },
      )
      gsap.fromTo(
        ".details p",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 100,
          ease: "power1.inOut",
        },
      )
    },
    { immediate: true },
  )
})
</script>

<template>
  <section
    id="menu"
    aria-labelledby="menu-heading"
  >
    <img
      src="/images/slider-left-leaf.png"
      alt="left-leaf"
      id="m-left-leaf"
    />

    <img
      src="/images/slider-right-leaf.png"
      alt="right-leaf"
      id="m-right-leaf"
    />

    <h2
      id="menu-heading"
      class="sr-only"
    >
      Cocktail Menu
    </h2>

    <nav
      class="cocktail-tabs"
      aria-label="Cocktail Navigation"
    >
      <button
        v-for="(list, index) in slider_lists"
        :key="index"
        :class="
          current_index === index ? 'border-white text-white' : 'border-white/50 text-white/50'
        "
        @click="() => goToSlide(index)"
      >
        {{ list.name }}
      </button>
    </nav>

    <div class="content">
      <div class="arrows">
        <button
          class="text-left"
          @click="() => goToSlide(current_index - 1)"
        >
          <span>{{ prev_cocktail?.name }}</span>
          <img
            src="/images/right-arrow.png"
            alt="right-arrow"
            aria-hidden="true"
          />
        </button>
        <button
          class="text-left"
          @click="() => goToSlide(current_index + 1)"
        >
          <span>{{ next_cocktail?.name }}</span>
          <img
            src="/images/left-arrow.png"
            alt="left-arrow"
            aria-hidden="true"
          />
        </button>
      </div>

      <div class="cocktail">
        <img
          :src="current_cocktail?.image"
          :alt="current_cocktail?.description"
          class="object-contain"
        />
      </div>

      <div class="recipe">
        <div
          ref="content_ref"
          class="info"
        >
          <p>Recipe for:</p>
          <p id="title">{{ current_cocktail?.name }}</p>
        </div>

        <div class="details">
          <h2>{{ current_cocktail?.title }}</h2>
          <p>{{ current_cocktail?.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
