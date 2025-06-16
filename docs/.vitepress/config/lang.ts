import { defineConfig, type DefaultTheme } from 'vitepress'
import { getLang } from '../i18n/lang'

import sidebarFun from './menu/sidebar'
import navFun from './menu/nav'

export const langFun=function(lang){
    const $t=getLang(lang)
    const base =lang=='zh'?'':`/${lang}`
    // 中文版-专属配置
    const obj = defineConfig({
        // 语言标记
        lang: lang,
        // link: base + '/',
        // 网站描述
        description: $t('hello'),

        // 主题配置
        themeConfig: {
            // 首页标题
            siteTitle:$t('title'),

            // 导航栏
            nav: navFun(base,$t),
            // 左侧-菜单栏
            sidebar:sidebarFun(base,$t),
            // 页脚
            footer: {
                message: $t('hello'),
                copyright: $t('hello')
            },

            // 文档页脚
            docFooter: {
                prev: $t('prev'),
                next: $t('next')
            },

            // 右侧目录
            outline: {
                // 若未指定 label，则自动取第一个标题
                // VitePress 默认行为就是如此，无需手动设置 label
                // 若想允许自定义但优先自动取第一个标题，可这样处理：
                // label: undefined
            },

            // 最后更新
            lastUpdated: {
                text: $t('hello'),
                formatOptions: {
                    dateStyle: 'short',
                    timeStyle: 'medium'
                }
            },

            // 其他
            langMenuLabel: '多语言',
            returnToTopLabel: '回到顶部',
            sidebarMenuLabel: '菜单',
            darkModeSwitchLabel: '主题',
            lightModeSwitchTitle: '切换到浅色模式',
            darkModeSwitchTitle: '切换到深色模式',
            skipToContentLabel: '跳转到内容'
        }
    })
    return obj

}

export const searchFun = function(lang) {
     const $t=getLang(lang)
    if (lang != 'zh') {
        return {
            placeholder: $t('serachTxt'),
            translations: {
                button: {
                    buttonText: $t('serachTxt'),
                    buttonAriaLabel: $t('serachTxt')
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: $t('resetButtonTitle'),
                        resetButtonAriaLabel: $t('resetButtonTitle'),
                        cancelButtonText: $t('cancelButtonText'),
                        cancelButtonAriaLabel: $t('cancelButtonText')
                    },
                    startScreen: {
                        recentSearchesTitle: $t('recentSearchesTitle'),
                        noRecentSearchesText:$t('noRecentSearchesText'),
                        saveRecentSearchButtonTitle:$t('saveRecentSearchButtonTitle'),
                        removeRecentSearchButtonTitle:$t('removeRecentSearchButtonTitle'),
                        favoriteSearchesTitle:$t('favoriteSearchesTitle'),
                        removeFavoriteSearchButtonTitle:$t('removeFavoriteSearchButtonTitle'),
                    },
                    errorScreen: {
                        titleText:$t('titleText'),
                        helpText:$t('helpText'),
                    },
                    footer: {
                        selectText:$t('selectText'),
                        navigateText:$t('navigateText'),
                        closeText:$t('closeText'),
                        searchByText:$t('searchByText'),
                    },
                    noResultsScreen: {
                        noResultsText:$t('noResultsText'),
                        suggestedQueryText:$t('suggestedQueryText'),
                        reportMissingResultsText:$t('reportMissingResultsText'),
                        reportMissingResultsLinkText:$t('reportMissingResultsLinkText'),
                    }
                }
            }
        }
    }
    // 默认中文
    return {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    }
}


// 【顶部导航】自定义导航栏
function nav($t,base): DefaultTheme.NavItem[] {
    return [
        {
            text:  $t('help'),
            link: `${base}/help/index`,
            activeMatch: `${base}/help/`
        },
        {
            text:  $t('blog'),
            link: `${base}/blog/index`,
            activeMatch: `${base}/blog/`
        }
    ]
}

