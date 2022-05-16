import React, {Component} from 'react';

class AppItemFeatures extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.features.map(item=>(<li>1</li>))
                    }

                </ul>
            </div>
        );
    }
}

export default AppItemFeatures;