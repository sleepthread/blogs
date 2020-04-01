module.exports = {
    title: '朱俊的首页',
    description: '学习记录收藏',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/images/logo.png'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
        ['script', {type: 'text/javascript', src: '/js/main.js'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav:require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
