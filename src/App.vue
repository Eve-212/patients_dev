<template>
    <div id="app">
        <router-view @authenticated="setAuthenticated"></router-view>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'App',
  data() {
    return {
      authenticated: false
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status
    }
  }
}
</script>
