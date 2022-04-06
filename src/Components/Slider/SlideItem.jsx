import React from 'react'
import PropTypes from 'prop-types'

const SlideItem = ({
    index,
    currentSlide,
    url,
    alt,
    title,
    descText,
}) => {
    return (
        <div className={`slideContainerItem ${index === currentSlide ? 'active' : ''}`}>
            {index === currentSlide && (
                <>
                    < img src={url} alt={alt} className="imgSlide" />
                    <div className="descContainer">
                        <h4 className='titleSlide'>{title}</h4>
                        <p className='descSlide'>{descText}</p>
                    </div>
                </>
            )}
        </div>
    )
}

SlideItem.prototype = ({
    index: PropTypes.string,
    currentSlide: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    descText: PropTypes.string,
})

export default SlideItem
