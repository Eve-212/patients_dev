<template>
  <div class="side-menu" :class="{expanded: isExpanded}">
    <ul>
      <li>
        <router-link :to="{ name: 'main' }">
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
  props: ['isExpanded'],
}

</script>
<style lang="scss" scoped>
@import '../assets/global.scss';

.side-menu {
  z-index: 1;
  background: #ededed;
  position: absolute;
  top: 62px;
  bottom: 0;
  height: 100%;
  left: 0;
  width: 60px;
  overflow: hidden;
  transition: width .1s linear;
  font-size: 14px;

  &:hover,
  .side-menu.expanded {
    width: 250px;
    overflow: visible;
    box-shadow: 3px 3px 10px -2px rgba(20%, 20%, 40%, 0.5);
  }

  @media screen and (max-width: $break-small) {
    width: 50px;
  }

  li {
    display: block;
    width: 245px;
    margin: 20px 0;

    a {
      position: relative;
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
      color: black;
      text-decoration: none;
      transition: all .1s linear;

      span {
        position: relative;
        display: table-cell;
        vertical-align: middle;
        width: 190px;
      }
    }

    &:hover a {
      background-color: #fff;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }
  }

  .fa {
    font-size: 14px;
    color: $black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 36px;

    @media screen and (max-width: $break-small) {
      width: 50px;
    }
  }

  &.expanded {
    width: 250px;
    overflow: visible;
    box-shadow: 3px 3px 10px -2px rgba(20%, 20%, 40%, 0.5);
  }

  @media screen and (min-width: $break-medium) {
    .expanded~div {
      margin-left: 250px;
    }
  }
}

</style>
