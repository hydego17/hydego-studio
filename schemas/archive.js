export default {
  title: "Archive",
  name: "archive",
  type: "document",
  fields: [
    // Title
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    // Slug
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    // Date
    {
      title: "Date",
      name: "date",
      type: "datetime",
    },
    // Content
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              title: "Description",
              name: "alt",
              type: "text",
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
