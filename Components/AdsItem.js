import React from 'react';
import Link from "next/link";

const AdsItem = (props) => {
    return (
        <div className={'ads-item'}>
            <Link href={props.link}>
                <a className={'ads-item-link'}>
                    <img src={`/Images/mainimages/ads/${props.img}`} className={'img-fluid'}></img>
                </a>
            </Link>
        </div>
    );
};

export default AdsItem;