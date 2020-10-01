module.exports = {
    title: "SuiteApp Documentation",
    description: 'This site holds the documentation for all FullClarity SuiteApps.',
    cache: false,
    themeConfig: {
        nextLinks: true,
        prevLinks: true,
        logo: '/assets/img/Logo-164x35.png',
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
                            {text: 'Code Libraries', link: '/utility-apps/code-libraries'},
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
                sidebarDepth: 1,
                children: [
                    '/utility-apps/code-libraries',
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
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-134154809-2'
            }
        ]
    ]
}