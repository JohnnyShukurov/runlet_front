<template>
  <div class="student-list-page">
    <Header 
      :show-rating="false"
      @theme-click="handleTheme"
      @exit-click="handleExit"
    />
    
    <main class="main-content">
      <div class="container">
        <!-- Заголовок -->
        <div class="title-section">
          <h1 class="page-title">
            <span class="bracket" :style="{ color: hoveredColor }">&#123;</span>
            <span class="title-text">Студенты</span>
            <span class="bracket" :style="{ color: hoveredColor }">&#125;</span>
          </h1>
          <button class="menu-btn">
            <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="48" height="7" stroke="white" stroke-width="2" stroke-linejoin="round"/>
              <rect x="16" y="16" width="33" height="7" stroke="white" stroke-width="2" stroke-linejoin="round"/>
              <rect x="31" y="32" width="18" height="7" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Поиск -->
        <div class="search-container">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Поиск студента..."
            class="search-input"
          />
        </div>

        <!-- Список студентов -->
        <div class="students-list">
          <div 
            v-for="student in filteredStudents" 
            :key="student.id"
            class="student-item"
            :class="{ 'active': student.active }"
            @mouseenter="handleStudentHover(student.color)"
            @mouseleave="handleStudentLeave"
          >
            <span 
              v-if="student.active"
              class="active-indicator"
              :style="{ backgroundColor: student.color }"
            ></span>
            <span class="student-name">{{ student.name }}</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'StudentList',
  components: {
    Header
  },
  data() {
    return {
      hoveredColor: '#6ec895',
      searchQuery: '',
      students: [
        { id: 1, name: 'Иванов Иван Иванович', active: true, color: '#6EC895' },
        { id: 2, name: 'Сергеев Сергей Сергеевич', active: false, color: '#6EC895' },
        { id: 3, name: 'Петров Петр Петрович', active: false, color: '#6EC895' },
        { id: 4, name: 'Сидоров Алексей Михайлович', active: false, color: '#6EC895' },
        { id: 5, name: 'Козлов Дмитрий Андреевич', active: false, color: '#6EC895' },
        { id: 6, name: 'Новиков Артем Владимирович', active: false, color: '#6EC895' },
        { id: 7, name: 'Морозов Максим Игоревич', active: false, color: '#6EC895' }
      ]
    }
  },
  computed: {
    filteredStudents() {
      if (!this.searchQuery) {
        return this.students;
      }
      return this.students.filter(student => 
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    handleTheme() {
      console.log('Theme clicked');
    },
    handleExit() {
      this.$router.push('/teacher');
    },
    handleStudentHover(color) {
      this.hoveredColor = color;
    },
    handleStudentLeave() {
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

.student-list-page {
  min-height: 100vh;
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 40px 20px;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Заголовок */
.title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
}

.page-title {
  font-family: "HB";
  font-size: 64px;
  color: white;
  text-align: center;
}

.bracket {
  color: #6EC895;
  transition: color 300ms ease;
}

.title-text {
  margin: 0 20px;
}

.menu-btn {
  position: absolute;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
}

.menu-btn:hover {
  opacity: 0.7;
}

.menu-btn svg {
  transition: all 300ms ease;
}

.menu-btn:hover svg rect {
  stroke: #6EC895;
}

/* Поиск */
.search-container {
  max-width: 800px;
  margin: 0 auto 40px;
}

.search-input {
  width: 100%;
  padding: 15px 25px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-family: "HM";
  font-size: 18px;
  transition: all 300ms ease;
}

.search-input:focus {
  outline: none;
  border-color: #6EC895;
  background-color: rgba(255, 255, 255, 0.08);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

/* Список студентов */
.students-list {
  max-width: 572px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.student-item {
  position: relative;
  width: 572px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 40px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: all 300ms ease;
  margin-bottom: -1px;
}

.student-item:hover {
  opacity: 0.8;
  background-color: rgba(255, 255, 255, 0.03);
}

.active-indicator {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateY(-50%) scale(1.1);
  }
}

.student-name {
  color: white;
  font-family: "HM";
  font-size: 20px;
  letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 48px;
  }

  .title-text {
    margin: 0 10px;
  }

  .student-name {
    font-size: 18px;
  }

  .search-input {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 36px;
  }

  .student-name {
    font-size: 16px;
  }
}
</style>