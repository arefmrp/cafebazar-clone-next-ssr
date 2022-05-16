import React, {Component} from 'react';

class OtherImageItem extends Component {
    render() {
        return (
            <div className={'other-image-item'}>
                <img src={`/Images/mainimages/otherImage/${this.props.img}`}/>
            </div>
        );
    }
}

export default OtherImageItem;