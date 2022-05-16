import React, {Component} from 'react';
import Link from "next/link";
class NotFound extends Component
{
    render()
    {
        return (
            <div className='container-main'>
            <div className='content-box'>
                <div className='notfound-section'>
                    <div><img src={'/Images/notfound.svg'}></img></div>
                    <div>متأسفانه برنامه مورد نظر شما یافت نشد.</div>
                    <div><Link href={'/'}><a>بازگشت به صفحه اصلی</a></Link> </div>
                </div>
            </div>
            </div>
        );
    }
}

export default NotFound;