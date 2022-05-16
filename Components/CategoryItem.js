import React, {Component} from 'react';
import Link from "next/link";

class CategoryItem extends Component {
    render() {
        return (
            <Link href={`./category/filter/${this.props.filter}`}>
            <a  className='categoryItem-section shadow-sm'>
                <span className='categoryItem-name'>{this.props.title}</span>
                <span className='categoryItem-icon'><i className="bi bi-chevron-left"></i></span>
            </a>
            </Link>
        );
    }
}

export default CategoryItem;