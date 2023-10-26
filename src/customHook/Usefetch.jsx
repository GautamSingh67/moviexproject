import axios from "axios";
import { useEffect, useState } from "react";

export function Usefetch(url){
    const[data,setData] = useState("");
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState("");
    useEffect(()=>{
             axios.get(url)
             .then((res)=>{
                setLoading(false);
                setData(res.data);
             })
             .catch((err)=>{
                setLoading(false);
                setError("Something went wrong");
             })
    },[url])
    return {data, setData, loading, error};
}