export default {
  name: 'callToAction',
  title: 'Call-to-Action',
  type: 'document',
  fields: [
    {
      name: 'buttonText',
      title: 'Button Text',
      description: 'The text that will be displayed in the button',
      type: 'string',
      validation: Rule => Rule.max(50).warning(`The button text of a call-to-action should not exceed 50 characters.`)
    },
    {
      name: 'description',
      title: 'CTA description',
      description: 'Describe the purpose of this call-to-action',
      type: 'string'
    },
    {
      name: 'style',
      title: 'Style',
      description: 'define the style of the call-to-action',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ]
      }
    },
    {
      name: 'route',
      title: 'Route',
      description: 'What route should this call-to-action call when clicked?',
      type: 'reference',
      to: [{type: 'route'}]
    },

  ]
}