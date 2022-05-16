import React,{useState,useEffect} from 'react';
import {useRouter} from "next/router";
import SearchRequest from "../../../Request/Search";
import Product from "../../../Components/Product";
import SelectedCategory from "../../../Request/SelectedCategory";

const Search = () => {
    const sI = useRouter().query.search;
    const [selectSearch , setSelectSearch] = useState([]);
    useEffect(()=>{
        const Search = SearchRequest.get('http://localhost:3000/Data/products.json');
        Search.then(res=>{
            const x = res.data.apps;
            const y = x.find(item=>item.name === sI.toString());
            setSelectSearch(prev => prev.concat(y))
        })

    },[])

    return (
        <div className='container-main'>
            <div className='content-box'>
                <div className='description-box'>
                    <span>جستوجو {sI}</span>
                </div>
                <div className='product-box'>
                    <div className='row'>


{
    (selectSearch) ? selectSearch.map(item=>(<div className=' col-lg-2 col-md-3 col-sm-6 col-12' key={item.id}><Product id={item.id} img={item.img} name={item.name} category={item.category}></Product></div>)):null
}





                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;