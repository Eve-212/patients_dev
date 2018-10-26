<template>
  <div :class="{isExpanded: isExpanded}">
    <div class="card-wrap">
      <div>柯博文｜<span>Obstetrics and gynaecology units</span></div>
      <div>
        <div class="btn" :class="{followed:items.basic.followBtn.clicked}" @click="follow()">
          <i class="fa fa-star"></i>{{ items.basic.followBtn.text }}
        </div>
        <a class="btn" href="mailto:dumbo750212@msn.com"><i class="fa fa-envelope"></i>Email</a>
      </div>
    </div>
    <div class="content-wrap">
      <router-view @unfollow="unfollow"></router-view>
    </div>
    <button @click="getAllData">取得</button>
  </div>
</template>
<script>
import Vue from 'vue'
import APIClient from 'moleculer-openapi-client'
import axios from 'axios'

export default {
  props: ['isExpanded'],

  beforeRouteUpdate(to, from, next) {
    next()
  },
  data() {
    return {
      items: {
        basic: {
          isExpanded: false,
          followBtn: {
            text: 'Follow',
            clicked: false
          }
        }
      }
    }
  },
  methods: {
    follow() {
      // [Follow button] effect
      const { basic } = this.items
      basic.followBtn.clicked = !basic.followBtn.clicked
      if (basic.followBtn.clicked) {
        basic.followBtn.text = 'Followed'
      } else {
        basic.followBtn.text = 'Follow'
      }
    },
    unfollow(list) {
      let unfollow = confirm('Sure you want to unfollow the doctor?')
      if (unfollow) {
        console.log('unfollow doctor success')
      }
    },
    getAllData: function() {
      axios({
        methods: 'get',
        url: 'http://10.65.1.66:3000/OneRecord/schema/raw/commit/10bd41458243f6ddd05d5d6000a37dfc86543d22/sch.note.adm.json'
      }).then(resp => {
        console.log(resp)
      })
      // let wf = new APIClient({
      //   spec_url: 'http://10.66.30.213:4000/api/spec.get',
      //   server_url: 'http://10.65.1.228:3001/api'
      // })

      // wf.loader
      //   .then($spec => {
      //     this.spec = $spec
      //     this.wf = wf
      //     console.log(wf.note)

      //     wf.note.get().then($list => {
      //       console.log($list)
      //     })

      //     wf.pt.get({ no: '00000002' }).then($patient_file => {
      //       console.log($patient_file)
      //     })
      //   })
      //   .catch(error => {
      //     console.log(error.response.data.message)
      //   })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/global.scss';

.card-wrap {
  box-shadow: 0 1px 8px rgba(170, 170, 170, 0.3);
  color: $brown;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: $break-small) {
    flex-direction: column;
    padding: 10px;
  }

  span {
    font-size: 12px;
    line-height: 15px;
    font-weight: 100;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: $break-small) {
      margin-top: 10px;
    }

    .btn {
      width: 90px;
      height: 25px;
      margin: 0 5px;
      border: 1px solid $brown;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
      transition: all 0.3s ease-in-out;
      color: $brown;
      padding: 0;
      opacity: 0.6;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 1;
      }

      i {
        color: $brown;
        font-size: 12px;
        margin-right: 5px;
      }

      &.followed {
        background: $brown;
        color: #fff;
        opacity: 1;

        i {
          color: #fff;
        }
      }
    }
  }
}

.content-wrap {
  padding: 30px 50px;

  @media screen and (max-width: 1000px) {
    padding: 30px;
  }

  @media screen and (max-width: $break-medium) {
    padding: 15px;
  }
}
</style>
