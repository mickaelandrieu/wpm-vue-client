<template>
  <div id="homepage">
    <h1>Home Page</h1>
  </div>
</template>

<script>
import appAlbumItem from '@/components/Album/AlbumItem'
import appAlbumThumbnail from '@/components/Album/AlbumThumbnail'

export default {
  name: 'home',
  data () {
    return {
      albums: []
    }
  },
  components: { appAlbumItem, appAlbumThumbnail }
}
</script>

<style scoped>
</style>
