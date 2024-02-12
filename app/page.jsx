'use client'

import { useEffect, useState } from "react";

import axios from "axios";

import NewsList from "@/components/NewsList";
import Spinner from "@/components/Spinner";





export default function Page() {

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(
    ()=> {
      setIsLoading(true)
      axios.get('/api/news/latest')
      .then( res => {
        setArticles(res.data.articles)
        setIsLoading(false)
      })
      .catch(e => console.log(e))
  }, [])
 
  if(isLoading)
    return <Spinner />

  
    return (
      <NewsList text="Latest" articles={articles} />
    )
    
}
