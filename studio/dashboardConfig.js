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
                  buildHookId: '60ac8c485b11712a63d4af64',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1rkv4cpb',
                  apiId: 'bbd957aa-8371-48a8-9caf-d9ee2695b928'
                },
                {
                  buildHookId: '60ac8c485edb7125839fd915',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qrny57ev',
                  apiId: 'a4dc65e5-9e6d-45cb-88bb-8d8c8af70028'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dikshastpl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qrny57ev.netlify.app', category: 'apps'}
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
