import React from 'react'
import PropTypes from 'prop-types';
import Link from '../Link/Link'
import { StyledNavBar, LiItem } from './NavBarStyle'
import { TYPE_INPUT, TYPE_LINK } from '../../Components/Header';
import Input from '../Input/Input';

const NavBar = ({ items }) => {

    const renderTypeOfItem = (props) => {
        const { title, url, type, isIcon, icon } = props
        if (type === TYPE_LINK) {
            return <Link
                title={title}
                url={url}
                isIcon={isIcon}
                icon={icon}
            />
        }
        else if (type === TYPE_INPUT) {
            return <Input
                inputType='search'
                icon="search"
            />
        }
        return null
    }

    return (
        <StyledNavBar>
            <ul>
                {
                    items.map((item) => {
                        const { id, idItem } = item
                        return (
                            <LiItem key={id} id={idItem}>
                                {renderTypeOfItem(item)}
                            </LiItem>
                        )
                    })
                }

            </ul>
        </StyledNavBar>
    )
}

NavBar.propTypes = {
    items: PropTypes.arrayOf(function (propValue, key, componentName, propFullName) {
        const item = propValue[key]
        const idProperty = item.hasOwnProperty('id')
        const titleProperty = item.hasOwnProperty('title')
        const typeProperty = item.hasOwnProperty('type')

        if (!idProperty || !titleProperty || !typeProperty) {
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    })
}
export default NavBar