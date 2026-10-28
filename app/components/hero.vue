<script lang="ts" setup>
import gsap from "gsap"
import { SplitText } from 'gsap/SplitText';

useGsap(() => {
  const hero_split = new SplitText('.title', { type: "chars, words"})
  const paragraphs_split = new SplitText('.subtitle', { type: "lines"})

  hero_split.chars.forEach(char => char.classList.add('text-gradient'))

  gsap.from(hero_split.chars, {
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.06,
  })

  gsap.from(paragraphs_split.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    east: "expo.out",
    stagger: 0.06,
    delay: 1
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  }).to(".right-leaf", { y: 200 }, 0)
  .to(".left-leaf", { y: -200 }, 0)
})
</script>

<template>
<section id="hero" class="noisy">
    <h1 class="title">Mojito</h1>

    <img src="/images/hero-left-leaf.png" alt="left-leaf" class="left-leaf" />
    <img src="/images/hero-right-leaf.png" alt="right-leaf" class="right-leaf" />

    <div class="body">
        <div class="content">
            <div class="space-y-5 hidden md:block">
                <p>Cool. Crisp. Classic.</p>
                <p class="subtitle">
                    Sip the Spirit <br> of Summer
                </p>
            </div>
        </div>

        <div class="view-cocktails">
            <p class="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
        </div>
    </div>
</section>
</template>
