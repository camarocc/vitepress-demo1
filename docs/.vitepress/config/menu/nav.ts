// 【顶部导航】自定义导航栏
const navFun = (base,t) => {
    return [
        {
            text:  t('help'),
            link: `${base}/help/index`,
            activeMatch: `${base}/help/`
        },
        {
            text:  t('blog'),
            link: `${base}/blog/index`,
            activeMatch: `${base}/blog/`
        },
        {
            text:  t('test'),
            link: `${base}/test/index`,
            activeMatch: `${base}/test/`
        }
    ]
}

export default navFun;