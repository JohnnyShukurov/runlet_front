<template>
  <Header />
  <div class="student-page">
    <!-- Header -->

    
    <!-- Main Content -->
    <main>
      <div class="container">
        <h2 class="your-courses">
          <span class="bracket-title">{</span> 
          Ваши курсы 
          <span class="bracket-title">}</span>
        </h2>
        
        <div class="courses-wrapper">
          <section class="courses-grid">
            <article 
              v-for="course in courses" 
              :key="course.id"
              class="course-card"
              :class="course.color"
              @click="openCourse(course)"
            >
              <h3>{{ course.title }}</h3>
              <p>
                <span class="bracket">[</span> 
                {{ course.teacher }} 
                <span class="bracket">]</span>
              </p>
            </article>
          </section>

          <span class="arrow">&gt;&gt;</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import Header from '../components/Header.vue'

export default {
    components: {
    Header
  },
  name: 'StudentPage',
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'Языки программирования высокого уровня',
          teacher: 'Фамилия И.О.',
          color: 'green'
        },
        {
          id: 2,
          title: 'Информационные системы и технологии',
          teacher: 'Фамилия И.О.',
          color: 'violet'
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
    logout() {
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
}

.icons {
  display: flex;
  align-items: center;
  gap: 60px;
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
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
}

.your-courses {
    font-family:"HB";
    font-size: 64px;
    color: #6ec895;
    text-align: center;
    margin-bottom: 50px;
}

.bracket-title {
  color: #6EC895;
}

.courses-wrapper {
  display: flex;
  align-items: center;
  gap: 40px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  flex: 1;
}

.course-card {
  max-width: 398px;
  height: 476px;
  background-color: #1E1E1E;
  border-radius: 20px;
  padding: 40px 30px;
  border: 3px solid;
  cursor: pointer;
  transition: all 300ms ease;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.course-card.green {
  border-color: #6EC895;
}

.course-card.violet {
  border-color: #AE3CE9;
}

.course-card.orange {
  border-color: #FF9D42;
}

.course-card:hover {
  transform: translateY(-5px);
}

.course-card.green:hover {
  box-shadow: 0 8px 30px rgba(110, 200, 149, 0.5);
}

.course-card.violet:hover {
  box-shadow: 0 8px 30px rgba(174, 60, 233, 0.5);
}

.course-card.orange:hover {
  box-shadow: 0 8px 30px rgba(255, 157, 66, 0.5);
}

.course-card h3 {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.3;
  font-family: "HM";
}

.course-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
}

.bracket {
  color: rgba(255, 255, 255, 0.5);
}

.arrow {
  color: white;
  font-size: 48px;
  font-family:"NR";
  cursor: pointer;
  transition: all 300ms ease;
  user-select: none;
}


.arrow:hover {
  transform: translateX(10px);
  text-shadow: 0 0 20px #6EC895;
}

/* Responsive */
@media (max-width: 1200px) {
  .courses-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .header-box {
    flex-direction: column;
    gap: 20px;
  }

  .your-courses {
    font-size: 36px;
  }

  .courses-wrapper {
    flex-direction: column;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .arrow {
    transform: rotate(90deg);
  }

  .arrow:hover {
    transform: rotate(90deg) translateX(10px);
  }
}
</style>