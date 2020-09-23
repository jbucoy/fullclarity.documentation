module.exports = {
    title: "FullClarity Documentation",
    description: 'This site holds the documentation for all FullClarity SuiteApps.',
    themeConfig: {
        nav: [
            {text: "Home", link: '/'},
            {text: "Products", ariaLabel: 'Prod Menu', items: [
                    {text: 'Timeline', link: '/timeline/'},
                    {text: 'Project Financials', link: '/project-financials/'},
                    {text: 'Document Storage', link: '/document-storage/'}
                ]},
            {text: "Website", link: 'https://fullclarity.com'}
        ],
        sidebar: [
            '/',
            '/timeline/',
            '/document-storage/',
        ]
    }
}