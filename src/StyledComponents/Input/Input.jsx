import React from 'react'
import PropTypes from 'prop-types';
import { StyledInput, Wrapper } from './InputStyle';
import { AiOutlineSearch } from "react-icons/ai";

const renderInput = (inputType, icon) => {
    if (inputType === 'search') {
        return (
            <Wrapper>
                <StyledInput type="search" placeholder='search'>
                </StyledInput>
                <AiOutlineSearch />
            </Wrapper>
        )
    }
}
const Input = ({ inputType, icon }) => {
    return (
        <>
            {renderInput(inputType, icon)}
        </>
    )
}

Input.prototype = ({
    inputType: PropTypes.string.isRequired,
    icon: PropTypes.string,
})

export default Input