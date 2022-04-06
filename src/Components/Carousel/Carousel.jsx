import React, { useState } from 'react'
import './Carousel.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Item from './Item'
import UserWindow from '../../utils/hooks/UserWindow'

const Carousel = (props) => {
    const { data: { results: items, results_size } } = props
    const [currentImage, setCurrent] = useState(0)
    const { windowWidth } = UserWindow()
    const nextSlide = () => {
        setCurrent(currentImage >= results_size - 2 ? 0 : currentImage + 1)
    }
    const prevSlide = () => {
        setCurrent(currentImage <= 0 ? results_size - 1 : currentImage - 1)
    }
    const isMobileScreenSize = () => {
        return !!(windowWidth <= '768')
    }
    const getActiveItem = (index, currentImage) => {
        if (isMobileScreenSize() && index === currentImage) {
            return 'active width100'
        }
        else if (!isMobileScreenSize() && (index === currentImage || index === currentImage + 1)) {
            return 'active width50'
        }
        return ''
    }
    if (items === undefined || items.length <= 0 || results_size <= 0) return null
    return (
        <div className='carouselContainer'>
            <div className="dataContainer">
                {
                    items.map((item, index) => {
                        const { id, data: { main_image, name } } = item
                        const { alt, url } = main_image
                        return <div key={id}
                            className={`itemContainer ${getActiveItem(index, currentImage)}`}>
                            <Item
                                name={name}
                                alt={alt}
                                url={url}
                                isMobileSize={isMobileScreenSize()}
                            />
                        </div>
                    })
                }
            </div>
            <div className="controls">
                <AiOutlineLeft className='leftArrow control' onClick={prevSlide} />
                <AiOutlineRight className='rightArrow control' onClick={nextSlide} />
            </div>
        </div>
    )
}

export default Carousel
