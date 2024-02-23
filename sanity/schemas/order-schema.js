const order = {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "qty",
      title: "Qty",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "string",
      validation: (Rule) => Rule.required().min(0),
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
    {
      name: "paid",
      title: "Paid",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "delivered",
      title: "Delivered",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
  preview: {
    select: {
      title: "name",
      imageUrl: "image2", // Ensure 'imageUrl' is selected for both list and details views
    },
    prepare(selection) {
      const { title, imageUrl } = selection;
      return {
        title,
        media: <img src={imageUrl} alt={title} style={{ width: "1000px" }} />, // Render the image using 'imageUrl'
      };
    },
  },
  
};

export default order;
