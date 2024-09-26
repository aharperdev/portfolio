<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export interface Post {
  title?: string
  content?: string
  tags?: { text: string; className?: string }[]
  links?: { icon?: string; text: string; url?: string }[]
}
defineProps<Post>()
</script>

<template>
  <div class="bg-dark shadow-lg card mb-2">
    <div class="card-header p-0 d-flex">
      <!-- <div v-for="tag of tags" class="p-2" :class="tag.className">
        {{ tag.text }}
      </div> -->
    </div>
    <div class="card-body">
      <h4 class="card-title text-light">{{ title }}</h4>
      <div v-html="content"></div>
    </div>
    <div class="card-footer d-flex flex-row justify-content-evenly">
      <a v-for="link in links" class="text-light text-hover-secondary" :href="link.url">
        <FontAwesomeIcon v-if="link.icon" :icon="link.icon"></FontAwesomeIcon>
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<style lang="scss">
iframe {
  overflow: hidden;
  margin: 0 auto;
  display: block;
}
</style>
