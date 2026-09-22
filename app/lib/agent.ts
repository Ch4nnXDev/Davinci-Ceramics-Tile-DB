import { ToolLoopAgent } from "ai";
import { groq } from "@ai-sdk/groq";
import { searchProducts } from "./agentTools";

export const productAgent = new ToolLoopAgent({
    model: groq("openai/gpt-oss-20b"),

    instructions: `
        You are the Da Vinci Ceramics product assistant.

        Help sales staff find products from the Da Vinci Ceramics catalogue.

        When the user asks about products, use the searchProducts tool.

        Only provide product information returned by the tool.
        Do not invent products, prices, stock quantities, sizes, colors,
        or other catalogue information.

        Be concise and useful.
    `,

    tools: {
        searchProducts,
    },
});