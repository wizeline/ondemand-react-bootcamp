import React from 'react';
import UserWindow from '../../utils/hooks/UserWindow';
import './Grid.scss'

const Grid = (props) => {

    const { data } = props
    const { results } = data
    const { windowWidth } = UserWindow()

    const getItemContainerSize = () => {
        return windowWidth <= 375 ? 'width100' : windowWidth <= 768 ? 'width50' : 'width33'
    }
    if (results === undefined || results.length <= 0) return null
    return (
        <div className="gridContainer">
            {
                results.map((item) => {
                    const { data } = item
                    const { mainimage, name, price, sku, category: { slug } } = data
                    const { alt, url } = mainimage
                    return (
                        <div key={sku} className={`itemContainer ${getItemContainerSize()}`}>
                            <div className="imgContainer">
                                <img src={url} alt={alt} className="imgItem" />
                                <p className='slug'>
                                    <span>{slug}</span>
                                </p>
                            </div>
                            <p className='name'>{name}</p>
                            <p className='price'><b>$ {price}</b></p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Grid
