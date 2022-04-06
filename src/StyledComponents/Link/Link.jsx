import React from 'react'
import StyledLink from './LinkStyle'
import renderIcons from './utils'

const Link = (props) => {
    const { title, url, isIcon = false, icon } = props
    return (
        <StyledLink href={url}>
            {
                isIcon ? renderIcons(icon) : title
            }
        </StyledLink>
    )
}

Link.prototypes = {
    // items: PropTypes.shape({
    //     id: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     url: PropTypes.string.isRequired,
    //     type: PropTypes.string.isRequired,
    // })
}
export default Link