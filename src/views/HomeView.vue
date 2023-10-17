<template>
  <div class="home">
    <AppNavbar/>
    <AppImage/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from '@/components/AppNavbar.vue'
import AppImage from '@/components/AppImage.vue'

export default {
  name: 'HomeView',
  components: {
    AppNavbar,
    AppImage
  }
}
</script>
