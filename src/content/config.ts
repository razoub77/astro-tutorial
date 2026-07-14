import { z } from "astro/zod";

const post = z.object({
  layout: z.string(),
  title: z.string(),
  pubDate: z.string().transform((str) => new Date(str)),
  author: z.string(),
  description: z.string(),
  image: z.object({
    url: z.url(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
});

export type Post = z.infer<typeof post>;
