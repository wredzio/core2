import { defineField, defineType } from 'sanity';

export const imageSection = defineType({
  name: 'imageSection',
  type: 'object',
  title: 'Image Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'blockContentSection',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
      hidden: () => false,
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Grafika',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Układ',
      options: {
        list: [
          { title: 'Lewy', value: 'left' },
          { title: 'Prawy', value: 'right' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
