import React, { useState } from 'react';
import Link from '../../StyledComponents/Link/Link';
import { CART } from '../../StyledComponents/Link/utils';
import NavBar from '../../StyledComponents/NavBar/NavBar';
import { GiHamburgerMenu } from 'react-icons/gi'
import './Header.scss'
import UserWindow from '../../utils/hooks/UserWindow';

export const TYPE_LINK = 'link'
export const TYPE_INPUT = 'input'

const itemsMenuList = [
    {
        id: 1,
        title: 'Home',
        idItem: 'home',
        url: '#',
        type: TYPE_LINK,
    },
    {
        id: 2,
        title: 'search',
        idItem: 'search',
        url: '#',
        type: TYPE_INPUT,
        icon: 'search'
    },
    {
        id: 3,
        title: 'cart',
        idItem: 'cart',
        url: '#',
        type: TYPE_LINK,
        icon: CART,
        isIcon: true
    },
]

const Header = () => {
    const [showNavBar, setShowNavBar] = useState(false)
    const { windowWidth } = UserWindow()
    const handleClickIconBurger = () => {
        setShowNavBar(!showNavBar)
    }
    const isMobile = () => {
        return (windowWidth <= 768)
    }

    return (
        <header>
            <Link url="#" title='logo' />
            {
                (
                    isMobile() && (
                        <button className='iconBurger' onClick={handleClickIconBurger}>
                            <GiHamburgerMenu />
                        </button>
                    )
                )
            }
            {
                ((showNavBar || !isMobile()) &&
                    (
                        <div className='navContainer'>
                            < NavBar items={itemsMenuList} />
                        </div>
                    )
                )
            }
        </header>
    )
}

export default Header