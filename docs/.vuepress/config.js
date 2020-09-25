module.exports = {
    title: "FullClarity Documentation",
    description: 'This site holds the documentation for all FullClarity SuiteApps.',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            {text: "Home", link: '/index.html'},
            {text: "Products", ariaLabel: 'Prod Menu', items: [
                    {text: 'SuiteApps', items: [
                            {text: 'Timeline', link: '/timeline'},
                            {text: 'Project Financials', link: '/project-financials'},
                            {text: 'Retainage', link: '/retainage'},
                            {text: 'Document Storage', link: '/document-storage'},
                            {text: 'Project Storage', link: '/project-storage'},
                        ]},
                    {text: 'Utility Apps', items: [
                            {text: 'Portal', link: '/utility-apps/portal'}
                        ]}
                ]},
            {text: "FullClarity", link: 'https://fullclarity.com'}
        ],
        sidebar: [
            '/',
            '/timeline',
            '/project-financials',
            '/retainage',
            '/document-storage',
            '/project-storage',
            {
                title: 'Utility Apps',
                path: '',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/utility-apps/portal'
                ]
            }
        ]
    },
    plugins: [
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
    ]
}