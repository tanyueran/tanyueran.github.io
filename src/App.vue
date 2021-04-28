<template>
  <a-config-provider>
    <layout/>
    <div class="fixed top-4 right-4">
      <a-switch v-model:checked="isDark" checked-children="暗" un-checked-children="亮" @change="switchHandler">
      </a-switch>
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import Layout from '@/layout/index.vue'
import { handleSkin } from '@/utils/switchTheme'

import { computed, defineComponent, provide, ref } from 'vue'

export default defineComponent({
  name: 'APP',
  components: {
    Layout
  },
  setup () {
    const isDark = ref(false)
    const switchHandler = (v:boolean) => {
      handleSkin(!v)
    }
    const theme = computed(() => {
      return isDark.value ? 'dark' : 'light'
    })
    provide('theme', theme)
    return {
      switchHandler,
      isDark
    }
  }
})
</script>
