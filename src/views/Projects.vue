<script setup lang="ts">
import Post from '@/components/Post.vue'
import { Projects } from '@/assets/posts'
</script>

<template>
  <div class="projects container-fluid mt-2">
    <div class="row justify-content-center">
      <div v-for="project of Projects" class="col-lg-12">
        <Post
          :title="project.title"
          :content="project.content"
          :tags="project.tags"
          :links="project.links"
        >
        </Post>
      </div>
    </div>
  </div>
</template>
