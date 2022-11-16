export default {
     name: 'featured',
     title: 'Featured Menu Category',
     type: 'document',
     fields: [
          {
               name: "name",
               type: "string",
               title: "featured category name",
               validation: (Rule) => Rule.required(),
          },
          {
               name: "short_description",
               type: "string",
               title: "short description of dish",
               validation: (Rule) => Rule.max(200),
          },
          {
               name: "restaurants",
               type: "array",
               title: "Restaurants",
               of: [{ type: "reference", to: [{ type: "restaurant" }] }]
          }
     ],
}
