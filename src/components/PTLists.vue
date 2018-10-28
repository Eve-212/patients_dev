<template>
  <div class="mt-5" :class="{isExpanded: isExpanded}">
    <div class="selectBtn_wrap mx-sm-5 mx-2 mb-5 d-flex align-items-center">
      <span class="h5 my-0" >Sort By：</span>
      <div class="selectBtn">
        <select @change="switchType()" v-model="sortType">
          <option value="completion">Completion</option>
          <option value="doctors">Doctors</option>
          <option value="floors">Floors</option>
        </select>
      </div>
    </div>
    <card-component :data="lists" :sortType="sortType"></card-component>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('card-component', require('./CardComponent.vue').default)
export default {
  props: ['isExpanded'],
  data() {
    return {
      sortType: 'completion',
      componentName: 'OrderByCompleted',
      showMenu: false,
      lists: {},
      pt: [
        {
          pt_id: 'K221111111',
          pt_name: '黃一番',
          age: 50,
          gender: 'female',
          bed_no: '10012',
          chr_no: '00000001',
          doc_id: 107900,
          doc_name: '張四番',
          illness: 'Acute myocardial infraction',
          completed: true
        },
        {
          pt_id: 'K221111112',
          pt_name: '黃二番',
          age: 60,
          gender: 'male',
          bed_no: '08052',
          chr_no: '00000002',
          doc_id: 106900,
          doc_name: '張二番',
          illness: 'Attention Deficit Hyperactivity Disorder',
          completed: false
        },
        {
          pt_id: 'K221111111',
          pt_name: '黃三番',
          age: 5,
          gender: 'female',
          bed_no: '09012',
          chr_no: '00000003',
          doc_id: 107912,
          doc_name: '張五番',
          illness: 'Acute myocardial infraction',
          completed: false
        },
        {
          pt_id: 'K221111111',
          pt_name: '黃四番',
          age: 20,
          gender: 'female',
          bed_no: '09032',
          chr_no: '00000004',
          doc_id: 107900,
          doc_name: '張四番',
          illness: 'Flu',
          completed: true
        },
        {
          pt_id: 'K221111111',
          pt_name: '黃五番',
          age: 40,
          gender: 'male',
          bed_no: '08042',
          chr_no: '00000005',
          doc_id: 107912,
          doc_name: '張五番',
          illness: 'Broken bones',
          completed: false
        }
      ]
    }
  },
  beforeMount() {
    this.switchType()
  },
  methods: {
    switchType() {
      //return key for sorting data
      let sortType = ''
      switch (this.sortType) {
        case 'completion':
          sortType = 'completed'
          break
        case 'doctors':
          sortType = 'doc_name'
          break
        case 'floors':
          sortType = 'bed_no'
          break
      }

      if (sortType == 'completed') {
        // sort data by if it's completed first
        let sortByProgress = this.pt.sort(function(a, b) {
          if (a.completed !== b.completed) {
            return a.completed ? 1 : -1
          } else {
            return 0
          }
        })
        this.pt = sortByProgress
      }

      let sortedData = {}
      this.pt.forEach(function(v, k) {
        if (sortType == 'bed_no') {
          sortedData[Number(v[sortType].slice(0, 2))] == undefined &&
            (sortedData[Number(v[sortType].slice(0, 2))] = [])
          sortedData[Number(v[sortType].slice(0, 2))].push(v)
        } else if (sortType == 'completed') {
          let status = v[sortType] ? 'completed' : 'incompleted'
          sortedData[status] == undefined && (sortedData[status] = [])
          sortedData[status].push(v)
        } else {
          sortedData[v[sortType]] == undefined && (sortedData[v[sortType]] = [])
          sortedData[v[sortType]].push(v)
        }
      })
      this.lists = sortedData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';
.selectBtn_wrap {
  span {
    @media screen and (max-width: $break-small) {
      font-size: px-to-vw(25, 450);
    }
  }
  .selectBtn {
    position: relative;
    display: block;
    width: 10rem;
    height: 2.2em;
    line-height: 2.2;
    overflow: hidden;
    border-radius: 0.25em;
    @media screen and (max-width: $break-small) {
      height: px-to-vw(40, 450);
      line-height: px-to-vw(40, 450);
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0;
      background: #6c757d;
      background-image: none;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0 0 0 0.5em;
      color: #fff;
      cursor: pointer;
    }
    &::after {
      content: '\25BC';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0 1em;
      background: #6c757d;
      pointer-events: none;
      -webkit-transition: 0.25s all ease;
      -o-transition: 0.25s all ease;
      transition: 0.25s all ease;
      color: #fff;
    }
  }
}
</style>