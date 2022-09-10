import { Container } from "./styles";  

export function Card (props:any) {
    return (
        <Container>
        <strong>{props.name}</strong>
        <small>{props.time}</small>
        </Container>
    )
}