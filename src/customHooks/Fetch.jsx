import { useEffect, useState } from "react";

export function useFetchData (url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch(url)
        .then(r => {
            if(!r.ok) {throw new Error(`could not fetch: ${r.status}`)}                     
            return r.json()
        })                    
        .then(data => {
            setData(data)})
        .catch(error => {
            Alert(`fetch error: ${error}`)
        })
        .finally(setLoading(false))       
    }, [url])
     return {data, loading, setData}
}


