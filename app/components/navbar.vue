<script lang="ts" setup>
import { nav_links } from '~/constants';

useGsap(() => {
  const nav_tween = gsap.timeline({
    scrollTrigger: {
      trigger: 'nav',
      start: 'bottom top'
    }
  })

  nav_tween.fromTo(
    'nav',
    { backgroundColor: 'transparent' },
    { backgroundColor: "#0000050", backgroundFilter: 'blur(10px)', duration: 1, ease: "power1.inOut" }
  )
})
</script>

<template>
    <nav>
        <div>
            <a href="#home" class="flex items-center gap-2">
                <img src="/images/logo.png" alt="Logo">
                <p>Velvet Pour</p>
            </a>

            <ul>
                <li
                    v-for="link in nav_links"
                    :key="link.id"
                >
                    <a :href="`#${link.id }`">{{link.title}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
