export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616f44b2758ddd0f47a9a2e8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-e79gffxs',
                  apiId: 'b85463ef-d3c6-4274-923f-8841427fa188'
                },
                {
                  buildHookId: '616f44b3bc70b30cd1fd28b4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rxr25469',
                  apiId: 'daaeeea2-2806-447c-a0cc-f06968e12fee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gants102/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rxr25469.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
