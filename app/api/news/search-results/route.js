import { NextResponse } from "next/server"

import axios  from "axios"

import { getParams } from "@/helper"



export async function GET (request) {

    let params = getParams(request.nextUrl.searchParams, true)
   
    params.apiKey = process.env.API_KEY

    let reqOptions = {
        url: `${process.env.BASE_URL}/everything`,
        method: "GET",
        params,
      }

    try {
        const response = await axios.request(reqOptions)
        return NextResponse.json({...response.data, params})
    } catch (e) {
        return NextResponse.json("internal server error")
    }

    
}
