import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key':  '8d9795b8f7msh960e99af159dbf9p1529cbjsn7ad3a61831f3' ,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
    
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // Handle rate-limiting error
                const retryAfter = error.response.headers['Retry-After'];
                // alert(`Rate limited. Retry after ${retryAfter} seconds.`);
            } else {
                setError(error);
                // alert('There is an error');
            }
        } finally {
            setIsLoading(false);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch;