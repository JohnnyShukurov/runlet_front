<!-- <template>
  <div class="student-page">
    <Header 
      :show-rating="false"
      @theme-click="handleTheme"
      @exit-click="handleExit"
    />
    
    <main class="main-content">
      <div class="container">
        <h2 class="your-courses">
          <span 
            class="bracket-title"
            :style="{ color: hoveredColor }"
          >{</span> 
          Ваши курсы 
          <span 
            class="bracket-title"
            :style="{ color: hoveredColor }"
          >}</span>
        </h2>
        
        <div class="courses-wrapper">
          <section class="courses-grid">
            <Card
              v-for="course in courses" 
              :key="course.id"
              :title="course.title"
              :author="course.teacher"
              :color="course.color"
              @click="openCourse(course)"
              @hover="handleCardHover"
              @leave="handleCardLeave"
            />
          </section>

          <span class="arrow">&gt;&gt;</span>
        </div>
      </div>
    </main>
  </div>
</template> -->
<template>
  <div class="student-page">
    <Header 
      :show-rating="false"
      @theme-click="handleTheme"
      @exit-click="handleExit"
    />
    
    <main class="main-content">
      <div class="container">
        <h2 class="your-courses">
          <span 
            class="bracket-title"
            :style="{ color: hoveredColor }"
          >{</span> 
          Ваши курсы 
          <span 
            class="bracket-title"
            :style="{ color: hoveredColor }"
          >}</span>
        </h2>
        
        <div class="courses-container">
          <section class="courses-grid">
            <Card
              v-for="course in courses" 
              :key="course.id"
              :title="course.title"
              :author="course.teacher"
              :color="course.color"
              @click="openCourse(course)"
              @hover="handleCardHover"
              @leave="handleCardLeave"
            />
          </section>

          <span class="arrow">&gt;&gt;</span>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'

export default {
  components: {
    Header,
    Card
  },
  name: 'StudentPage',
  data() {
    return {
      hoveredColor: '#6ec895',
      courses: [
        {
          id: 1,
          title: 'Языки программирования высокого уровня',
          teacher: 'Фамилия И.О.',
          color: '#6EC895'
        },
        {
          id: 2,
          title: 'Информационные системы и технологии',
          teacher: 'Фамилия И.О.',
          color: '#AE3CE9'
        },
        {
          id: 3,
          title: 'Представление в информационных системах',
          teacher: 'Фамилия И.О.',
          color: 'orange'
        }
      ]
    }
  },
  methods: {
    handleTheme() {
      console.log('Theme clicked');
    },
    handleExit() {
      this.$router.push('/');
    },
    openCourse(course) {
      this.$router.push({
        path: `/course/${course.id}`,
        query: { 
          title: course.title,
          teacher: course.teacher,
          color: course.color
        }
      });
    },
    handleCardHover(color) {
      this.hoveredColor = color;
    },
    handleCardLeave() {
      this.hoveredColor = '#6ec895';
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

.student-page {
  min-height: 100vh;
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  padding: 40px 20px;
  animation: contentFadeIn 0.6s ease-out 0.2s both;
  overflow-y: auto;
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

.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.your-courses {
  font-family: "HB";
  font-size: 64px;
  color: #6ec895;
  text-align: center;
  margin-bottom: 50px;
}

.bracket-title {
  color: #6EC895;
  transition: color 300ms ease;
}

.courses-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
}

.arrow {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 48px;
  font-family: "NR";
  cursor: pointer;
  transition: all 300ms ease;
  user-select: none;
}

.arrow:hover {
  transform: translateY(-50%) translateX(10px);
  text-shadow: 0 0 20px #6EC895;
}

/* Responsive */
@media (max-width: 1200px) {
  .courses-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .your-courses {
    font-size: 36px;
  }

  .courses-container {
    flex-direction: column;
    align-items: center;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .arrow {
    position: static;
    transform: rotate(90deg);
    margin-top: 20px;
  }

  .arrow:hover {
    transform: rotate(90deg) translateX(10px);
  }
}
</style>