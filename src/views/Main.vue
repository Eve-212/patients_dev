<template>
    <div>
      <div style="position: absolute; z-index: 1;">
        <header-component @isExpanded="toggleExpand" :user="user" :hide="hide"></header-component>
      </div>  
      <sidemenu :isExpanded="isExpanded"></sidemenu>
      <div id="content">
        <router-view :isExpanded="isExpanded"></router-view>
      </div>
      <back-to-top @hide="hideSearch"></back-to-top> 
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component('header-component', require('@/components/Header.vue').default)
Vue.component('sidemenu', require('@/components/SideMenu.vue').default)
Vue.component('back-to-top', require('@/components/BackToTop.vue').default)

export default {
  props: ['user'],
  data() {
    return {
      isExpanded: false,
      hide: false
    }
  },
  methods: {
    toggleExpand(status) {
      this.isExpanded = status
    },
    hideSearch(status) {
      this.hide = status
    }
  }
}
</script>

<style lang="scss">
@import '../assets/global.scss';

#content {
  overflow: auto;
  margin-top: 56px;
  margin-left: 60px;
  @media screen and (max-width: $break-medium) {
    margin-top: 86px;
    margin-left: 50px;
  }
}
</style>
