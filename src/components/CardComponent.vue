<template>
  <div class="mx-sm-5 mx-2">
    <div v-for="(v, k, index) in data" :key="index">

      <!-- Card Title -->
      <div v-if="sortType === 'completion'">
        <h2 v-if="k === 'incompleted'" class="card_title">未完成</h2>
        <h2 v-else class="card_title">已完成</h2> 
      </div>
      <div v-else-if="sortType === 'doctors'">
        <h2 class="card_title">{{k}} <small class="text-muted">醫師</small></h2> 
      </div>
      <div v-else="sortType === 'floors'">
        <h2 class="card_title">{{k}} <small class="text-muted">樓</small></h2>
      </div>

      <!-- Card Content -->
      <div class="card_wrap mb-5">
        <div class="card mt-4 mr-sm-3 mr-0" v-for="(v1, index1) in v" :key="index1" :class="{incompleted: !v1.completed}">
          <div class="card-header">
            {{v1.bed_no}}｜{{v1.pt_name}}
            <small class="text-muted float-right">{{v1.chr_no}}</small>
          </div>
          <div class="card-body">
            <p class="mb-0">{{ v1.age }} y/o, {{ v1.gender }}</p>
            <p>{{v1.illness}}</p>
            <p>主責醫師：{{ v1.doc_name }}</p>
            <div class="d-flex">
              <div v-for="n in 3">
                <button 
                  class="btn px-1"
                  title="2018-10-12 未完成">
                  <span v-if="n === 1" :class="{'text-muted': v1.completed === true}">住院</span>
                  <span v-if="n === 2" :class="{'text-muted': v1.completed === true}">Prog.</span>
                  <span v-if="n === 3" :class="{'text-muted': v1.completed === true}">出院</span>
                  <span 
                    v-if="v1.completed === false" 
                    class="badge badge-danger text-white">8
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'sortType']
}
</script>

<style lang="scss">
@import '../assets/global.scss';
.card_title {
  border-bottom: 1px #cccaca solid;
  padding-bottom: 10px;
  text-transform: capitalize;
  @media screen and (max-width: $break-small) {
    font-size: px-to-vw(32, 450);
  }
}

.card_wrap {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 18rem;
    border-left: 4px solid $green;
    &.incompleted {
      border-left: 4px solid $red-light;
    }
    @media screen and (max-width: $break-medium) {
      width: 100%;
    }
    .card-body {
      @media screen and (max-width: $break-small) {
        padding: px-to-vw(18, 450);
      }
    }
    button {
      font-size: 14px;
      background: #fff;
    }
  }
}
</style>