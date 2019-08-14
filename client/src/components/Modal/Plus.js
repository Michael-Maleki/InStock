import React from 'react';
import Plus from '../../assets/Icons/SVG/Icon-add.svg'

class Plus extends React.Component {
    render() {
        return (
            <div className='plus-box'>
                <img className='plus-box-img' src={Plus}/>
            </div>
        );
    }
}

export default Plus;