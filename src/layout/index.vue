<template>
  <a-layout class="flex flex-column h-screen">
    <a-layout-header class="p-0">
      <nav-header-comp/>
    </a-layout-header>
    <a-layout-content class="flex-1 m-4">
      <router-view/>
    </a-layout-content>
  </a-layout>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavHeaderComp from '@/layout/nav-header.vue'

export default defineComponent({
  name: 'LayoutComponent',
  components: { NavHeaderComp },
  setup () {
    return {
    }
  }
})
</script>
