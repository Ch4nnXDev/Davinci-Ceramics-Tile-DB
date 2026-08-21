import getAllProducts from "../../lib/getProducts";
import editStockCount from "../../lib/editStockCount";
import { revalidateTag } from "next/cache";


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

export async function POST(request) {

  try {

    const data = await request.json();

    await editStockCount(data.rowNo, data.value);
   
    revalidateTag("products", "max");

    return Response.json(
      {
        success: true,
      },
    )

  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    )
  }

  


}