import styled from "styled-components";
import errorBcg from "../../assets/hero.jpg";

const BackgroundStyle = styled.div`
    background: linear-gradient(to right, rgba(0,0,0, .5), rgba(0,0,0, .5)),
        url(${(props) => props.defaultBcg ? props.defaultBcg : errorBcg}) center/cover no-repeat;
    width: 100vw;
    height: ${props => props.height ? props.height : 100}vh;
    color: var(--white);
`
export default BackgroundStyle