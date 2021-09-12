import React from 'react';

export const useFetch = (url) => {
   
    const [search,setSearch] = React.useState('a');
    const [products,setProducts] = React.useState([]);
    const[display,setDisplay] = React.useState(true);

    const Drinks = async() => {
        const Data = await fetch(`${url}${search}`);
        const Response = await Data.json();
        setProducts(Response.drinks);
        setTimeout(() => setDisplay(false),2000);
    };

    React.useEffect(() => {
        Drinks();
    },[url,search])

    return   { search, products, setSearch, display }
    
}
