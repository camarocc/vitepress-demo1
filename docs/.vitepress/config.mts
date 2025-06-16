import { defineConfig } from 'vitepress'
import { baseConfig } from './config/base'

import { langFun } from './config/lang'

// 配置入口
export default defineConfig({
  ...baseConfig,
  locales: {
    // rewrites: {
    //     'zh/:rest*': ':rest*'
    // },
    root: { label: '简体中文', ...langFun('zh') },
    en: { label: 'English', ...langFun('en') },
    xx: { label: 'xxlau', ...langFun('xx') },
    aa: { label: 'aaa', ...langFun('xx') },
  }
})
