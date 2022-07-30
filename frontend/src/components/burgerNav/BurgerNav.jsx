import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Burger(){
    return (
        <Container>
            <BurgerNav>
                {/* <CloseWrapper> */}
                    {/* <CustomClose onClick={() => { setBurgerStatus(false) }} /> */}
                {/* </CloseWrapper> */}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

let Container = styled.div`
    top : 0;
    left : 0;
    right : 0;
`
let BurgerNav = styled.div`
    background-color : red;
    position : fixed;
    top : 0;
    bottom : 0;
    right : 0;
    background : white;
    width : 300px;
    z-index : 1000;
    list-style : none;
    padding : 20px;
    display : flex;
    flex-direction : column;
    text-align :start;
    transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition : transform 0.3s;
    li{
        padding : 9px 0;
        border-bottom :1px solid rgba(0,0,0,0.2);
    }
    a{
        font-weight : 600;
    }
`
// let CustomClose = styled(CloseIcon)`
//     cursor : pointer;
// `
// let CloseWrapper = styled.div`
//     display : flex;
//     justify-content : flex-end;
// `

export default Burger;