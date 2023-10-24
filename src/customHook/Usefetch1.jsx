import axios from "axios";
import { useEffect, useState } from "react";

export function Usefetch1(url){
    const[data1,setData1] = useState("");
    const[loading1,setLoading1] = useState(true);
    const[error1,setError1] = useState("");
    useEffect(()=>{
             axios.get(url)
             .then((res)=>{
                setLoading1(false);
                setData1(res.data);
             })
             .catch((err)=>{
                setLoading1(false);
                setError1("Something went wrong");
             })
    },[url])
    return {data1, loading1, error1};
}