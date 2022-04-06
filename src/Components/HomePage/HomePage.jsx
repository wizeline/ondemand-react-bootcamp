import React from 'react'
import Carousel from '../Carousel/Carousel'
import Grid from '../Grid/Grid'
import Slider from '../Slider/Slider'

const HomePage = (props) => {
    const {
        isLoading,
        sliderData,
        carouselData,
        gridData,
    } = props
    if (isLoading) { return 'Loading...' }

    return (
        <>
            <Slider data={sliderData} />
            <Carousel data={carouselData} />
            <Grid data={gridData} />
        </>
    )
}

export default HomePage
