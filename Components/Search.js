import React , {useEffect,useState,useRef} from 'react';
import {useRouter} from "next/router";
import Link from 'next/link'


const Search = () => {

    const Router = useRouter();
    const x = useRef();
    const getTextInSearch = (e)=>{

        const y = document.querySelector('.text').value;
        Router.push(`./search/show/${y}`)


    }
    return (



        <span className={'input-group input-group-cs'} >

            <a className="input-group-text" id="basic-addon1" onClick={getTextInSearch}> <i className="bi bi-search"></i> </a>
            <input type="text" className="form-control text" placeholder="جستوجو در بازار ..." aria-label="Username"
                   aria-describedby="basic-addon1" ref={x} name='text'></input>

        </span>


    );
};

export default Search;