import styled from "styled-components"

export const Container = styled.header`

    display: flex;
    align-items: center;
    flex-direction: column;

    header {
        width: 40rem;
        margin: 5.25rem 0 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header img {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 1.87rem;
        margin-left: 0.43rem;
    }

    header div {
        display: flex;
        align-items: center;
    }

    input {
        width: 40rem;
        padding: 1.5rem;

        background: #e6e6e6;
        border-radius: 0.31rem;
        border: none;
        
        font-size: 1rem;
    }

    button {
        width: 40rem;
        padding: 1.5rem;

        background: #ea4c89;
        color: #fff;

        border-radius: 0.31rem;
        margin: 0.75rem 0 5.25rem;
        border: none;

        font-size: 1rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        } 
    }
`