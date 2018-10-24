<template>
  <div class="wrap">
    <div class="inner-wrap">
      <div class="tabs">
        <div v-for="(n, index) in renderTab.category">
          <router-link class="tab" :class="{'router-link-active': $route.fullPath ==='/main/' && n == 'incompeleted'}" :to="{ name: 'dataTable' , params:{type:n} }" @click.native="getDatas(n)">
            {{ n | tabTitle }}
            <span class="badge">{{ items.badgeCount[index] }}</span>
          </router-link>
        </div>
      </div>
      <div class="table-container">
        <table class="display responsive-table">
          <thead>
            <tr>
              <th v-for="tableTitle in items.showData.tableTitle">
                {{ tableTitle }}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, index) in items.showData.tableContent.slice(pageStart, pageStart + items.countOfPage)">
              <td>{{ (items.currPage-1) * items.countOfPage + index + 1 }}</td>
              <td>{{ list.id }}</td>
              <td>{{ list.name }}</td>
              <td v-if="list.date">{{ list.date }}</td>
              <td v-if="list.department">{{ list.department }}</td>
              <td class="actions">
                <i v-if="!list.department" class="fa fa-eye"></i>
                <i v-if="!list.department" class="fa fa-pen"></i>
                <i class="fa fa-star" v-if="list.department" @click.prevent="unfollow(list)"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <timePicker v-if="this.$route.params.type == 'compeleted'"></timePicker>
      </div>
    </div>
    <ul class="paginate">
      <li class="prev" v-bind:class="{'disabled': (items.currPage === 1)}" @click.prevent="setPage(items.currPage-1)" @><a href="#">Prev</a></li>
      <li v-for="n in items.totalPage" v-bind:class="{'active': (items.currPage === (n))}" @click.prevent="setPage(n)"><a href="#">{{n}}</a></li>
      <li class="next" v-bind:class="{'disabled': (items.currPage === items.totalPage)}" @click.prevent="setPage(items.currPage+1)"><a href="#">Next</a></li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('timePicker', require('@/components/TimePicker.vue').default)

export default {
  data() {
    return {
      items: {
        countOfPage: 5,
        currPage: 1,
        totalPage: null,
        badgeCount: [],
        showData: {
          tableTitle: [],
          tableContent: []
        },
      },
      lists: {
        incompeleted: {
          tableTitle: ['Order', 'Id', 'Name', 'Hospitalization Date'],
          tableContent: [{
              id: 12,
              name: 'Jessica',
              date: '2018-10-22',
              compeleted: false
            },
            {
              id: 13,
              name: 'Joan',
              date: '2018-10-01',
              compeleted: false
            },
            {
              id: 14,
              name: 'Debby',
              date: '2018-09-22',
              compeleted: false
            }
          ]
        },
        compeleted: {
          tableTitle: ['Order', 'Id', 'Name', 'Compeleted On'],
          tableContent: [{
              id: 122354132451345,
              name: 'Jessica',
              date: '2018-10-22',
              compeleted: true
            },
            {
              id: 12,
              name: 'Jessica',
              date: '2018-10-22',
              compeleted: true
            },
            {
              id: 12,
              name: 'Jessica',
              date: '2018-10-22',
              compeleted: true
            },
            {
              id: 13,
              name: 'Joan',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 14,
              name: 'Wang',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 15,
              name: 'Kitty',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 12,
              name: 'Jessica',
              date: '2018-10-22',
              compeleted: true
            },
            {
              id: 13,
              name: 'Joan',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 14,
              name: 'Wang',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 15,
              name: 'Kitty',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 16,
              name: 'Jason',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 17,
              name: 'Eva',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 18,
              name: 'Kuan',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 12,
              name: 'Jessica',
              date: '2018-10-22',
              compeleted: true
            },
            {
              id: 13,
              name: 'Joan',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 14,
              name: 'Wang',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 15,
              name: 'Kitty',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 16,
              name: 'Jason',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 17,
              name: 'Eva',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 18,
              name: 'Kuan',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 12,
              name: 'Jessica',
              date: '2018-10-22',
              compeleted: true
            },
            {
              id: 13,
              name: 'Joan',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 14,
              name: 'Wang',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 15,
              name: 'Kitty',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 16,
              name: 'Jason',
              date: '2018-09-22',
              compeleted: true
            },
            {
              id: 17,
              name: 'Eva',
              date: '2018-10-01',
              compeleted: true
            },
            {
              id: 18,
              name: 'Kuan',
              date: '2018-09-22',
              compeleted: true
            }
          ]
        },
        pending: {
          tableTitle: ['Order', 'Id', 'Name', 'Hospitalization Date'],
          tableContent: [{
              id: 15,
              name: 'Ula',
              date: '2018-08-22'
            },
            {
              id: 16,
              name: 'Edith',
              date: '2018-09-01'
            },
            {
              id: 17,
              name: 'Cindy',
              date: '2018-10-22'
            }
          ]
        },
        followed: {
          tableTitle: ['Order', 'Id', 'Name', 'Department'],
          tableContent: [{
              id: 1,
              name: 'Wang',
              department: 'Kidney'
            },
            {
              id: 2,
              name: 'Chen',
              department: 'Heart'
            },
            {
              id: 3,
              name: 'Hwang',
              department: 'Lung'
            },
            {
              id: 4,
              name: 'Lin',
              department: 'Foot'
            },
            {
              id: 5,
              name: 'Lu',
              department: 'Eyes'
            },
            {
              id: 6,
              name: 'Lu',
              department: 'Eyes'
            }
          ]
        }
      },
    }
  },
  mounted() {
    this.init();
  },
  computed: {
    renderTab() {
      return { category: ['incompeleted', 'compeleted', 'pending', 'followed'] };
    },
    pageStart() {
      return (this.items.currPage - 1) * this.items.countOfPage;
    },
  },
  filters: {
    tabTitle(value) {
      switch (value) {
        case "incompeleted":
          return "incompeleted notes"
        case "compeleted":
          return "compeleted notes"
        case "pending":
          return "pending approval"
        case "followed":
          return "followed doctors"
      }
    }
  },
  methods: {

    init() {

      const { lists } = this;
      const keysArr = Object.keys(lists);
      const { showData } = this.items;

      for (let i = 0; i < keysArr.length; i++) {
        this.items.badgeCount.push(lists[keysArr[i]]['tableContent'].length);
      }

      this.getDatas('incompeleted');
      this.countTotalPage('incompeleted');

    },
    getDatas(category) {

      this.items.currPage = 1;

      const { lists } = this;
      const { showData } = this.items;

      this.$set(showData, 'tableTitle', lists[category].tableTitle);
      this.$set(showData, 'tableContent', lists[category].tableContent);

      this.countTotalPage(category);

    },
    countTotalPage: function(category) {

      this.items.totalPage = Math.ceil(this.lists[category]['tableContent'].length / this.items.countOfPage);
    },

    unfollow(list) {
      this.$emit("unfollow", list);
    },
    getData(v) {
      this.$emit('selectedType', v);
      this.pageStartsFrom = 0;
      this.currPage = 1;
    },
    setPage: function(idx) {

      if (idx <= 0 || idx > this.items.totalPage) {
        return;
      }
      this.items.currPage = idx;
    },

  }
}

</script>
<style lang="scss" scoped>
@import '../assets/global.scss';
@import '../assets/paginate.scss';

.wrap {
  width: 100%;

  .inner-wrap {
    display: flex;
    padding: 25px;

    @media screen and (max-width: 1024px) {
      padding: 0;
    }

    @media screen and (max-width: $break-small) {
      flex-direction: column;
    }

    .tabs {
      margin: 0 40px 0 0;

      @media screen and (max-width: $break-small) {
        margin: 0 0 20px 0;
      }

      .tab {
        cursor: pointer;
        padding: 10px 10px 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 200px;
        text-transform: uppercase;
        border-right: 1px solid #ccc;
        margin-right: -1px;

        @media screen and (max-width: $break-small) {
          padding: 10px 0;
          position: relative;
          justify-content: space-between;
          border-right: none;
        }

        &:hover {
          text-decoration: none;
          color: $black;
        }

        .badge {
          padding: 3px;
          font-size: 12px;
          font-weight: 300;
          background: $brown;
          color: #fff;
        }

        &.router-link-active {
          border-right: 3px solid $brown;
          margin-right: -3px;
          color: $brown;
          font-weight: 600;

          @media screen and (max-width: $break-small) {
            border-right: none;
            margin-right: 0;
            border-bottom: 3px solid $brown;
          }
        }
      }
    }

    .table-container {
      width: 100%;
      min-height: 250px;

      table {
        width: 100%;

        th {
          background: $brown;
          color: #fff;
        }

        th,
        td {
          text-align: left;
          border-bottom: 1px solid #ddd;
          padding: .4em 1em;
        }

        .actions {
          i {
            color: $blue;
            cursor: pointer;
            width: 30px;
            height: 30px;
            margin-right: 10px;
            line-height: 30px;
          }
        }

        @media screen and (max-width: $break-medium) {
          thead {
            display: none;
          }

          th,
          td {
            padding: .5em;
            display: block;
          }

          tr {
            display: block;
            position: relative;
            margin-bottom: 1.5em;
          }

          td:nth-child(1),
          td:nth-child(4),
          td:nth-child(5) {
            display: none;
          }

          td:nth-child(2):before,
          td:nth-child(3):before {
            position: absolute;
            left: .5em;
          }

          td:nth-child(2):before {
            content: 'Id';
          }

          td:nth-child(3):before {
            content: 'Name';
          }

          td:nth-child(2),
          td:nth-child(3) {
            padding-left: 35%;
          }

          td:nth-child(2) {
            background: $brown;
            color: #fff;
          }

          td:nth-child(3) {
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
          }

          td.actions {
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background: none;

            i {
              color: #fff;
            }
          }
        }
      }
    }
  }
}

</style>
