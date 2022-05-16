import React, {Component} from 'react';

class SocialItem extends Component {
    render() {
        return (
            <div className='social-item'>
                <div><img src={`/Images/mainimages/blogs/${this.props.img}`}/></div>
                <div>
                    <h5>{this.props.title}</h5>
                    <p>{this.props.interview}</p>
                </div>
            </div>
        );
    }
}

export default SocialItem;