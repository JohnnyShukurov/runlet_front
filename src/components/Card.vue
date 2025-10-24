<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#6EC895'
  }
})

const emit = defineEmits(['hover', 'leave'])

const handleMouseEnter = () => {
  emit('hover', props.color)
}

const handleMouseLeave = () => {
  emit('leave')
}
</script>

<template>
  <article 
    class="course-card"
    :style="{ borderColor: color, 
              color: color,
              '--cardColor': color
       }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <h3>{{ title }}</h3>
    <p>
      <span class="bracket">[</span> 
      {{ author }} 
      <span class="bracket">]</span>
    </p>
  </article>
</template>

<style scoped>
.course-card {
  max-width: 398px;
  height: 476px;
  background-color: #1E1E1E;
  border-radius: 41px;
  padding: 40px 30px;
  border: 3px solid;
  cursor: pointer;
  transition: all 300ms ease;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.course-card:hover {
  box-shadow: 0 4px 43px 1px currentColor;
}


.course-card h3 {
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 1.3;
  font-family: "HB";
}

.course-card p {
  color: white;
  font-size: 16px;
  font-family: "HM";
}

.bracket {
  color: var(--cardColor);
  
}

</style>