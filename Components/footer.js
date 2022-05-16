import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='footer-section'>
               <div className='container-main'>
                   <div className='row'>
                       <div className='col-lg-7 col-md-6 col-xs-12 col-12 '>
                           <div className={'footer-section-row1-right'}>
                               <h3>بازار، نخستین و پرمخاطب‌ترین فروشگاه ایرانی برنامه‌ها و بازی‌های موبایلی دنیای اندروید</h3>
                               <p>صد‌ها هزار بازی ایرانی و خارجی دیتادار یا بدون دیتا را با ترافیک نیم‌بها نصب کنید و به سادگی خرید درون‌ برنامه‌ای انجام دهید. بازار مجهز به سپر امنیت است که برنامه‌ها را توسط آنتی ویروس‌ها بررسی کرده و به محض شناسایی برنامه‌ی مخرب، به کاربر اعلام می‌کند که آن برنامه را از دستگاه خود پاک کند.</p>
                           </div>
                       </div>
                       <div className='col-lg-5 col-md-6 col-xs-12 col-12 '>
                          <div className={'footer-section-row1-left'}>
                              <div>
                              <span><img src={'/Images/footer-download.png'}/></span>
                              <span>
                                  <span>
                                      <h6>دانلود اپلیکیشن بازار</h6>
                                      <p>پرمخاطب‌ترین اپ‌استور (اندروید) فارسی‌زبانان</p>
                                  </span>
                                  <div>
                                     <a href={'#'}>دانلود نسخه اندروید</a>
                                     <a href={'#'}>دانلود نسخه اندروید TV</a>
                                  </div>
                              </span>
                              </div>
                          </div>
                       </div>
                   </div><br></br>
                   <div className='dropdown-divider'></div>
                   <div className='row pt-3 pb-3'>
                       <div className='col-md-2 col-xs-6 col-12 text-center'>
                           <ul className='footer-section-row2-links'>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                           </ul>
                       </div>
                       <div className='col-md-2 col-xs-6 col-12 text-center'>
                           <ul className='footer-section-row2-links'>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                           </ul>
                       </div>
                       <div className='col-md-2 col-xs-6 col-12 text-center'>
                           <ul className='footer-section-row2-links'>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                           </ul>
                       </div>
                       <div className='col-md-2 col-xs-6 col-12 text-center'>
                           <ul className='footer-section-row2-links'>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                               <li><a href='#'>لینک 1</a></li>
                           </ul>
                       </div>
                       <div className='col-md-4 col-xs-6 col-12 text-center'>
                           <div className='footer-section-row2-images'>
                               <div className='footer-section-row2-images-box'>
                                   <span><img src={'/Images/Samandehi.png'}/></span>
                                   <span><img src={'/Images/logo-enamad.png'}/></span>

                               </div>
                           </div>
                       </div>

                   </div><br></br>
                   <div className='dropdown-divider'></div>
                   <div className='row'>
                       <div className='col-md-7 col-sm-6 col-12'>
                           <div className='footer-section-row3-right'>
                               <p>
                                   تمامی حقوق این سایت متعلق به شرکت آوای همراه هوشمند هزاردستان (فروشگاه برنامه‌های موبایلی اندروید بازار) است.
                               </p>
                           </div>
                       </div>
                       <div className='col-md-5 col-sm-6 col-12'>
                           <div className='footer-section-row3-left'>
                               <span><a href={'#'}><i className="bi bi-twitter"></i></a> </span>
                               <span><a href={'#'}><i className="bi bi-instagram"></i></a> </span>
                               <span><a href={'#'}><i className="bi bi-telegram"></i></a> </span>

                           </div>
                       </div>

                   </div>
                   <div className='layer'></div>








               </div>
            </div>
        );
    }
}

export default Footer;