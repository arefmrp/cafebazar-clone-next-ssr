import React, {Component} from 'react';
import Link from "next/link";
class Product extends Component {
    render() {
        return (
           <div className={'product-section'}>
               <Link href={`//product/desc/${this.props.id}`}>
                   <a >
                       <div className={'product-item'}>
                           <div className={'product-image'}><img src={`/Images/mainimages/apps/${this.props.img}`}/></div>
                           <div className={'product-name'}>{this.props.name}</div>
                           <div className={'product-category'}>{this.props.category}</div>
                       </div>
                   </a>
               </Link>

           </div>
        );
    }
}

export default Product;