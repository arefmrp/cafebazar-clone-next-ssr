import React, {Component} from 'react';
import Product from "../../Components/Product";
import ProductsRequest from "../../Request/ProductsRequest";
class Index extends Component {
    state={
        products:[]
    }
    componentDidMount() {
        const products = ProductsRequest.get('http://localhost:3000/data/products.json');
        products.then(res=>{
            const items = res.data.apps;
            this.setState({
                products:this.state.products.concat(items)
            })
        })
    }

    render() {
        return (
            <div className='container-main'>
            <div className='content-box'>
                <div className='description-box'>
                    <span>برنامه ها</span>
                </div>
               <div className='product-box'>
                   <div className='row'>


                       {
                           this.state.products.map(item=>(<div className=' col-lg-2 col-md-3 col-sm-6 col-12' key={item.id}><Product id={item.id} img={item.img} name={item.name} category={item.category}></Product></div>))
                       }






                   </div>
               </div>
            </div>
            </div>
        );
    }
}

export default Index;