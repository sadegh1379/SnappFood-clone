export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
   {
    name: "name",
    type: "string",
    validation: (Rule) => Rule.required(),
    title: "category name",
   },
   {
    name: "image",
    title: "category image",
    type: "image",
  }
  ],
}
