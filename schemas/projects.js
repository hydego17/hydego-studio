export default {
  title: "Projects",
  name: "projects",
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
    // Subtitle
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    // Image
    {
      title: "Cover Image",
      name: "coverImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    // Content type for blogs etc
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
    // Tech Stacks
    {
      title: "Technologies",
      name: "techStacks",
      type: "string",
    },

    // link
    {
      title: "Link",
      name: "link",
      type: "string",
    },
    // Code
    {
      title: "Code",
      name: "code",
      type: "string",
    },
  ],
};
