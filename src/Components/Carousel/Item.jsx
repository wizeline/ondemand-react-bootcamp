import React from 'react';

const Item = (props) => {
    const { name, alt, url, isMobileSize } = props
    const getImgSizeClass = () => {
        return isMobileSize ? 'width100' : 'width50'
    }
    return <div className="container">
        <img src={url} alt={alt} className={`img ${getImgSizeClass()}`} />
        <span className='title'> {name} </span>
    </div>
}

export default Item
