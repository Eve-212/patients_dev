<template>
    <nav class="navbar fixed-top bg-light">
      <div class="hamburger" v-on:click="toggleExpand()"><i class="fa fa-bars"></i></div>
      <router-link :to="{name: 'ptlists'}" class="navbar-brand mr-auto" href="#">
        <img class="logo-sm mx-1" src="../assets/logo-sm.png">病摘
      </router-link>
      <form class="form-inline search-wrap" :class="{hide:hide}">
        <input type="text" class="form-control" placeholder="病床號/ 病歷號/ 身分證/ 批號">
        <div class="input-group-prepend">
          <span class="input-group-text search"><i class="fa fa-search"></i></span>
        </div>
      </form>
      <div class="actions">
        <div class="mx-2 ml-sm-4 mr-sm-2">Hi, {{ user }}</div>
        <router-link class="badge mx-1" :to="{name: 'ptlists'}">
          notes<span class="mx-1 badge badge-danger text-white">9</span>
          <span class="sr-only">note lists</span>
        </router-link>
        <div class="mx-1 logout" v-on:click="logout()">
          <i class="fa fa-sign-out-alt"></i><span class="ml-sm-1">Logout</span>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  props: ['user', 'hide'],
  data() {
    return {
      isExpanded: false,
      isDropdown: false
    }
  },
  methods: {
    toggleExpand() {
      //Side Menu Toggle
      this.isExpanded = !this.isExpanded
      this.$emit('isExpanded', this.isExpanded)
    },
    dropdown() {
      this.isDropdown = !this.isDropdown
    },
    logout() {
      //Logout
      let logout = confirm('Sure you want to log out?')
      if (logout == true) {
        this.$emit('authenticated', false)
        this.$router.replace({ name: 'login' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/global.scss';

nav {
  background: #f8f9fa;
  padding: 8px 10px;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.08);
  .hamburger {
    border-radius: 50%;
    margin: 0 11px;
    @media screen and (max-width: $break-medium) {
      margin: 0 10px 0 6px;
    }
    i {
      padding-top: 5px;
      font-size: 20px;
      color: dimgrey;
    }
  }
  .navbar-brand {
    display: flex;
    align-items: center;
    &:hover {
      color: inherit;
    }
    img {
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: $break-medium) {
      font-size: 16px;
    }
  }
  .search-wrap {
    display: flex;
    &.hide {
      display: none;
    }
    @media screen and (max-width: $break-medium) {
      display: flex;
      position: absolute;
      top: 53px;
      right: 38px;
      span {
        position: absolute;
        right: -38px;
        top: 0;
      }
    }
    .search {
      display: flex;
      justify-content: center;
      padding: 0;
      i {
        width: 36px;
        line-height: 36px;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    .badge {
      font-weight: normal;
      &:hover {
        text-decoration: none;
        color: inherit;
      }
    }
    .logout {
      span {
        cursor: pointer;
      }
      @media screen and (max-width: $break-medium) {
        span {
          display: none;
        }
      }
    }
  }
}
</style>
