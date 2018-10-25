<template>
  <header>
    <div class="left">
      <div class="fa fa-bars hamburger" v-on:click="toggleExpand()"></div>
      <a href="#"><img class="logo-b" src="../assets/logo.png"></a>
    </div>
    <div class="center">
      <input type="text" placeholder="Search">
      <button class="btn btn-block" type="button">Search</button>
    </div>
    <div class="right">
      <i class="fa fa-search"></i>
      <div class="logout" v-on:click="logout()" replace>
        <i class="fa fa-sign-out-alt"></i>
        <span>Logout</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpand() {
      //Side Menu Toggle
      this.isExpanded = !this.isExpanded
      this.$emit('isExpanded', this.isExpanded)
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

header {
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: relative;
  padding: 8px 10px;
  border-bottom: 1px solid #dadce0;

  .left {
    display: flex;
    align-items: center;

    .hamburger {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 12px;
      cursor: pointer;
      height: 45px;
      width: 45px;
      background: #ededed;
    }

    .logo-b {
      margin-left: 20px;
      height: 41px;
      width: auto;

      @media screen and (max-width: $break-medium) {
        display: none;
      }
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: left;
    flex: 3;
    margin: 0 15px;

    @media screen and (max-width: $break-medium) {
      justify-content: center;
    }

    input {
      padding: 1.2rem 1rem 1.2rem 3.2rem;
      height: 40px;
      font-size: 0.9rem;
      color: #4a4a4a;
      border: none;
      border-radius: 0;
      position: relative;
      right: 0;
      letter-spacing: 0.05rem;
      background: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png)
        #ececec;
      background-repeat: no-repeat;
      background-position: 1rem 50%;
      background-size: 2rem;
      outline: 0;
      transition: background 0.3s ease-out, opacity 0.5s ease-out;
      width: 50%;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      @media screen and (max-width: $break-medium) {
        width: 70%;
      }

      @media screen and (max-width: $break-small) {
        width: 70%;
      }
    }

    button {
      height: 40px;
      width: 120px;
      color: #fff;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      cursor: pointer;
      outline: 0;
      transition: all 0.4s ease-out;
      border-radius: 0;
      background: $blue;

      @media screen and (max-width: $break-small) {
        width: 70px;
        font-size: 12px;
        letter-spacing: 1px;
        padding: 8px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .fa-search {
      display: none;
    }

    .logout {
      cursor: pointer;

      i {
        margin-right: 5px;
      }

      span {
        @media screen and (max-width: $break-medium) {
          display: none;
        }
      }
    }
  }
}
</style>
