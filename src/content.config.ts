import { slugify } from "@js/textUtils";
import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
// shows
const shows = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/shows",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
					location: z.string(),
					url: z.string().optional(),
			// Transform string to Date object
			date: z.coerce.date(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// other pages
const otherPages = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/pages",
	}),
	schema: () =>
		z.object({
			slug: z.string(),
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional(),
		}),
});

// musicians
const musicians = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/musicians",
	}),
	schema: () =>
		z.object({
			name: z.string(),
			image: z.string(),
			draft: z.boolean().optional(),
		}),
});

// videos
const videos = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/videos",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			url: z.string(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	shows,
	otherPages,
	musicians,
	videos,
};
