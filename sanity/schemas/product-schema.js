const product = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name", // Use the "name" field as the source for generating the slug
          maxLength: 200, // Adjust the maximum length as needed
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Allows selecting a hotspot for cropping
        },
      
      },
      {
        name: "image2",
        title: "Image2",
        type: "image",
        options: {
          hotspot: true, // Allows selecting a hotspot for cropping
        },
      
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      
        options: {
          list: ['featured','caps','trending','T-shirts'],
          // You can add more categories as needed.
        },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
        },
        readOnly: true,
      },
    ],
    initialValue: {
      createdAt: new Date().toISOString(),
    },
  };
  
  export default product;
  