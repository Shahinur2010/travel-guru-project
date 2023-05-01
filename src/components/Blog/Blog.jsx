import React, { useEffect, useState } from 'react';

const Blog = () => {

const [areas, setAreas] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/travel-areas')
    .then(res=> res.json())
    .then(data=>console.log(data))
},[])

    return (
        <div>
            <h2>Write some blogs</h2>
        </div>
    );
};

export default Blog;