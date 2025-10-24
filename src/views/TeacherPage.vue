<template>
  <div class="teacher-page">
    <Header 
      :show-rating="false"
      @theme-click="handleTheme"
      @exit-click="handleExit"
    />
    
    <main class="main-content">
      <div class="container">
        <!-- Заголовки -->
        <div class="titles-container">
          <h2 class="section-title">
            <span 
              class="bracket-title"
              :style="{ color: hoveredColor }"
            >{</span> 
            Группы 
            <span 
              class="bracket-title"
              :style="{ color: hoveredColor }"
            >}</span>
          </h2>

          <h2 class="section-title">
            <span 
              class="bracket-title"
              :style="{ color: hoveredColor }"
            >{</span> 
            Курсы 
            <span 
              class="bracket-title"
              :style="{ color: hoveredColor }"
            >}</span>
          </h2>
        </div>

        <!-- Контент -->
        <div class="content-wrapper">
          <!-- Секция Группы -->
          <div class="groups-section">
            <div 
              v-for="courseGroup in groupedByCourse" 
              :key="courseGroup.course"
              class="course-group"
            >
              <div 
                class="course-header"
                @click="toggleCourse(courseGroup.course)"
                @mouseenter="handleGroupHover(courseGroup.color)"
                @mouseleave="handleGroupLeave"
              >
                <span 
                  class="course-bracket"
                  :style="{ color: courseGroup.color }"
                >[</span>
                <span class="course-name">{{ courseGroup.course }}</span>
                <span 
                  class="course-bracket"
                  :style="{ color: courseGroup.color }"
                >]</span>
                <span 
                  class="course-arrow"
                  :class="{ 'expanded': expandedCourses.includes(courseGroup.course) }"
                >▼</span>
              </div>

              <transition name="dropdown">
                <div 
                  v-if="expandedCourses.includes(courseGroup.course)"
                  class="groups-list"
                >
                  <div 
                    v-for="group in courseGroup.groups" 
                    :key="group.id"
                    class="group-item"
                    :class="{ 'active': selectedGroup === group.id }"
                    @click.stop="selectGroup(group.id)"
                    @mouseenter="handleGroupHover(group.color)"
                    @mouseleave="handleGroupLeave"
                  >
                    <span 
                      v-if="group.notification"
                      class="notification"
                    ></span>
                    <span class="group-code">{{ group.code }}</span>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <!-- Стрелка -->
          <div class="arrow-container">
            <span class="arrow" @click="handleGroupsArrow">&gt;&gt;</span>
          </div>

          <!-- Секция Курсы -->
          <div class="courses-section">
            <div class="courses-grid">
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
            </div>
          </div>
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
  name: 'TeacherPage',
  data() {
    return {
      hoveredColor: '#6ec895',
      selectedGroup: null,
      expandedCourses: [],
      groups: [
        { id: 1, code: '052270', color: '#AE3CE9', course: '4 курс', notification: true },
        { id: 2, code: '052277', color: '#6EC895', course: '4 курс', notification: false },
        { id: 3, code: '052370', color: '#6EC895', course: '3 курс', notification: false },
        { id: 4, code: '052377', color: '#4A9EFF', course: '3 курс', notification: true },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },
        { id: 5, code: '052404', color: 'orange', course: '2 курс', notification: false },

      ],
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
        }
      ]
    }
  },
  computed: {
    groupedByCourse() {
      const grouped = {};
      
      this.groups.forEach(group => {
        if (!grouped[group.course]) {
          grouped[group.course] = {
            course: group.course,
            groups: [],
            color: group.color
          };
        }
        grouped[group.course].groups.push(group);
      });

      // Сортировка по курсам (4, 3, 2)
      return Object.values(grouped).sort((a, b) => {
        const numA = parseInt(a.course);
        const numB = parseInt(b.course);
        return numB - numA;
      });
    }
  },
  methods: {
    handleTheme() {
      console.log('Theme clicked');
    },
    handleExit() {
      this.$router.push('/');
    },
    toggleCourse(course) {
      const index = this.expandedCourses.indexOf(course);
      if (index > -1) {
        this.expandedCourses.splice(index, 1);
      } else {
        this.expandedCourses.push(course);
      }
    },
    selectGroup(groupId) {
      this.selectedGroup = groupId;
      
      // Находим выбранную группу
      const selectedGroupData = this.groups.find(g => g.id === groupId);
      
      // Переходим на страницу со списком студентов
      this.$router.push({
        path: '/studentslist',
        query: { 
          groupId: groupId,
          groupCode: selectedGroupData.code,
          course: selectedGroupData.course,
          color: selectedGroupData.color
        }
      })
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
    handleGroupHover(color) {
      this.hoveredColor = color;
    },
    handleGroupLeave() {
      this.hoveredColor = '#6ec895';
    },
    handleCardHover(color) {
      this.hoveredColor = color;
    },
    handleCardLeave() {
      this.hoveredColor = '#6ec895';
    },
    handleGroupsArrow() {
      console.log('Groups arrow clicked');
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

.teacher-page {
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
  display: flex;
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

/* Заголовки */
.titles-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  gap: 40px;
}

.section-title {
  font-family: "HB";
  font-size: 64px;
  color: white;
  flex: 1;
}

.section-title:first-child {
  text-align: left;
  padding-left: 20px;
}

.section-title:last-child {
  text-align: right;
  padding-right: 20px;
}

.bracket-title {
  color: #6EC895;
  transition: color 300ms ease;
}

/* Контент - 3 контейнера */
.content-wrapper {
  display: grid;
  grid-template-columns: minmax(300px, 400px) auto minmax(600px, 1fr);
  gap: 40px;
  align-items: center;
}

/* Секция Группы */
.groups-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.course-group {
  display: flex;
  flex-direction: column;
}

.course-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  cursor: pointer;
  transition: all 300ms ease;
}

.course-header:hover .course-name {
  opacity: 0.8;
}

.course-bracket {
  font-family: "HB";
  font-size: 24px;
  transition: color 300ms ease;
}

.course-name {
  color: white;
  font-family: "HB";
  font-size: 20px;
  flex: 1;
}

.course-arrow {
  color: white;
  font-size: 14px;
  transition: transform 300ms ease;
}

.course-arrow.expanded {
  transform: rotate(180deg);
}

/* Выпадающий список групп */
.groups-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 10px;
}

.group-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0 15px 30px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: all 300ms ease;
  margin-bottom: -1px; /* Убираем двойную границу между элементами */
}

.group-item:hover {
  opacity: 0.8;
}

.group-code {
  color: white;
  font-family: "HM";
  font-size: 18px;
  letter-spacing: 0.5px;
}

.notification {
  position: absolute;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #FF4444;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

/* Dropdown анимация */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 300ms ease;
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  max-height: 0;
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  max-height: 500px;
}

/* Контейнер со стрелкой */
.arrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  color: white;
  font-size: 48px;
  font-family: "NR";
  cursor: pointer;
  transition: all 300ms ease;
  user-select: none;
}

.arrow:hover {
  transform: translateX(10px);
  text-shadow: 0 0 20px #6EC895;
}

/* Секция Курсы */
.courses-section {
  display: flex;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
}

/* Responsive */
@media (max-width: 1200px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .arrow-container {
    order: 2;
  }

  .courses-section {
    order: 3;
  }

  .section-title {
    font-size: 48px;
  }

  .courses-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .arrow {
    transform: rotate(90deg);
  }

  .arrow:hover {
    transform: rotate(90deg) translateX(10px);
  }
}

@media (max-width: 768px) {
  .titles-container {
    flex-direction: column;
    gap: 20px;
  }

  .section-title {
    font-size: 36px;
    text-align: center !important;
    padding: 0 !important;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .course-name {
    font-size: 18px;
  }

  .group-code {
    font-size: 16px;
  }
}
</style>