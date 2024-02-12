'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import axios from "axios";

import NewsList from "@/components/NewsList";
import Spinner from "@/components/Spinner";

import { useSearchParamValues } from "../hooks/useParamValues";


export const page = () => {
    const searchParams = useSearchParams()
    const params = useSearchParamValues()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(
      ()=> {
        setIsLoading(true)

        let reqOptions = {
          url: `/api/news/search-results`,
          method: "GET",
          params,
        }

        axios.request(reqOptions)
        .then( res => {
          setArticles(res.data.articles)
          
          setIsLoading(false)
        })
        .catch(e => console.log(e))
    }, [searchParams])

    if(isLoading)
      return <Spinner />

  
    return (
      <NewsList text="Search Results" articles={articles} />
    )
}

export default page