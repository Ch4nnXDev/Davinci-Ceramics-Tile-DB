import { tool } from "ai";
import { z } from "zod";
import getAllProducts from "./getProducts";

function normalizeWord(word: string) {
    const normalized = word.toLowerCase().trim();

    if (normalized.endsWith("ies")) {
        return normalized.slice(0, -3) + "y";
    }

    if (normalized.endsWith("s") && !normalized.endsWith("ss")) {
        return normalized.slice(0, -1);
    }

    return normalized;
}

function tokenize(value: unknown) {
    return String(value ?? "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .map(normalizeWord);
}

const stopWords = new Set([
    "show",
    "me",
    "find",
    "give",
    "get",
    "some",
    "the",
    "a",
    "an",
    "for",
    "of",
    "with",
    "and",
    "please",
    "i",
    "want",
    "looking",
    "look",
]);

export const searchProducts = tool({
    description:
        "Search the Da Vinci Ceramics product catalogue by name, type, material, color, origin, size, or application. Use this whenever the user asks to find or recommend catalogue products.",

    inputSchema: z.object({
        query: z
            .string()
            .describe(
                "The product characteristics the customer is looking for, such as white tiles, marble tiles, glass tiles, bathroom tiles, or 300x600 tiles."
            ),
    }),

    execute: async ({ query }) => {
        const products = await getAllProducts();

        const queryTokens = tokenize(query).filter(
            (token) => !stopWords.has(token)
        );

        if (queryTokens.length === 0) {
            return {
                products: [],
                count: 0,
            };
        }

        const scoredProducts = products
            .map((product) => {
                const searchableFields = [
                    product.name,
                    product.type,
                    product.material,
                    product.color,
                    product.origin,
                    product.size,
                    product.slug,
                ];

                const productTokens = searchableFields.flatMap(tokenize);

                let score = 0;

                for (const queryToken of queryTokens) {
                    if (productTokens.includes(queryToken)) {
                        score += 1;
                    }
                }

                return {
                    product,
                    score,
                };
            })
            .filter((item) => item.score > 0)
            .sort((a, b) => b.score - a.score);

        const results = scoredProducts
            .slice(0, 12)
            .map((item) => item.product);

        return {
            products: results,
            count: results.length,
        };
    },
});