import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [savedata, setSaveData] = useState([])
  const [load, setLoad] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  const getData = async () => {
    setLoad(true)
    setError("")

    try {
      const fetchData = await fetch(url)
      const changeData = await fetchData.json()
      setSaveData(Array.isArray(changeData) ? changeData : changeData.products || [])
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoad(false)
    }
  }

  useEffect(() => {
    getData()
  }, [url])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return { savedata, load, error, handleChange, search }
}

export default useFetch