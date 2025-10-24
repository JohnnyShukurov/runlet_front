import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import StudentPage from '../views/StudentPage.vue'
import TeacherPage from '../views/TeacherPage.vue'
import CoursePage from '../views/СoursePage.vue'
import StudentList from '../views/StudentList.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    meta: { title: 'Вход - RUNLET' }
  },
  {
    path: '/student',
    name: 'Student',
    component: StudentPage,
    meta: { title: 'Студент - RUNLET' }
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: TeacherPage,
    meta: { title: 'Преподаватель - RUNLET' }
  },
  {
    path: '/course/:id',
    name: 'CoursePage',
    component: CoursePage,
    meta: { title: 'Курс - RUNLET' }
  },
  {
    path: '/studentslist',
    name: 'StudentList',
    component: StudentList,
    meta: { title: 'Список студентов - RUNLET' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ⚠️ ЭТО ДОЛЖНО БЫТЬ ПОСЛЕ createRouter, НО ДО export
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'RUNLET'
  next()
})

export default router