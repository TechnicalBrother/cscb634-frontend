import React from 'react'
import styled from 'styled-components'

const Input = ({ value, onChange, label }) => {
    return (
        <Container>
            <Label>
                {label}
            </Label>
            <StyledInput type="text" placeholder={label} value={value} onChange={onChange} />
        </Container>
    )
}

export default Input

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const StyledInput = styled.input`
    border: 1px solid black;
    border-radius: 8px;
    padding: 4px;
`

const Label = styled.label`
`