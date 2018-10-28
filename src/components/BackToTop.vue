<template>
  <transition name="fade">
    <div class="btn-to-top" :style="`bottom:${this.bottom};right:${this.right};`" v-show="visible" @click="backToTop">
      <slot><i class="fas fa-chevron-up"></i></slot>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Back to Top'
    },
    visibleoffset: {
      type: [String, Number],
      default: 200
    },
    right: {
      type: String,
      default: '10px'
    },
    bottom: {
      type: String,
      default: '-10px'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    catchScroll() {
      this.visible = window.pageYOffset > parseInt(this.visibleoffset)
      this.$emit('hide', this.visible)
    },

    backToTop() {
      window.smoothscroll()
    }
  }
}
</script>
<style lang="scss">
@import '../assets/global.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.btn-to-top {
  position: fixed;
  z-index: 1000;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 22px;
  line-height: 22px;
  background: $blue;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    color: #fff;
  }
}
</style>
