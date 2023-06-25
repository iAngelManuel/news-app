/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, createContext } from "react"
import axios from "axios"

export const NewsContext = createContext()

export default function NewsProvider({ children })  {
  const [ categoria, setCategoria ] = useState('general')
  const [ news, setNews ] = useState([])
  const [ paginate, setPaginate ] = useState(1)
  const [ totalPaginate, setTotalPaginate ] = useState(0)

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)
      setNews(data.articles)
      setTotalPaginate(data.totalResults)
      setPaginate(1)
    }
    fetchNews()
  }, [categoria])

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${paginate}&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)
      setNews(data.articles)
      setTotalPaginate(data.totalResults)
    }
    fetchNews()
  }, [paginate])

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  const handleChangePage = (e, value) => {
    setPaginate(value)
  }

  return (
    <NewsContext.Provider value={{
      categoria,
      handleChangeCategoria,
      news,
      totalPaginate,
      paginate,
      handleChangePage,
    }}>{children}</NewsContext.Provider>
  )
}
