<template>
  <div class="side-menu" :class="{expanded: isExpanded}">
    <ul style="padding-left: 0">
      <li>
        <router-link :to="{ name: 'ptlists' }">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">My Profile</span>
        </router-link>
      </li>
     <li>
        <router-link :to="{ name: 'edit' }">
          <i class="fa fa-font fa-2x"></i>
          <span class="nav-text">Edit</span>
        </router-link>
      </li>
      <li>
        <a href="#">
                   <i class="fa fa-table fa-2x"></i><span class="nav-text">Tables</span>
                </a>
      </li>
      <li>
        <a href="#">
                    <i class="fa fa-map-marker fa-2x"></i><span class="nav-text">Maps</span>
                </a>
      </li>
      <li>
        <a href="#">
                   <i class="fa fa-info fa-2x"></i><span class="nav-text">Documentation</span>
                </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['isExpanded']
}
</script>
<style lang="scss" scoped>
@import '../assets/global.scss';

.side-menu {
  background: #f8f9fa;
  top: 58px;
  width: 60px;
  overflow: hidden;
  transition: width 0.1s linear;
  font-size: 14px;
  position: fixed;
  height: 100%;
  z-index: 100;
  &:hover,
  &.expanded {
    width: 240px;
    overflow: visible;
    box-shadow: 3px 3px 10px -2px rgba(20%, 20%, 40%, 0.5);
  }
  @media screen and (max-width: $break-medium) {
    top: 53px;
    width: 50px;
  }
  li {
    display: block;
    width: 240px;
    margin: 20px 0;
    &:hover a {
      background-color: #fff;
    }
    a {
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
      color: black;
      text-decoration: none;
      transition: all 0.1s linear;
      i {
        font-size: 14px;
        color: $black;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 36px;
        @media screen and (max-width: $break-medium) {
          width: 50px;
        }
      }
      span {
        display: table-cell;
        vertical-align: middle;
        width: 180px;
      }
    }
  }
}
</style>
