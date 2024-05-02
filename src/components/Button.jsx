import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick, type }) => {
    return (
        <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
    )
}

export default Button

const StyledButton = styled.button`
    padding: 4px;
    box-sizing: border-box;
    background-color: black;
    border-radius: 8px;
    color: white;
    outline: 0;
    border: 1px solid grey;
`