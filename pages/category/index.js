import React, {Component} from 'react';
import CategoryItem from "../../Components/CategoryItem";
import AppsCategoryRequest from "../../Request/AppsCategoryRequest";


class Index extends Component {
    state = {
        categories:[]
    }
    componentDidMount() {
       const categories =  AppsCategoryRequest.get('http://localhost:3000/Data/category.json');
       categories.then(res=>{
           const items = res.data.apps;
           setTimeout(()=>{
               this.setState({
                   categories:this.state.categories.concat(items)
               })
           },500)

       })
    }

    render() {
        return (
            <div className='container-main'>
            <div className='content-box'>
                <div className='description-box'>
                    <span>دسته ها</span>
                </div>
               <div className='category-box'>
                   <div className='row'>
                       {
                           this.state.categories.map(items=>(<div className='col-md-4 col-sm-6 col-12' key={items.id}>
                               <CategoryItem  title={items.category} filter={items.category}></CategoryItem>
                           </div>))
                       }


                   </div>
               </div>
            </div>
            </div>
        );
    }
}

export default Index;