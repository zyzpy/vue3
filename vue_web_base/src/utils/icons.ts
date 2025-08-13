import {
    User, Avatar, Pointer, Menu,
    EditPen, Tools, HomeFilled, Food,
    Opportunity, Fold, Expand
} from '@element-plus/icons-vue'

// 类型定义
export type IconKey = keyof typeof iconComponents

// 图标映射对象（使用 as const 锁定类型）
export const iconComponents = {
    User,
    Avatar,
    Pointer,
    Menu,
    EditPen,
    Tools,
    HomeFilled,
    Food,
    Opportunity,
    Fold,
    Expand
} as const

// 获取图标函数（带安全类型）
export const getIcon = (iconName: string) => {
    const key = iconName as IconKey
    return iconComponents[key] || User  // 默认返回User图标
}