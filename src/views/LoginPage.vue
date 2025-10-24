<template>
  <div class="login-page">
    <Header />

    <div class="login-wrapper">
      <div class="login-container">
        <h1>
          <span class="bracket-title">{ </span>
          Вход
          <span class="bracket-title"> }</span>
        </h1>
        
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              required 
              placeholder="example@mail.com"
            >
          </div>

          <div class="form-group">
            <label for="password">Пароль</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              required 
              placeholder="••••••••"
            >
          </div>

          <div class="role-selector">
            <label>Выберите роль</label>
            <div class="role-buttons">
              <button 
                type="button" 
                class="role-btn" 
                :class="{ active: selectedRole === 'student' }"
                @click="selectRole('student')"
              >
                Студент
              </button>
              <button 
                type="button" 
                class="role-btn" 
                :class="{ active: selectedRole === 'teacher' }"
                @click="selectRole('teacher')"
              >
                Преподаватель
              </button>
            </div>
          </div>

          <button type="submit" class="submit-btn">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'LoginPage',
  components: { Header },
  data() {
    return {
      email: '',
      password: '',
      selectedRole: 'student'
    }
  },
  computed: {
    accentColor() {
      return this.selectedRole === 'student' ? '#6EC895' : '#AE3CE9'
    }
  },
  methods: {
    selectRole(role) {
      this.selectedRole = role
    },
    handleSubmit() {
      if (this.selectedRole === 'student') {
        this.$router.push('/student')
      } else {
        this.$router.push('/teacher')
      }
    }
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* убираем все ползунки */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.login-page {
  font-family: Arial, sans-serif;
  background-color: #1E1E1E;
  height: 100vh; /* занимает всю высоту окна */
  display: flex;
  flex-direction: column;
}

.login-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  background-color: #1E1E1E;
  padding: 50px;
  border-radius: 30px;
  border: 2px solid v-bind(accentColor);
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  color: v-bind(accentColor);
  margin-bottom: 40px;
  font-size: 42px;
  font-weight: bold;
}

.bracket-title {
  color: v-bind(accentColor);
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 10px;
  color: white;
  font-size: 16px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  border: 2px solid v-bind(accentColor);
  border-radius: 10px;
  background-color: #1E1E1E;
  color: white;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.role-selector {
  margin-bottom: 30px;
}

.role-buttons {
  display: flex;
  gap: 10px;
}

.role-btn {
  flex: 1;
  padding: 12px;
  border: 2px solid v-bind(accentColor);
  background: #1E1E1E;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
}

.role-btn.active {
  background: v-bind(accentColor);
  color: #1E1E1E;
  font-weight: bold;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: v-bind(accentColor);
  color: #1E1E1E;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
</style>
