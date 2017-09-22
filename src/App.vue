<template>
  <div id="app">
    <div class="container-fluid">
      <section class="row">
        <app-header></app-header>
      </section>
      <section class="row">
        <router-view></router-view>
      </section>
      <section class="row">
        <app-footer></app-footer>
      </section>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/ui/Header'
import appFooter from '@/components/ui/Footer'

export default {
  name: 'app',
  components: { appHeader, appFooter }
}
</script>

<style>
#app .container-fluid {
  color: #fff;
}
</style>
