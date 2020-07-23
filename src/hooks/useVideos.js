import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
const KEY = 'AIzaSyDC11b4LL6gsyHzUIwKVVJdw5_Rr8WgFfo';


const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]); 
    
    useEffect(() => {
        search(defaultSearchTerm); 
    }, [defaultSearchTerm]);

    const search = async term => {
        const response =  await youtube.get('/search', {
                 params: {
                    q: term,
                     type: 'video',
                     part: 'snippet',
                     maxResults: 5,
                     key:KEY,
                 }
        });
        
        setVideos(response.data.items);
        
    };

    return [videos, search];
};

export default useVideos;