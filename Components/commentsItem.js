import React, {Component} from 'react';
import isTableElement from "@popperjs/core/lib/dom-utils/isTableElement";

class CommentsItem extends Component {
    render() {
        const starItems = [];
        function forStar(num){
            for (let i=1;i<=num;i++){

                starItems.push(i)

            }

        }
        return (
            <div className='comments-item'>
                <div className={'comments-item-row1'}>
                    <span><img src={`/Images/user1.png`}></img></span>
                    <span>
                        <h5>{this.props.user}</h5>
                        <h6>{this.props.date}</h6>
                    </span>
                    <span>
                        <ul className='star-section'>
                            {
                                forStar(this.props.rate)
                            }
                            {
                               starItems.map(item=>(<i className={'bi bi-star-fill'}></i>))

                            }

                        </ul>
                    </span>
                </div>
                <div className={'comments-item-row2'}>
                   <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default CommentsItem;