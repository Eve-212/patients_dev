import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/Main'
import LoginPage from "@/views/Login"
import ProfileComponent from "@/components/Profile"
import TableComponent from "@/components/Table"

Vue.use(Router)

export default new Router({
	mode: 'history',	
	routes: [
        {
            path: "/login",
            name:"login",
            component: LoginPage
        },
        {
            path: "/main",
            component: MainLayout,
            children:[
            
              {
                path: '',
                component: ProfileComponent,
                children: [
                  {
                    path: '', 
                    name: "main", 
                    component: TableComponent
                  },
                  {
                    path: '/lists/:type', 
                    name: "dataTable", 
                    component: TableComponent,
                    props: true
                  },
                ]
              },

            ],        
        },
    ]
})