import { NextResponse } from "next/server"

import axios  from "axios"


let reqOptions = {
    url: `${process.env.BASE_URL}/top-headlines?country=us&apiKey=${process.env.API_KEY}`,
    method: "GET",
  }

export async function GET () {
    try {
        const response = await axios.request(reqOptions)
        return NextResponse.json(response.data)
    } catch (e) {
        return NextResponse.json("internal server error")
    }
}