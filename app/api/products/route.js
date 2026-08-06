import getAllProducts from "../../lib/getProducts";

export async function GET() {

  try {

    const products = await getAllProducts();



    return Response.json({
      success: true,
      products: products,
    });


  } catch (error) {


    console.error(error);


    return Response.json(
      {
        success:false,
        error:error.message,
      },
      {
        status:500,
      }
    );

  }

}