const sidebarFun = (base,t) => {
    return {
        [`${base}/help/`]: { base: `${base}/help/`, items: sidebarHelp(t) },
        [`${base}/blog/`]: { base: `${base}/blog/`, items: sidebarBlog(t) },
        [`${base}/test/`]: { base: `${base}/test/`, items: sidebarTest(t) },
    }
    
}

// 【帮助文档】自定义左侧菜单
function sidebarHelp($t){
    return [
        {
            text: $t('help'),
            collapsed: false,
            items: [
                { text: '目录结构', link: '目录结构' },
                { text: '启动', link: '启动' },
                { text: '部署', link: '部署' }
            ]
        }
    ]
}

// 【博客文档】自定义左侧菜单
function sidebarBlog($t){
    return [
        {
            text: '博客',
            items: [
                {
                    text: '2025年',
                    collapsed: false,
                    items: [
                        {
                            text: '04月',
                            collapsed: false,
                            items: [
                                { text: '04月01', link: '2025/04/0401' }
                            ]
                        },
                        {
                            text: '03月',
                            collapsed: true,
                            items: [
                                { text: '03月22', link: '2025/03/0322' },
                                { text: '03月21', link: '2025/03/0321' }
                            ]
                        },
                        {
                            text: '02月',
                            collapsed: true,
                            items: [
                            ]
                        },
                        {
                            text: '01月',
                            collapsed: true,
                            items: [
                            ]
                        }
                    ]
                },
                {
                    text: '2024年',
                    collapsed: true,
                    items: [
                        {
                            text: '举个栗子噻~', collapsed: true, link: '2024/举个栗子'
                        },
                        {
                            text: '12月',
                            collapsed: true,
                            items: [
                                { text: '12月22', link: '2024/1222' },
                                { text: '12月21', link: '2024/1221' }
                            ]
                        },
                        {
                            text: '11月',
                            collapsed: true,
                            items: [
                                { text: '11月01', link: '2024/1101' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
// 【博客文档】自定义左侧菜单
function sidebarTest($t){
    return [
        {
            text: '测试',
            items: [
                {text: 'test1',collapsed: false,link:'test1'},
                {text: 'test2',collapsed: false,link:'test2'}
            ]
        }
    ]
}

export default sidebarFun;