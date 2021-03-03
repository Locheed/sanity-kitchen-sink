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
                  buildHookId: '603fdb48abe3ec009f3615ee',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3kbi7481',
                  apiId: 'f96feef4-2951-4ea9-96a4-534f787aa96d'
                },
                {
                  buildHookId: '603fdb495ea319b2ea6b720e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-szwik4bq',
                  apiId: 'a5f37be3-18ee-479b-a768-4efb39a8e516'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Locheed/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-szwik4bq.netlify.app', category: 'apps'}
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
