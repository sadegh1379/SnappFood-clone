export default {
     name: 'dish',
     title: 'Dish',
     type: 'document',
     fields: [
          {
               name: "name",
               type: "string",
               title: "name of dish",
               validation: (Rule) => Rule.required(),
          },
          {
               name: "short_description",
               type: "string",
               title: "short description of dish",
               validation: (Rule) => Rule.max(200),
          },
          {
               name: "price",
               type: "number",
               title: "price of dish in GBP",
          },
          {
               name: "image",
               type: "image",
               title: "image of dish",
          }
     ],
}
