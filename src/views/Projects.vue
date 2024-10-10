<script setup lang="ts">
import PostComponent, { type Post } from '@/components/Post.vue'
import { ref, type Ref } from 'vue'
// import { Projects } from '@/assets/posts'

const projects: Ref<Post[]> = ref([])
fetch('http://localhost:8000/api/posts/')
  .then((res) => res.json())
  .then((data) => {
    projects.value = data
  })
</script>

<template>
  <div class="projects container-fluid pt-4">
    <div class="row justify-content-center">
      <div v-for="project of projects" class="col-lg-12">
        <PostComponent :title="project.title" :content="project.content" :tags="project.tags">
        </PostComponent>
      </div>
    </div>
  </div>
</template>
