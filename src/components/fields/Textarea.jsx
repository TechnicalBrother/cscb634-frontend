import React from 'react'
import styled from 'styled-components'

const Textarea = ({ value, onChange, label }) => {

    return (
        <Container>
            <Label>
                {label}
            </Label>
            <StyledTextarea type="text" placeholder={label} value={value} onChange={onChange} />
        </Container>

    )
}

export default Textarea

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const StyledTextarea = styled.textarea`
    border: 1px solid black;
    border-radius: 8px;
    padding: 4px;
`

const Label = styled.label`
`