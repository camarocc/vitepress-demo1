import { defineConfig } from 'vitepress'
import { searchFun } from './lang'


// 通用基础配置
export const baseConfig = defineConfig({
    // 网站根路径
    base: "/vitepress-demo1/",
    // 网站标题
    title: '帮助文档',
    // 重写默认语言的路径
    rewrites: {
        'zh/:rest*': ':rest*'
    },

    // 记录最后更新时间
    lastUpdated: true,

    // 去掉 .html后缀
    cleanUrls: true,

    // 元数据提取
    metaChunk: true,

    // 默认主题：true跟随用户系统，dark默认深色，false无法切换
    appearance: true,

    // 排除文件
    srcExclude: [
        './README.md'
    ],

    // 打包输出目录
    outDir: './.vitepress/dist',

    // 静态文件输出路径
    assetsDir: 'assets',

    // 开发编译缓存目录
    cacheDir: './.vitepress/cache',

    // 编译时忽略死链
    ignoreDeadLinks: false,

    // 网站头部配置
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        //['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'zh' }],
        ['meta', { property: 'og:title', content: 'Kami Doctrine | VitePress' }],
        ['meta', { property: 'og:site_name', content: 'VitePress' }],
        ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
        ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }]
    ],

    // 主题配置
    themeConfig: {
        // 网站首页logo
        logo: { src: '/logo.svg', width: 24, height: 24 },
        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jogjo/kami-doc' }
        ],
        // 搜索配置
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: searchFun('zh'),
                    en: searchFun('en'),
                    xx: searchFun('xx')
                }
            }
        }
    },

    // 网站地图自动生成
    sitemap: {
        hostname: 'https://vitepress.dev',
        transformItems(items) {
            return items.filter((item) => !item.url.includes('migration'))
        }
    },

    // markdown 配置
    markdown: {
        codeTransformers: [
            {
                postprocess(code) {
                    return code.replace(/\[\!\!code/g, '[!code')
                }
            }
        ],
        config(md) {
            const fence = md.renderer.rules.fence!
            md.renderer.rules.fence = function (tokens, idx, options, env, self) {
                const { localeIndex = 'root' } = env
                const codeCopyButtonTitle = (() => {
                    switch (localeIndex) {
                        case 'en':
                            return 'Copy code'
                        default:
                            return '复制代码'
                    }
                })()
                return fence(tokens, idx, options, env, self).replace(
                    '<button title="Copy Code" class="copy"></button>',
                    `<button title="${codeCopyButtonTitle}" class="copy"></button>`
                )
            }
        }
    }
})
