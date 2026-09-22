import { productAgent } from "../../lib/agent";

export async function POST(request) {
    try {
        const { message } = await request.json();

        if (!message || typeof message !== "string") {
            return Response.json(
                {
                    error: "Message is required",
                },
                {
                    status: 400,
                }
            );
        }

        const result = await productAgent.generate({
            prompt: message,
        });

        let products = [];

        for (const step of result.steps ?? []) {
            for (const toolResult of step.toolResults ?? []) {
                if (
                    toolResult.toolName === "searchProducts" &&
                    toolResult.output?.products
                ) {
                    products = toolResult.output.products;
                }
            }
        }

        return Response.json({
            response: result.text,
            products,
        });
    } catch (error) {
        console.error("Agent error:", error);

        return Response.json(
            {
                error: "Failed to process agent request",
            },
            {
                status: 500,
            }
        );
    }
}