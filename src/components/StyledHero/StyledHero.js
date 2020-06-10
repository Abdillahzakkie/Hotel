import styled from "styled-components";
// import defaultBcg from "../../images/slider-image1.jpg";
import defaultBcg from "../../assets/hero.jpg";


const StyledHero = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)),
        url(${props => props.img ? props.img : defaultBcg}) center/cover no-repeat;
    width: 100vw;
    height: ${props => props.height ? props.height : 100}vh;
`
export default StyledHero