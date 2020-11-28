// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
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
        {
          title: "Subtitle",
          name: "subtitle",
          type: "string",
        },
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
    },
  ]),
});
