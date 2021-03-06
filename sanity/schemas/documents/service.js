export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    { 
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Google Fonts Icon',
      description: 'Icon selector from https://fonts.google.com/icons?selected=Material+Icons',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },

  ]
}