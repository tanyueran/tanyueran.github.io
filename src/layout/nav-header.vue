<template>
  <a-menu class="w-full" :theme="theme" v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="Home" @click="clickHandler('Home')">
      首页
    </a-menu-item>
    <a-menu-item key="About" @click="clickHandler('About')">
      关于
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'navHeaderComp',
  setup () {
    const theme = inject('theme')
    const route = useRoute()
    const router = useRouter()
    const current = ref<string[]>([])
    watchEffect(() => {
      current.value = [route.name as string]
    })
    return {
      current,
      theme,
      clickHandler (key: string) {
        if ((route.name as string) !== key) {
          router.push({
            name: key
          })
        }
      }
    }
  }
})
</script>
