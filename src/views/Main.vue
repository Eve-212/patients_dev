<template>
    <div>
        <header-component @isExpanded="toggleExpand"></header-component>
        <div class="main-wrap">
            <sidemenu :isExpanded="isExpanded"></sidemenu>
            <div class="secondary-wrap">
                <router-view :isExpanded="isExpanded"></router-view>
            </div>
        </div>
        <back-to-top></back-to-top>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('header-component', require('@/components/Header.vue').default)
    Vue.component('sidemenu', require('@/components/SideMenu.vue').default)
    Vue.component('back-to-top', require('@/components/BackToTop.vue').default)

    export default {
        data(){
            return {
                isExpanded: false
            }
        },
        methods:{
            toggleExpand(status){
                this.isExpanded = status
            }
        }     
    }

</script>

<style lang="scss">
    
    @import '../assets/global.scss';
        
    .main-wrap{
        display: flex;
        .secondary-wrap{
            width: 100%;
            margin-left: 60px;
            @media screen and (max-width: $break-small) {
                margin-left: 50px;
                flex-direction: column;
            }
        }
    }

</style>
