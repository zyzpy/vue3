

// 定义接口规范
interface MenuItem {
    id: number
    authName: string
    icon: string
    path: string | null
    children: MenuItem[]
}
// 路由数据
export const menuData: { data: MenuItem[]; meta: any } = {
    data: [
        {
            id: 100,
            authName: "人员管理",
            icon: "Avatar",
            path: '/home/personnel',
            children: [
                { id: 100003, authName: "用户管理", path: "/home/personnel/user", icon: "Menu", children: [] },
                { id: 100001, authName: "岗位管理", path: "/home/personnel/station", icon: "Pointer", children: [] },
                { id: 100002, authName: "部门管理", path: "/home/personnel/dept", icon: "EditPen", children: [] }
            ]
        },
        {
            id: 102,
            authName: "系统管理",
            icon: "HomeFilled",
            path: '/home/admin',
            children: [
                { id: 102003, authName: "角色管理", path: "/home/admin/role", icon: "Food", children: [] },
                { id: 102001, authName: "权限管理", path: "/home/admin/permission", icon: "Opportunity", children: [] }
            ]
        }
    ],
    meta: {
        msg: "获取菜单成功",
        status: 200
    }
}

