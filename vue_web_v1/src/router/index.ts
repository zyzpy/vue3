import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'



// 人员管理模块
import User from '@/views/system/user/User.vue'
import Station from '@/views/system/station/Station.vue'
import Dept from '@/views/system/dept/Dept.vue'

// 系统管理模块
import Role from '@/views/admin/role/Role.vue'
import Permission from '@/views/admin/permission/Permission.vue'

// 布局组件
const MainLayout = () => import('@/components/layout/MainLayout.vue')



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
            meta: { hidden: true ,closable: true }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: { title: '首页',closable: true  },
            // redirect: '/home/system', // 默认重定向到系统管理
            children: [
                // 人员管理子模块
                {
                    path: 'personnel',
                    name: 'Personnel',
                    component: MainLayout,
                    meta: { title: '人员管理',closable: true  },
                    children: [
                        { path: 'user', name: 'User', component: User, meta: { title: '用户管理',closable: true  } },
                        { path: 'station', name: 'Station', component: Station, meta: { title: '岗位管理',closable: true  } },
                        { path: 'dept', name: 'Dept', component: Dept, meta: { title: '部门管理' ,closable: true } }
                    ]
                },
                // 角色权限子模块
                {
                    path: 'admin',
                    name: 'Admin',
                    component: MainLayout,
                    meta: { title: '系统管理' ,closable: true },
                    children: [
                        { path: 'role', name: 'Role', component: Role, meta: { title: '角色管理',closable: true  } },
                        { path: 'permission', name: 'Permission', component: Permission, meta: { title: '权限管理',closable: true  } }
                    ]
                }
            ]
        }
    ]
})

export default router