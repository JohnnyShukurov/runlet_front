<template>
  <header>
    <div class="header-box">
      <svg class="logo" width="135" height="25" viewBox="0 0 135 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.175049 1.02436L9.71143 1.0513C11.5972 1.0513 13.1596 1.48232 14.3719 2.39824C15.5572 3.28723 16.1768 4.66111 16.1768 6.49296C16.1768 7.59745 15.9074 8.56726 15.3686 9.40236C14.8298 10.2375 14.0755 10.8301 13.1327 11.2073C14.7759 11.5305 15.7188 13.0391 15.9613 15.6791C15.9613 15.7599 15.9613 16.0293 16.0151 16.5142C16.0421 16.9722 16.069 17.3493 16.1229 17.6187C16.1498 17.8881 16.2037 18.2383 16.2576 18.6424C16.3115 19.0196 16.3923 19.3698 16.5 19.6392C16.6078 19.9085 16.7156 20.0971 16.8772 20.2318H12.5131C12.3514 19.9355 12.2437 19.5583 12.1898 19.1273C12.109 18.6963 12.0551 18.1306 12.0012 17.4302C11.9474 16.7297 11.9204 16.3526 11.9204 16.2718C11.7588 14.9248 11.4355 14.0089 10.8967 13.4701C10.358 12.9583 9.44204 12.6889 8.09509 12.6889H4.35058V20.2049H0.175049V1.02436ZM4.35058 4.36478V9.67175H8.33754C9.49592 9.67175 10.4118 9.48318 11.0584 9.10603C11.7049 8.72889 12.0551 8.02848 12.0551 6.95092C12.0551 5.92724 11.7318 5.25377 11.0853 4.90356C10.4388 4.52642 9.60367 4.36478 8.52612 4.36478H4.35058Z" fill="white"/>
        <path d="M35.7797 1.02436V12.5542C35.7797 15.302 35.1062 17.3493 33.7862 18.6424C32.4662 19.9355 30.4188 20.582 27.6172 20.582C24.7617 20.582 22.6874 19.9355 21.3404 18.6155C19.9935 17.2955 19.3469 15.2481 19.3469 12.5003V1.02436H23.5494V12.5003C23.5494 14.0628 23.8457 15.2212 24.4384 15.9755C25.031 16.7297 26.1086 17.1069 27.6711 17.1069C29.1796 17.1069 30.2033 16.7297 30.7421 15.9755C31.2809 15.2212 31.5772 14.0628 31.5772 12.5003V1.02436H35.7797Z" fill="white"/>
        <path d="M39.4221 20.2049V1.02436H43.7054L51.5985 13.8742V1.02436H55.6394V20.2049H51.4369L43.4899 7.32806V20.2049H39.4221Z" fill="white"/>
        <path d="M72.9668 16.5951V20.2049H59.3895V1.02436H63.592V16.5951H72.9668Z" fill="white"/>
        <path d="M112.102 1.02436V4.60723H106.337V20.2049H102.108V4.60723H96.3426V1.02436H112.102Z" fill="white"/>
        <path d="M120.596 0.728027C119.546 2.82926 118.792 4.82274 118.307 6.70847C117.822 8.62113 117.606 10.7224 117.606 12.9852C117.606 16.9453 118.603 20.9592 120.65 25H117.418C116.286 23.3298 115.424 21.4171 114.805 19.3159C114.185 17.2147 113.889 15.1404 113.889 13.0661C113.889 10.9109 114.185 8.75583 114.778 6.54684C115.37 4.33784 116.259 2.39824 117.418 0.728027H120.596Z" fill="var(--logo-accent-color, #6EC895)"/>
        <path d="M127.822 0.728027L131.001 0.754966C133.371 4.41866 134.584 8.40562 134.584 12.7428C134.584 14.7632 134.26 16.9453 133.641 19.2889C132.994 21.6596 132.132 23.5453 131.055 25H127.849C128.926 22.8179 129.681 20.7975 130.139 18.9387C130.597 17.08 130.839 14.9787 130.839 12.662C130.839 8.32481 129.815 4.33784 127.822 0.728027Z" fill="var(--logo-accent-color, #6EC895)"/>
        <rect x="75.4462" y="0.842499" width="18.0996" height="19.3624" stroke="var(--logo-accent-color, #6EC895)"/>
        <rect x="78.3926" y="13.8911" width="12.2067" height="3.78829" fill="var(--logo-accent-color, #6EC895)"/>
        <rect x="78.3926" y="8.41908" width="12.2067" height="3.78829" fill="var(--logo-accent-color, #6EC895)"/>
        <rect x="78.3926" y="2.94711" width="12.2067" height="3.78829" fill="var(--logo-accent-color, #6EC895)"/>
      </svg>

      <div class="icons">
        <div v-if="showRating" class="rating-wrapper" @click="onRatingClick">
          <svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51 41V22.5748H34.9426V41V1H17.4491V14.0709M17.4491 41V14.0709M17.4491 14.0709H1V41" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="rating-text">Рейтинг</span>
        </div>

        <svg 
          v-if="showTheme" 
          class="sun" 
          width="44" 
          height="42" 
          viewBox="0 0 44 42" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          @click="onThemeClick"
        >
          <path d="M22.1178 11.9379C27.3514 11.9379 31.5524 16.0735 31.5524 21.1244C31.5523 26.1752 27.3513 30.3109 22.1178 30.3109C16.8844 30.3108 12.6833 26.1751 12.6832 21.1244C12.6832 16.0736 16.8844 11.938 22.1178 11.9379Z" stroke="white" stroke-width="2"/>
          <path d="M22.6151 33.795V41" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.6151 1V8.20497" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M35.7826 21.1242H42.9876" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1 21.1242H8.20499" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.20508 5.72049L13.2998 10.8152" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M31.559 31.3105L36.6537 36.4052" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.2998 31.3105L8.20511 36.4052" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M36.6537 5.72049L31.559 10.8152" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg 
          v-if="showExit" 
          class="exit" 
          viewBox="0 0 43 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          @click="onExitClick"
        >
          <path d="M26.2162 13.1351V9C26.2162 5.13401 23.0822 2 19.2162 2H9C5.13401 2 2 5.13401 2 9V35C2 38.866 5.13401 42 9 42H19.2162C23.0822 42 26.2162 38.866 26.2162 35V30.7568" stroke="var(--logo-accent-color, #6EC895)" stroke-width="3" stroke-linecap="round"/>
          <path d="M15.4055 22.4324H40.9189M40.9189 22.4324L36.0541 17.5676M40.9189 22.4324L36.0541 27.7297" stroke="var(--logo-accent-color, #6EC895)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  showRating: {
    type: Boolean,
    default: true
  },
  showTheme: {
    type: Boolean,
    default: true
  },
  showExit: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['rating-click', 'theme-click', 'exit-click'])

const onRatingClick = () => {
  emit('rating-click')
}

const onThemeClick = () => {
  emit('theme-click')
}

const onExitClick = () => {
  emit('exit-click')
}
</script>

<style scoped>
.logo {
  width: 135px;
  height: 25px;
}

.sun {
  width: 42px;
  height: 40px;
  cursor: pointer;
  transition: opacity 300ms ease, transform 300ms ease;
}

.sun:hover {
  opacity: 0.8;
  transform: rotate(45deg);
}

.exit {
  height: 38.92px;
  width: 40px;
  cursor: pointer;
  transition: opacity 300ms ease, transform 300ms ease;
}

.exit:hover {
  opacity: 0.8;
  transform: translateX(3px);
}

.header-box {
  margin-top: 75px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 30px;
}

.rating-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 30px;
  transition: opacity 300ms ease;

}

.rating-wrapper:hover {
  opacity: 0.8;
}

.rating-wrapper svg {
  width: 52px;
  height: 42px;
}

.rating-text {
  color: white;
  font-size: 32px;
  font-family: "HB";
}

.logo path,
.logo rect {
  transition: fill 300ms ease, stroke 300ms ease;
}

.exit path {
  transition: stroke 300ms ease;
}
</style>