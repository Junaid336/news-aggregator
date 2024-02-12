import { NextResponse } from "next/server"

import axios  from "axios"


export async function GET (request) {

    let category = request.nextUrl.searchParams.get("category")

    let reqOptions = {
        url: `${process.env.BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`,
        method: "GET",
      }

    try {
        const response = await axios.request(reqOptions)
        return NextResponse.json(response.data)
    } catch (e) {
        return NextResponse.json("internal server error")
    }

    
}
