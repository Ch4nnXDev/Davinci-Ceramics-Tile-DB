import { revalidateTag } from "next/cache";


export async function POST(request) {
    try {
        const auth = request.headers.get("Authorization");
        if (auth !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
            return Response.json(
            {
                success: false,
                error: "Unauthorized"
            },
            {
                status: 401
            }
        );

        }
        revalidateTag("products", "max");
        return Response.json({
            success: true,
            revalidate: true
        });
    } catch (error) {
        console.error("Revalidation Error");

    }

}