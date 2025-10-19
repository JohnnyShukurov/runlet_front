<template>
  <div class="course-page">
    <!-- Header -->
    <header>
      <div class="header-box">
        <!-- Logo SVG -->
        <svg class="logo" width="135" height="25" viewBox="0 0 135 25" fill="none">
          <path d="M0.175049 1.02436L9.71143 1.0513C11.5972 1.0513 13.1596 1.48232 14.3719 2.39824C15.5572 3.28723 16.1768 4.66111 16.1768 6.49296C16.1768 7.59745 15.9074 8.56726 15.3686 9.40236C14.8298 10.2375 14.0755 10.8301 13.1327 11.2073C14.7759 11.5305 15.7188 13.0391 15.9613 15.6791C15.9613 15.7599 15.9613 16.0293 16.0151 16.5142C16.0421 16.9722 16.069 17.3493 16.1229 17.6187C16.1498 17.8881 16.2037 18.2383 16.2576 18.6424C16.3115 19.0196 16.3923 19.3698 16.5 19.6392C16.6078 19.9085 16.7156 20.0971 16.8772 20.2318H12.5131C12.3514 19.9355 12.2437 19.5583 12.1898 19.1273C12.109 18.6963 12.0551 18.1306 12.0012 17.4302C11.9474 16.7297 11.9204 16.3526 11.9204 16.2718C11.7588 14.9248 11.4355 14.0089 10.8967 13.4701C10.358 12.9583 9.44204 12.6889 8.09509 12.6889H4.35058V20.2049H0.175049V1.02436ZM4.35058 4.36478V9.67175H8.33754C9.49592 9.67175 10.4118 9.48318 11.0584 9.10603C11.7049 8.72889 12.0551 8.02848 12.0551 6.95092C12.0551 5.92724 11.7318 5.25377 11.0853 4.90356C10.4388 4.52642 9.60367 4.36478 8.52612 4.36478H4.35058Z" fill="white"/>
          <path d="M35.7797 1.02436V12.5542C35.7797 15.302 35.1062 17.3493 33.7862 18.6424C32.4662 19.9355 30.4188 20.582 27.6172 20.582C24.7617 20.582 22.6874 19.9355 21.3404 18.6155C19.9935 17.2955 19.3469 15.2481 19.3469 12.5003V1.02436H23.5494V12.5003C23.5494 14.0628 23.8457 15.2212 24.4384 15.9755C25.031 16.7297 26.1086 17.1069 27.6711 17.1069C29.1796 17.1069 30.2033 16.7297 30.7421 15.9755C31.2809 15.2212 31.5772 14.0628 31.5772 12.5003V1.02436H35.7797Z" fill="white"/>
          <path d="M39.4221 20.2049V1.02436H43.7054L51.5985 13.8742V1.02436H55.6394V20.2049H51.4369L43.4899 7.32806V20.2049H39.4221Z" fill="white"/>
          <path d="M72.9668 16.5951V20.2049H59.3895V1.02436H63.592V16.5951H72.9668Z" fill="white"/>
          <path d="M112.102 1.02436V4.60723H106.337V20.2049H102.108V4.60723H96.3426V1.02436H112.102Z" fill="white"/>
          <path d="M120.596 0.728027C119.546 2.82926 118.792 4.82274 118.307 6.70847C117.822 8.62113 117.606 10.7224 117.606 12.9852C117.606 16.9453 118.603 20.9592 120.65 25H117.418C116.286 23.3298 115.424 21.4171 114.805 19.3159C114.185 17.2147 113.889 15.1404 113.889 13.0661C113.889 10.9109 114.185 8.75583 114.778 6.54684C115.37 4.33784 116.259 2.39824 117.418 0.728027H120.596Z" fill="#6EC895"/>
          <path d="M127.822 0.728027L131.001 0.754966C133.371 4.41866 134.584 8.40562 134.584 12.7428C134.584 14.7632 134.26 16.9453 133.641 19.2889C132.994 21.6596 132.132 23.5453 131.055 25H127.849C128.926 22.8179 129.681 20.7975 130.139 18.9387C130.597 17.08 130.839 14.9787 130.839 12.662C130.839 8.32481 129.815 4.33784 127.822 0.728027Z" fill="#6EC895"/>
          <rect x="75.4462" y="0.842499" width="18.0996" height="19.3624" stroke="#6EC895"/>
          <rect x="78.3926" y="13.8911" width="12.2067" height="3.78829" fill="#6EC895"/>
          <rect x="78.3926" y="8.41908" width="12.2067" height="3.78829" fill="#6EC895"/>
          <rect x="78.3926" y="2.94711" width="12.2067" height="3.78829" fill="#6EC895"/>
        </svg>

        <div class="course-header-title">
          <span class="bracket-title">{</span>
          {{ courseTitle }}
          <span class="bracket-title">}</span>
        </div>

        <div class="icons">
          <!-- Rating Icon -->
          <svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51 41V22.5748H34.9426V41V1H17.4491V14.0709M17.4491 41V14.0709M17.4491 14.0709H1V41" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


          <span class="rating-text">Рейтинг</span>

          <!-- Sun Icon -->
          <svg class="sun" width="44" height="42" viewBox="0 0 44 42" fill="none">
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

          <!-- Exit Icon -->
          <svg class="exit" viewBox="0 0 43 44" fill="none" @click="goBack">
            <path d="M26.2162 13.1351V9C26.2162 5.13401 23.0822 2 19.2162 2H9C5.13401 2 2 5.13401 2 9V35C2 38.866 5.13401 42 9 42H19.2162C23.0822 42 26.2162 38.866 26.2162 35V30.7568" stroke="#6EC895" stroke-width="3" stroke-linecap="round"/>
            <path d="M15.4055 22.4324H40.9189M40.9189 22.4324L36.0541 17.5676M40.9189 22.4324L36.0541 27.7297" stroke="#6EC895" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <div class="container">
        <div class="sidebar-toggle" @click="toggleAll">
          <div class="checkbox">
            <span v-if="allExpanded">-</span>
          </div>
          <span class="toggle-text">Все</span>
        </div>

        <!-- Module 1 -->
        <div class="module">
          <div class="module-header" @click="toggleModule(1)">
            <div class="module-title-wrapper">
              <span class="module-number">1</span>
              <h2 class="module-title">
                модуль <span class="bracket-green">[</span> Переменные <span class="bracket-green">]</span>
              </h2>
            </div>
          </div>

          <transition name="slide">
            <div v-if="expandedModules[1]" class="module-content">
              <div class="lesson" :class="{ completed: lessons[1].completed }">
                <div class="lesson-number-box" :class="{ completed: lessons[1].completed }">
                  <span class="lesson-number">1</span>
                </div>
                <div class="lesson-content">
                  <h3 class="lesson-title">Сложение</h3>
                </div>
              </div>

              <div class="lesson" :class="{ active: true }">
                <div class="lesson-number-box active">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 0L9.18386 5.31614L14.5 7L9.18386 8.68386L7.5 14L5.81614 8.68386L0.5 7L5.81614 5.31614L7.5 0Z" fill="#FF9D42"/>
                  </svg>
                  <span class="lesson-number">2</span>
                </div>
                <div class="lesson-content">
                  <h3 class="lesson-title">Типы</h3>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Module 2 -->
        <div class="module">
          <div class="module-header" @click="toggleModule(2)">
            <div class="module-title-wrapper">
              <span class="module-number">2</span>
              <h2 class="module-title">
                модуль <span class="bracket-green">[</span> Условия <span class="bracket-green">]</span>
              </h2>
            </div>
          </div>

          <transition name="slide">
            <div v-if="expandedModules[2]" class="module-content">
              <div class="lesson">
                <div class="lesson-number-box">
                  <span class="lesson-number">1</span>
                </div>
                <div class="lesson-content">
                  <h3 class="lesson-title">Оператор if</h3>
                </div>
              </div>

              <div class="lesson">
                <div class="lesson-number-box">
                  <span class="lesson-number">2</span>
                </div>
                <div class="lesson-content">
                  <h3 class="lesson-title">Оператор else</h3>
                </div>
              </div>

              <div class="lesson">
                <div class="lesson-number-box">
                  <span class="lesson-number">3</span>
                </div>
                <div class="lesson-content">
                  <h3 class="lesson-title">Оператор elif</h3>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Module 3 -->
        <div class="module">
          <div class="module-header" @click="toggleModule(3)">
            <div class="module-title-wrapper">
              <div class="expand-icon" :class="{ expanded: expandedModules[3] }">+</div>
              <span class="module-number">3</span>
              <h2 class="module-title">
                модуль <span class="bracket-green">[</span> Циклы <span class="bracket-green">]</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CoursePage',
  data() {
    return {
      courseTitle: this.$route.query.title || 'Языки программирования высокого уровня',
      courseTeacher: this.$route.query.teacher || 'Фамилия И.О.',
      courseColor: this.$route.query.color || 'green',
      expandedModules: {
        1: true,
        2: true,
        3: false
      },
      allExpanded: false,
      lessons: {
        1: { completed: true }
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push('/student');
    },
    toggleModule(moduleId) {
      this.expandedModules[moduleId] = !this.expandedModules[moduleId];
    },
    toggleAll() {
      this.allExpanded = !this.allExpanded;
      Object.keys(this.expandedModules).forEach(key => {
        this.expandedModules[key] = this.allExpanded;
      });
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.course-page {
  font-family: Arial, sans-serif;
  background-color: #1E1E1E;
  min-height: 100vh;
  padding: 20px;
  animation: contentFadeIn 0.6s ease-out 0.2s both;
}

@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header Styles */
header {
  margin-bottom: 60px;
}

.header-box {
  margin-top: 35px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.logo {
  width: 135px;
  height: 25px;
  flex-shrink: 0;
}

.course-header-title {
  font-family: "HB";
  font-size: 32px;
  color: white;
  text-align: center;
  flex: 1;
  margin: 0 20px;
}

.bracket-title {
  color: #6EC895;
}

.icons {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.rating-icon {
  width: 30px;
  height: 36px;
}

.rating-text {
  font-family: "NM";
  font-size: 18px;
  color: white;
  margin-right: 20px;
}

.sun {
  width: 42px;
  height: 40px;
}

.exit {
  height: 38.92px;
  width: 40px;
  cursor: pointer;
  transition: all 300ms ease;
}

.exit:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 10px #6EC895);
}

/* Main Content */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Sidebar Toggle */
.sidebar-toggle {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  cursor: pointer;
  width: fit-content;
}

.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.checkbox:hover {
  border-color: #6EC895;
  background-color: rgba(110, 200, 149, 0.1);
}

.toggle-text {
  color: white;
  font-size: 18px;
  font-family: "NM";
}

/* Modules */
.module {
  margin-bottom: 30px;
}

.module-header {
  cursor: pointer;
  margin-bottom: 20px;
}

.module-title-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.expand-icon {
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.expand-icon.expanded {
  transform: rotate(45deg);
}

.module-number {
  font-size: 48px;
  color: white;
  font-weight: bold;
  font-family: "HB";
  min-width: 50px;
}

.module-title {
  font-size: 32px;
  color: white;
  font-weight: normal;
  font-family: "NM";
}

.bracket-green {
  color: #6EC895;
}

/* Module Content */
.module-content {
  margin-left: 90px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  padding-left: 40px;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
  max-height: 1000px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  margin-bottom: 0;
}

/* Lessons */
.lesson {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.lesson-number-box {
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.lesson-number-box.completed {
  background-color: #6EC895;
  border-color: #6EC895;
}

.lesson-number-box.active {
  background-color: #FF9D42;
  border-color: #FF9D42;
  position: relative;
}

.lesson-number-box.active svg {
  position: absolute;
  top: -5px;
  right: -5px;
}

.lesson-number {
  font-size: 24px;
  color: white;
  font-weight: bold;
  font-family: "NM";
}

.lesson-content {
  flex: 1;
}

.lesson-title {
  font-size: 24px;
  color: white;
  font-weight: normal;
  font-family: "NM";
}

.lesson.completed .lesson-title {
  color: #6EC895;
}

.lesson.active .lesson-title {
  color: #FF9D42;
}

/* Responsive */
@media (max-width: 768px) {
  .header-box {
    flex-direction: column;
    gap: 20px;
  }

  .course-header-title {
    font-size: 24px;
    order: 2;
  }

  .icons {
    order: 3;
    width: 100%;
    justify-content: space-around;
  }

  .module-title {
    font-size: 24px;
  }

  .module-number {
    font-size: 36px;
  }

  .module-content {
    margin-left: 40px;
    padding-left: 20px;
  }
}
</style>