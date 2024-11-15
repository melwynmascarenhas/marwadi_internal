/* eslint-disable */
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(Flip)
gsap.registerPlugin(ScrollTrigger)

import Swiper from 'swiper'
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Thumbs,
  Mousewheel,
  Keyboard,
  Parallax,
} from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { easing } from 'jquery'
Swiper.use([
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Thumbs,
  Mousewheel,
  Keyboard,
  Parallax,
])

function enableScrolling() {
  // Enable scrolling after the delay
  document.body.style.overflowY = 'auto'
  //LENIS
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
  //
}

enableScrolling()

// //PRELOADER
// const numberElement = document.querySelector('.number')
// let counter = 0
// const duration = 3000 // 4 seconds
// const interval = duration / 100 // interval for each increment

// function updateCount() {
//   const updateCounter = setInterval(() => {
//     counter++
//     numberElement.textContent = counter
//     if (counter === 100) {
//       clearInterval(updateCounter)
//     }
//   }, interval)
// }

// gsap.set('svg rect', {
//   width: '0%',
// })

// const preloaderTL = gsap.timeline()

// preloaderTL
//   .to('svg rect', {
//     duration: 3,
//     width: '100%', // Animate the width to cover the SVG
//     ease: 'power1.inOut',
//     onStart: updateCount,
//   })
//   .to(
//     '.pre-loader',
//     {
//       delay: 0.5,
//       duration: 1,
//       opacity: 0,
//       ease: 'power1.inOut',
//       onComplete: enableScrolling,
//     },
//     '>'
//   )
// //

const horizontalSection = document.querySelector('.is-paths')
if (horizontalSection) {
  const wrapper = horizontalSection.querySelector('.wrapper')
  const items = wrapper.querySelectorAll('.item')
  //horizontal scrolling effect
  let wrapperTween = gsap.to(wrapper, {
    x: () => (wrapper.offsetWidth - window.innerWidth) * -1,
    ease: 'none',
    scrollTrigger: {
      // markers: true,
      trigger: horizontalSection,
      pin: true,
      start: 'top 6%',
      end: () => `+=${items[0].offsetWidth * items.length}`,
      scrub: 1,
      invalidateOnRefresh: true, //recalculate the start and end points when window resize
    },
  })
}

//tech SWIPER
const bulletwrap = document.querySelector('.tech-bullet-wrapper')
const teamSlider = new Swiper('.swiper.is-tech', {
  // Parameters
  spaceBetween: 16,
  breakpoints: {
    // When window width is >= 768px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  centeredSlides: true,
  allowTouchMove: true,
  loop: true,
  pagination: {
    el: bulletwrap,
    bulletClass: 'swiper-bullet',
    bulletActiveClass: 'is-active',
    bulletElement: 'button',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
})

//story SWIPER
const storybulletwrap = document.querySelector('.story-bullet-wrapper')
const storySlider = new Swiper('.swiper.is-story', {
  // Parameters
  spaceBetween: 16,
  breakpoints: {
    // When window width is >= 768px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  centeredSlides: true,
  allowTouchMove: true,
  loop: true,
  pagination: {
    el: storybulletwrap,
    bulletClass: 'swiper-bullet',
    bulletActiveClass: 'is-active',
    bulletElement: 'button',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
})

//close form and open form
const apply = document.querySelector('[apply]')
if (apply) {
  apply.addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'flex'
  })

  document.querySelector('.close-form').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none'
  })
}

//FLIP MENU
// gsap.registerPlugin(Flip)
// let hamburgerEl = document.querySelector('.nav_hamburger_wrap')
// let navLineEl = document.querySelectorAll('.nav_hamburger_line')
// let flipItemEl = document.querySelector('.nav_hamburger_base')
// let menuWrapEl = document.querySelector('.mob_menu_wrap')
// let menuBaseEl = document.querySelector('.menu_base')
// let menuContainEl = document.querySelector('.mob_menu_contain')

// let flipDuration = 0.6

// function flip(forwards) {
//   let state = Flip.getState(flipItemEl)
//   if (forwards) {
//     menuContainEl.appendChild(flipItemEl)
//   } else {
//     hamburgerEl.appendChild(flipItemEl)
//   }
//   Flip.from(state, { duration: flipDuration })
// }

// let tl = gsap.timeline({ paused: true })
// tl.set(menuWrapEl, { display: 'flex' })
// //from is used because we want to move the base first
// tl.from(menuBaseEl, {
//   opacity: 0,
//   duration: flipDuration,
//   ease: 'none',
//   //conditional...only runs when the timeline starts
//   onStart: function () {
//     flip(true)
//   },
// })
// tl.to(navLineEl[0], { y: 4, rotate: 45, duration: flipDuration }, '<')
// tl.to(navLineEl[1], { y: -4, rotate: -45, duration: flipDuration }, '<')

// const menuLinks = gsap.utils.toArray('.menu_link')
// tl.from(menuLinks, {
//   opacity: 0,
//   yPercent: 50,
//   duration: 0.2,
//   stagger: { amount: 0.2 },
//   //conditional...only runs when the tween finishes the reverse to the start point
//   //here moving the base after the links disappear completely
//   onReverseComplete: function () {
//     flip(false)
//   },
// })

// function openMenu(open) {
//   //check if the animation is playing to stop intteruption
//   if (!tl.isActive()) {
//     if (open) {
//       tl.play()
//       hamburgerEl.classList.add('nav-open')
//       document.body.style.overflow = 'hidden'
//     } else {
//       //play close animation because because open menu was set to false
//       tl.reverse()
//       hamburgerEl.classList.remove('nav-open')
//       document.body.style.overflow = ''
//     }
//   }
// }

// //callback to perform menu open or close
// hamburgerEl.addEventListener('click', function () {
//   //checking if the menu is open or closed
//   if (hamburgerEl.classList.contains('nav-open')) {
//     //then set openmenu to false
//     openMenu(false)
//   } else {
//     openMenu(true)
//   }
// })

// menuBaseEl.addEventListener('mouseenter', function () {
//   openMenu(false)
// })
// menuBaseEl.addEventListener('click', function () {
//   openMenu(false)
// })

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     openMenu(false)
//   }
// })

///stick Main nav
// Pin the mainNav element until the entire page has been scrolled
// gsap.to('.section-padding.is-nav', {
//   scrollTrigger: {
//     trigger: '.section-padding.is-nav',
//     start: 'top top', // when the top of the nav matches the top of the viewport
//     end: () =>
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight,
//     pin: true, // pin it in place
//     pinSpacing: false, // removes the extra space added by pinning
//   },
// })

const pinItems = document.querySelectorAll('[pin]')
pinItems.forEach((item) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top top', // when the top of the nav matches the top of the viewport
      end: () =>
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      pin: true, // pin it in place
      pinSpacing: false, // removes the extra space added by pinning
    },
  })
})

const effectSections = document.querySelectorAll('[effect-section]')

effectSections.forEach((effectSection) => {
  const textBlocks = effectSection.querySelectorAll('[text-block]')
  const imgBlocks = effectSection.querySelectorAll('[img-block]')

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: effectSection,
      start: 'top bottom',
      end: 'top center',
      toggleActions: 'none play none reset',
    },
  })

  tl.from(textBlocks, {
    y: '10%', // animate from below
    opacity: 0, // animate from opacity 0
    duration: 3, // specify the duration (1 second in this case)
    ease: 'quart', // use 'quart' for quart easing
    stagger: 0.2, // stagger the animations with a delay of 0.2 seconds
  })

  tl.from(
    imgBlocks,
    {
      y: '10%', // animate from below
      opacity: 0, // animate from opacity 0
      duration: 2, // specify the duration (1 second in this case)
      ease: 'quart', // use 'quart' for quart easing
      stagger: 0.2, // stagger the animations with a delay of 0.2 seconds
    },
    '<'
  )
})
