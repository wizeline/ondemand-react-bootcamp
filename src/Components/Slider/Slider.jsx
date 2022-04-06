import React, { useState } from 'react'
import './Slider.scss'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import SlideItem from './SlideItem';


const Slider = (props) => {
    const { data } = props
    const { results: items, results_size } = data
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide(currentSlide === results_size - 1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? results_size - 1 : currentSlide - 1)
    }

    if (items === undefined || items.length <= 0) return null
    if (results_size <= 0) return null
    return (
        <div className='sliderContainer'>
            <AiOutlineLeftCircle className='leftArrow' onClick={prevSlide} />
            <AiOutlineRightCircle className='rightArrow' onClick={nextSlide} />
            {
                items.map((item, index) => {
                    const { id, data } = item
                    const { main_image: { url, alt }, title, description } = data
                    const { text: descText } = description[0]
                    return (
                        <SlideItem key={id}
                            index={index}
                            currentSlide={currentSlide}
                            url={url}
                            alt={alt}
                            title={title}
                            descText={descText}
                        />
                    )
                })
            }
        </div>
    )
}

Slider.prototype = ({

})

export default Slider
