import React ,{useState,useEffect} from 'react';
import {useRouter} from "next/router";
import ProductItemRequest from "../../../Request/ProductItemRequest";
import ProductsItemRequest from "../../../Request/ProductsItemRequest";
import BlogsRequest from "../../../Request/BlogsRequest";
import CommentsRequest from "../../../Request/CommentsRequest";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import SliderName from "../../../Components/SliderName";

import Product from "../../../Components/Product";
import OtherImageItem from "../../../Components/OtherImageItem";
import SocialItem from "../../../Components/SocialItem";
import CommentsItem from "../../../Components/commentsItem";
import AppItemFeatures from "../../../Components/AppItemFeatures";


const Id = () => {

    const idProduct = useRouter().query.id;
    const [itemsProducts,setItemsProducts] = useState([]);
    const [itemProduct,setItemProduct] = useState([]);
    const [itemBlogs,setItemBlogs] = useState([]);
    const [itemComments,setItemComments] = useState([]);


    useEffect(()=>{

       const Products = ProductItemRequest.get('http://localhost:3000/Data/products.json');
       Products.then(res=>{




           const allProducts = res.data.apps;
           const selectedProducts = allProducts.find(item=>item.id === parseInt(idProduct));
           setItemsProducts(allProducts);
           setItemProduct(selectedProducts);
           console.log(itemsProducts)


       })








        const BlogsItems = BlogsRequest.get('http://localhost:3000/Data/blogs.json');
        BlogsItems.then(res=>{
            const items = res.data.apps;
            setItemBlogs(items);

        })

       const CommentsItems = CommentsRequest.get('http://localhost:3000/Data/comments.json');
       CommentsItems.then(res=>{
           const items = res.data.apps;
           setItemComments(items);

       })















    },[])
    return (
        <div className='container-main'>
            <div className='content-box'>
                <div className='description-box'>
                    <span>معرفی برنامه</span>
                </div>
                <div className='app-description-box'>
                    <div className='app-description-box-desc'>
                        <div><img src={`/Images/mainimages/apps/${itemProduct.img}`}></img></div>
                       <div>
                           <span className='app-description-box-desc-title'>{itemProduct.name}</span>
                           <span className='app-description-box-desc-category'>{itemProduct.interview}</span>
                           <span className='app-description-box-desc-version'>{itemProduct.version}</span>
                           <span className='app-description-box-desc-download'><a href={'#'}>نصب از بازار</a> </span>
                       </div>
                    </div>
                    <div className='app-description-box-details'>
                        <div className='app-description-box-details-item'>
                            <span>{itemProduct.size} مگابایت</span>
                            <span>حجم</span>
                        </div>
                        <div className='app-description-box-details-item'>
                            <span>{itemProduct.category}</span>
                            <span>دسته بندی</span>
                        </div>
                        <div className='app-description-box-details-item'>
                            <span>{itemProduct.rate}</span>
                            <span>امتیاز(ستاره)</span>
                        </div>
                        <div className='app-description-box-details-item'>
                            <span>{itemProduct.download_count}</span>
                            <span> دانلود</span>
                        </div>

                    </div>

                </div>
                <div className={'other-pictures-section'}>

                        <SliderName title={'عکس های بیشتر'} href={'#'}></SliderName>
                        <div className='slider-section'>
                            <Swiper
                                // install Swiper modules
                                modules={[ Navigation,A11y,Autoplay]}

                                navigation
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                autoplay = {{
                                    "delay": 7500,
                                    "disableOnInteraction": false
                                }}
                                breakpoints={{
                                    "640": {
                                        "slidesPerView": 2,
                                        "spaceBetween": 20
                                    },
                                    "768": {
                                        "slidesPerView": 3,
                                        "spaceBetween": 40
                                    },
                                    "1024": {
                                        "slidesPerView": 4,
                                        "spaceBetween": 50
                                    },
                                    "1400": {
                                        "slidesPerView": 7,
                                        "spaceBetween": 8
                                    }
                                }}
                            >







                                {
                                    itemProduct.otherImage ? itemProduct.otherImage.map(item=>( <SwiperSlide><OtherImageItem img={item.img} ></OtherImageItem></SwiperSlide>)):null
                                }







                            </Swiper>

                        </div>

                </div>
                <div className={'description-section'}>
                    <SliderName title={'معرفی برنامه'} href={'#'}></SliderName>
                    <div className='description-section-main'>
                        <p className={'description-section-main-p'}>{itemProduct.description}</p>
                        <ul className='description-section-main-ul'>
                            <span><i className={'bi bi-circle-fill'}></i>امکانات این برنامه<i className={'bi bi-circle-fill'}></i> </span>
                            {

                                <ul>
                                    {
                                        itemProduct.features ? itemProduct.features.map(item=>(<li>{item.feature}</li>)):null
                                    }

                                </ul>
                            }



                        </ul>
                    </div>
                </div>
                <div className='slider-box'>
                    <SliderName title={'برنامه های مرتبط'}></SliderName>
                    <div className='slider-section'>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, A11y,Autoplay]}

                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            autoplay = {{
                                "delay": 7500,
                                "disableOnInteraction": false
                            }}
                            breakpoints={{
                                "640": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 40
                                },
                                "1024": {
                                    "slidesPerView": 4,
                                    "spaceBetween": 50
                                },
                                "1400": {
                                    "slidesPerView": 9,
                                    "spaceBetween": 50
                                }
                            }}
                        >

                            {
                                itemsProducts ? itemsProducts.slice(0,12).map(item=>(item.category === itemProduct.category)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null
                            }



                        </Swiper>

                    </div>
                </div>
                <div className='slider-box'>
                    <SliderName title={'برنامه های مشابه'}></SliderName>
                    <div className='slider-section'>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, A11y,Autoplay]}

                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            autoplay = {{
                                "delay": 7500,
                                "disableOnInteraction": false
                            }}
                            breakpoints={{
                                "640": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 40
                                },
                                "1024": {
                                    "slidesPerView": 4,
                                    "spaceBetween": 50
                                },
                                "1400": {
                                    "slidesPerView": 9,
                                    "spaceBetween": 50
                                }
                            }}
                        >
                            {
                                itemsProducts ? itemsProducts.slice(0,12).map(item=>(item.category === itemProduct.category)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null
                            }



                        </Swiper>

                    </div>
                </div>
                <div className='slider-box'>
                    <SliderName title={'دیگران نصب کرده اند'}></SliderName>
                    <div className='slider-section'>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, A11y,Autoplay]}

                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            autoplay = {{
                                "delay": 7500,
                                "disableOnInteraction": false
                            }}
                            breakpoints={{
                                "640": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 40
                                },
                                "1024": {
                                    "slidesPerView": 4,
                                    "spaceBetween": 50
                                },
                                "1400": {
                                    "slidesPerView": 9,
                                    "spaceBetween": 50
                                }
                            }}
                        >
                            {
                                itemsProducts ? itemsProducts.slice(0,12).map(item=>(item.max_download===true)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null
                            }



                        </Swiper>

                    </div>
                </div>
                <div className={'in-the-social-media'}>
                    <SliderName title={'در رسانه ها'}></SliderName>
                    <div className='in-the-social-media-main'>
                        {
                           (itemBlogs)? itemBlogs.map(item=>(item.category==itemProduct.category?<SocialItem key={item.id} img={item.img} title={item.title} interview={item.interview}></SocialItem>:null)):<div className='alert alert-warning'>پست ای مرتبط با این دسته وجود ندارد</div>
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className={'col-md-7 col-sm-12 col-12'}>
                        <div className='comments-section'>
                            <SliderName title={'نظرات کاربران'}></SliderName>


                            {
                                itemComments.map(item=>(item.title === itemProduct.id ? <CommentsItem key={item.id} user={item.user} text={item.text} date={item.date} rate={item.rate}></CommentsItem>:null))
                            }


                        </div>

                    </div>


                </div>




            </div>
        </div>
    );
};

    export default Id;