export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "image of restaurant"
    },
    {
      name: "lat",
      type: "number",
      title: "latitude of restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "longitude of restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "address of restaurant",
      validation: (Rule) => Rule.required()
    },
    {
      name: "rating",
      type: "number",
      title: "enter rating of restaurant (1-5)",
      validation: (Rule) =>
        Rule.required().min(1).max(5)
          .error("enter a value between 1 and 5")
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    }
  ],
}
