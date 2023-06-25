import { useContext } from "react"
import { NewsContext } from "../context/NewsProvider"

export default function useNews() {
  return useContext(NewsContext)
}
