import React, {Component} from 'react';
import Link from "next/link";
class SliderName extends Component {
    render() {
        return (
            <div className={'sliderBox-title'}>
                <span>{this.props.title}</span>
                <div><Link href={`${this.props.href}`}><a >مشاهده بیشتر ..</a></Link></div>
            </div>
        );
    }
}

export default SliderName;