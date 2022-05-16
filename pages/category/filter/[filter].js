import React,{useState,useEffect} from 'react';
import {useRouter} from "next/router";
import Product from "../../../Components/Product";
import SelectedCategory from "../../../Request/SelectedCategory";

const Filter = () => {
    const filter = useRouter().query.filter;
    const [selectedApps,setSelectedApps] = useState([]);
    useEffect(()=>{
       const Selected =  SelectedCategory.get('http://localhost:3000/Data/products.json');
       Selected.then(res=>{
           const x = res.data.apps;
           const y = x.filter(item=>item.category == filter)
           console.log('///////////');
           setSelectedApps(y)
       })

    },[])
    return (
        <div className='container-main'>
            <div className='content-box'>
                <div className='description-box'>
                    <span>دسته {filter}</span>
                </div>
                <div className='product-box'>
                    <div className='row'>


                        {
                            selectedApps.map(item=>(<div className=' col-lg-2 col-md-3 col-sm-6 col-12' key={item.id}><Product id={item.id} img={item.img} name={item.name} category={item.category}></Product></div>))
                        }






                    </div>
                </div>
            </div>
        </div>
    );
};

    export default Filter;