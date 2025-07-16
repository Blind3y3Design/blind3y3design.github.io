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

const caseStudies = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      image: image(),
      label: z.string(),
      title: z.string(),
      description: z.string(),
      results: z.array(z.string()),
      badges: z.array(z.string()),
    }),
});

const work = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      image: image(),
      label: z.string(),
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
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

export const collections = { writing, work, bookshelf, caseStudies };
