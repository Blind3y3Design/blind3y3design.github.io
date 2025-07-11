import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const work = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      excerpt: z.string().optional(),
      pubDate: z.coerce.date(),
      heroImage: image(),
      link: z.string().optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      link: z.string().optional(),
      status: z.string(),
    }),
});

const bookshelf = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      pubDate: z.coerce.date(),
      completionDate: z.coerce.date(),
      bookAuthor: z.string(),
      bookImage: image(),
      bookRating: z.string(),
      amazonLink: z.string(),
      amazonGuid: z.string().optional(),
      recommendedBy: z.string().optional(),
    }),
});

export const collections = { writing, work, projects, bookshelf };
