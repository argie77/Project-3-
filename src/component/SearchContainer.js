import { useState } from 'react'
import Search from './Search'
import Results from './Results'


const SearchContainer = () => {
    let[query, setQuery] = useState('')
    let[results, setResults] = useState([])
    

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        try {
            console.log("Hitting API!")
            //const apiKey = "<API_KEY>"
            //const URL = `https://fakestoreapi.com/products/${query}/`

            const response = await fetch(`https://fakestoreapi.com/products/category/${query}/`)
            const data = await response.json()
            setResults(data)
            console.log('hello')
            console.log(data, "data here")
           // console.log(results, "results here")
        } catch(err) {
            console.log(err)
        }
    }

    function handleChange(e) {
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    console.log(results, "results here")
    return(
        <>
            < Search handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
            < Results results={results}/>
        </>
    )
}

export default SearchContainer