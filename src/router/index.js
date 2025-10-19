import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import StudentPage from '../views/StudentPage.vue'
import TeacherPage from '../views/TeacherPage.vue'
import CoursePage from '../views/СoursePage.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/student',
    name: 'Student',
    component: StudentPage
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: TeacherPage
  },
  {
    path: '/course/:id',
    name: 'CoursePage',
    component: CoursePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router