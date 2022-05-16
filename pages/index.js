import React,{useEffect,useState} from "react";


import Head from 'next/head'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from '../styles/Home.module.css'
import SliderName from "../Components/SliderName";
import Product from "../Components/Product";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryItem from "../Components/CategoryItem";
import AdsItem from "../Components/AdsItem";
import HomeAdsRequest from "../Request/homeAdsRequest";
import ProductsItemRequest from "../Request/ProductsItemRequest";


export default function Home() {
    const [appAds,setAppAds] = useState([]);
    const [allProducts,setAllProducts] = useState([])
    useEffect(()=>{
        const apps = ProductsItemRequest.get('http://localhost:3000/Data/products.json');
        apps.then(res=>{
            const data = res.data.apps;
            setAllProducts(data);
        })





        const HAData = HomeAdsRequest.get('http://localhost:3000/data/ads.json');
        HAData.then(res=>{
            const dataZ = res.data.apps ;
            console.log('//////////')
            setAppAds(dataZ)
        })


    },[])
  return (
      <div className='container-main'>
        <div className='content-box'>


          <div className='description-box'>
            <span>برنامه ها</span>
          </div>

         <div className='slider-box'>
             <SliderName title={'پرفروش ها'} href={'./product'}></SliderName>
             <div className='slider-section'>
                 <Swiper
                     // install Swiper modules
                     modules={[Navigation, A11y,Autoplay]}

                     navigation
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                     autoplay = {{
                         "delay": 5500,
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
                         allProducts ? allProducts.slice(0,12).reverse().map(item=>(item.best_sell===true)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null
                     }


                 </Swiper>

             </div>
         </div>
         <div className='slider-box'>
             <SliderName title={'پر دانلود ترین ها'}></SliderName>
             <div className='slider-section'>
                 <Swiper
                     // install Swiper modules
                     modules={[Navigation, A11y,Autoplay]}

                     navigation
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                     autoplay = {{
                         "delay": 5500,
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
                         allProducts ? allProducts.slice(0,12).map(item=>(item.max_download===true)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null
                     }





                 </Swiper>

             </div>
         </div>
         <div className='slider-box'>
                <SliderName title={'برنامه ای کم حجم '}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 5500,
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

                            allProducts ? allProducts.slice(0,12).map(item=>(item.min_size_apps===false)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null



                        }
                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
                <SliderName title={'برنامه های منتخب'}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 5500,
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

                            allProducts ? allProducts.slice(0,12).map(item=>(item.best_selected_apps===true)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                        }


                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
            <SliderName title={'بیشترین امتیاز'}></SliderName>
            <div className='slider-section'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y,Autoplay]}

                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay = {{
                        "delay": 4500,
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

                        allProducts ? allProducts.slice(0,12).map(item=>(item.rate>=50)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                    }
                </Swiper>

            </div>
        </div>
         <div className='slider-box'>
                <SliderName title={'برنامه ی  بیمه '}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 3500,
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

                            allProducts ? allProducts.slice(0,12).map(item=>(item.insurance_apps === true)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                        }



                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
            <SliderName title={'پرفروش ترین ها'}></SliderName>
            <div className='slider-section'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y,Autoplay]}

                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay = {{
                        "delay": 1500,
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

                        allProducts ? allProducts.slice(0,12).map(item=>(item.download_count>=50000)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                    }

                </Swiper>

            </div>
        </div>
         <div className='slider-box'>
                <SliderName title={'شبکه های اجتماعی'}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 3500,
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

                            allProducts ? allProducts.slice(0,12).map(item=>(item.social_apps ===true)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                        }



                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
            <SliderName title={'برنامه های مربوط به امور مذهبی'}></SliderName>
            <div className='slider-section'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y,Autoplay]}

                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay = {{
                        "delay": 1500,
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

                        allProducts ? allProducts.slice(0,12).map(item=>(item.category ==="مذهبی")?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                    }



                </Swiper>

            </div>
        </div>
         <div className='slider-box'>
                <SliderName title={'اپلیکیشن های مربوط به ورزش'}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 3500,
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

                            allProducts ? allProducts.slice(0,12).map(item=>(item.category === "سفر")?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                        }




                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
                <SliderName title={'پرفروش ترین ها'}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 3500,
                            "disableOnInteraction": false
                        }}
                        breakpoints={{
                            "640": {
                                "slidesPerView": 1,
                                "spaceBetween": 20
                            },
                            "768": {
                                "slidesPerView": 2,
                                "spaceBetween": 40
                            },
                            "1024": {
                                "slidesPerView": 3,
                                "spaceBetween": 50
                            },
                            "1400": {
                                "slidesPerView": 4,
                                "spaceBetween": 50
                            }
                        }}
                    >



                        {
                            appAds.map(item=>( <SwiperSlide><AdsItem img={item.img} link={'undefind'}></AdsItem></SwiperSlide>
                            ))
                        }




                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
                <SliderName title={'برنامه ای کم حجم '}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 5500,
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

                            allProducts ? allProducts.slice(0,12).map(item=>(item.min_size_apps===true)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null



                        }
                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
                <SliderName title={'برنامه های منتخب'}></SliderName>
                <div className='slider-section'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y,Autoplay]}

                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay = {{
                            "delay": 5500,
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

                            allProducts ? allProducts.slice(0,12).map(item=>(item.best_selected_apps===false)?(<SwiperSlide><Product key={item.id} id={item.id} img={item.img} name={item.name} category={item.category}></Product></SwiperSlide>):null):null




                        }


                    </Swiper>

                </div>
            </div>
         <div className='slider-box'>
                <SliderName title={'دسته بندی ها'} href={'./category'}></SliderName>
                <div className='category-section'>
                    <div className='row'>
                        <div className={'col-md-4 col-sm-6 col-12'}><CategoryItem title={'آشپزخانه'} filter={'آشپزخانه'}></CategoryItem></div>
                        <div className={'col-md-4 col-sm-6 col-12'}><CategoryItem title={'سلامتی'} filter={'سلامتی'}></CategoryItem></div>
                        <div className={'col-md-4 col-sm-6 col-12'}><CategoryItem title={'فیلمبرداری و عکاسی'} filter={'فیلمبرداری و عکاسی'}></CategoryItem></div>
                        <div className={'col-md-4 col-sm-6 col-12'}><CategoryItem title={'شبکه های اجتماعی'} filter={'شبکه های اجتماعی'}></CategoryItem></div>
                        <div className={'col-md-4 col-sm-6 col-12'}><CategoryItem title={'خرید'} filter={'خرید'}></CategoryItem></div>
                        <div className={'col-md-4 col-sm-6 col-12'}><CategoryItem title={'امور مالی'} filter={'امور مالی'}></CategoryItem></div>



                    </div>
                </div>
            </div>

























        </div>
      </div>
  )
}
