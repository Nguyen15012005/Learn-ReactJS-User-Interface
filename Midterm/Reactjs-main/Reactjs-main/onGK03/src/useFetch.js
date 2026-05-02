import { useState, useEffect } from "react"
export const useFetch = (dataSource) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                await new Promise (resolve => setTimeout(resolve, 1000));
                if(typeof dataSource === 'string'){
                    const res = await axios.get(dataSource);
                    setData(res.data);
                }else if(Array.isArray(dataSource)){
                    setData(dataSource);
                }
                setError(null);
            }catch(err){
                setError("Lỗi" + {err});
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[dataSource]);
    return {data, loading, error};
}