<template>
  <div class="course-modules-page">
    <Header 
      :show-rating="true"
      @theme-click="handleTheme"
      @exit-click="handleExit"
    />
    
    <main class="main-content">
      <div class="container">
        <!-- Заголовок курса -->
        <div class="course-title-section">
          <h1 class="course-title">
            <span class="bracket">&#123;</span>
            <span class="title-text">{{ courseName }}</span>
            <span class="bracket">&#125;</span>
          </h1>
        </div>

        <!-- Кнопка раскрыть/свернуть все -->
        <div class="expand-all-section">
          <button 
            class="expand-all-btn"
            @click="toggleAllModules"
          >
            <svg v-if="!allExpanded" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="33" height="33" stroke="white" stroke-width="2" stroke-linejoin="round" />
              <path d="M10 18H25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 25V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="33" height="33" stroke="white" stroke-width="2" stroke-linejoin="round" />
              <path d="M10 18H25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>{{ allExpanded ? 'Свернуть все' : 'Развернуть все' }}</span>
          </button>
        </div>

        <!-- Список модулей -->
        <div class="modules-list">
          <div 
            v-for="module in modules" 
            :key="module.id"
            class="module-item"
          >
            <!-- Заголовок модуля -->
            <div 
              class="module-header"
              @click="toggleModule(module.id)"
            >
              <svg 
                v-if="!module.expanded" 
                width="35" 
                height="35" 
                viewBox="0 0 35 35" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                class="module-icon"
              >
                <rect x="1" y="1" width="33" height="33" stroke="white" stroke-width="2" stroke-linejoin="round" />
                <path d="M10 18H25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 25V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg 
                v-else
                width="35" 
                height="35" 
                viewBox="0 0 35 35" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                class="module-icon"
              >
                <rect x="1" y="1" width="33" height="33" stroke="white" stroke-width="2" stroke-linejoin="round" />
                <path d="M10 18H25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h2 class="module-title">
                {{ module.number }} модуль 
                <span class="module-subtitle">[ {{ module.name }} ]</span>
              </h2>
            </div>

            <!-- Содержимое модуля -->
            <transition name="expand">
              <div v-if="module.expanded" class="module-content">
                <div 
                  v-for="lesson in module.lessons" 
                  :key="lesson.id"
                  class="lesson-item"
                  :class="{ 'active': lesson.active }"
                >
                  <svg 
                    v-if="lesson.active"
                    width="44" 
                    height="44" 
                    viewBox="0 0 44 44" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    class="lesson-icon"
                  >
                    <path d="M2 42V2H26.1509L42 21.7297L26.1509 42H2Z" stroke="#D16E3D" stroke-width="4" stroke-linejoin="round" />
                  </svg>
                  <span class="lesson-number">{{ lesson.number }}</span>
                  <span 
                    class="lesson-name"
                    :style="{ color: lesson.active ? '#d16e3d' : '#6ec895' }"
                  >
                    {{ lesson.name }}
                  </span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Header from '../components/Header.vue'
export default {
    components: {
    Header
  },
  name: 'CourseModules',
  props: {
    courseName: {
      type: String,
      default: 'Языки программирования высокого уровня'
    }
  },
  setup() {
    const modules = ref([
      {
        id: 1,
        number: 1,
        name: 'Переменные',
        expanded: false,
        lessons: [
          { id: 1, number: 1, name: 'Сложение', active: false },
          { id: 2, number: 2, name: 'Типы', active: true }
        ]
      },
      {
        id: 2,
        number: 2,
        name: 'Условия',
        expanded: false,
        lessons: [
          { id: 1, number: 1, name: 'Оператор if', active: false },
          { id: 2, number: 2, name: 'Оператор else', active: false },
          { id: 3, number: 3, name: 'Оператор elif', active: false }
        ]
      },
      {
        id: 3,
        number: 3,
        name: 'Циклы',
        expanded: false,
        lessons: [
          { id: 1, number: 1, name: 'Цикл for', active: false },
          { id: 2, number: 2, name: 'Цикл while', active: false }
        ]
      },
      {
        id: 4,
        number: 4,
        name: 'Функции',
        expanded: false,
        lessons: [
          { id: 1, number: 1, name: 'Определение функций', active: false },
          { id: 2, number: 2, name: 'Параметры и аргументы', active: false },
          { id: 3, number: 3, name: 'Возвращаемые значения', active: false }
        ]
      }
    ]);

    const allExpanded = computed(() => {
      return modules.value.every(module => module.expanded);
    });

    const toggleModule = (moduleId) => {
      const module = modules.value.find(m => m.id === moduleId);
      if (module) {
        module.expanded = !module.expanded;
      }
    };

    const toggleAllModules = () => {
      const shouldExpand = !allExpanded.value;
      modules.value.forEach(module => {
        module.expanded = shouldExpand;
      });
    };

    const handleTheme = () => {
      console.log('Theme clicked');
    };

    const handleExit = () => {
      // Navigate back or to teacher page
      console.log('Exit clicked');
    };

    return {
      modules,
      allExpanded,
      toggleModule,
      toggleAllModules,
      handleTheme,
      handleExit
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.course-modules-page {
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

/* Заголовок курса */
.course-title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.course-title {
  font-family: "HB";
  font-size: 32px;
  color: white;
  text-align: center;
}

.bracket {
  color: #6EC895;
}

.title-text {
  margin: 0 15px;
}

/* Кнопка раскрыть все */
.expand-all-section {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
  padding-left: 20px;
}

.expand-all-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-family: "HM";
  font-size: 18px;
  transition: all 300ms ease;
  padding: 5px;
}

.expand-all-btn:hover {
  opacity: 0.7;
}

.expand-all-btn:hover svg rect,
.expand-all-btn:hover svg path {
  stroke: #6EC895;
}

/* Модули */
.modules-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.module-item {
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  overflow: hidden;
}

.module-header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 25px;
  cursor: pointer;
  transition: all 300ms ease;
}

.module-header:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.module-header:hover .module-icon rect,
.module-header:hover .module-icon path {
  stroke: #6EC895;
}

.module-icon {
  flex-shrink: 0;
  transition: all 300ms ease;
}

.module-title {
  font-family: "HM";
  font-size: 24px;
  color: white;
  font-weight: normal;
}

.module-subtitle {
  color: #6EC895;
  margin-left: 10px;
}

/* Содержимое модуля */
.module-content {
  padding: 0 25px 20px 80px;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms ease;
}

.lesson-item:last-child {
  border-bottom: none;
}

.lesson-item:hover {
  background-color: rgba(255, 255, 255, 0.02);
  padding-left: 10px;
  cursor: pointer;
}

.lesson-icon {
  flex-shrink: 0;
  margin-right: -10px;
}

.lesson-number {
  font-family: "HM";
  font-size: 20px;
  color: white;
  min-width: 30px;
}

.lesson-name {
  font-family: "HM";
  font-size: 20px;
  transition: all 300ms ease;
}

/* Анимация раскрытия */
.expand-enter-active,
.expand-leave-active {
  transition: all 400ms ease;
  max-height: 1000px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .course-title {
    font-size: 24px;
  }

  .module-title {
    font-size: 20px;
  }

  .lesson-name {
    font-size: 18px;
  }

  .module-content {
    padding-left: 60px;
  }
}

@media (max-width: 480px) {
  .course-title {
    font-size: 20px;
  }

  .module-title {
    font-size: 18px;
  }

  .lesson-name {
    font-size: 16px;
  }

  .module-header {
    gap: 15px;
    padding: 15px 20px;
  }

  .module-content {
    padding-left: 50px;
  }
}
</style>