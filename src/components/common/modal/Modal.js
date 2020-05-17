import React,{useState} from 'react';
import styled from 'styled-components';
import { logos } from '../images';
import { dropShadow } from '../effects';
const StyledWrapper = styled.div`
    display : flex ;
    flex-direction : column;
    position : fixed ;
    justify-content :center;
    align-items : center;
    width : 50vw;
    left : 25vw;
    top : 20vh;
    font-family : var(--font);
    background-color : #fafafa;
    ${dropShadow}
    opacity : 0;
    padding : 50px;
    z-index : 999;
    text-align : center;
    border-radius : 100px;  
    border : 2px solid inherit;
   
    transform : translateY(-100vh);
    animation : fade 0.5s ease-out forwards ;
    &.close {
        animation : fade 0.5s ease-out backwards 1;
    }
    @media screen and (max-width: 768px) {
        top : 2vh;
        width: 80vw ;
        left : 10vw; 
        margin : 10% auto;
        max-width : 90% !important ;
    }
    @keyframes fade {
        from {
            transform : translateY(-100vh);
           opacity : 0
        }
        to {
            transform : translateY(0vh);
            opacity : 1;
        }
    }
    .modal-header {
        background-color : inherit;
    }
    .modal-body {
        background-color : inherit;
        color : var(--grey-dark)
    }
    .modal-footer {
        width : 100%;
        justify-content : space-around;
        display : flex ;
        button {
            color : inherit;
            border-radius : 10px;
            outline : 0;
            border : none;
            padding : 1vw 2vw;
            cursor : pointer ;
            transition : transform 1s ease;
            &:hover {
                transform : scale(1.2)
            }
        }
        .btn-cancel {
            background : var(--red)
        }
        .btn-continue {
            color :white;
            background : var(--green)
        }

    }
`
const Modal = (props) => {
    const [close,setClose] = useState(false);
    return (
        <StyledWrapper className={`${close ? 'close' : ""}`} >
                <div className="modal-header">
                    <img src={props.error ? logos.loading : logos.PhoneGDGLogo} width="100px" height="100px" alt="logo"></img>
                </div>
                <div className="modal-body">
                    <p>
                      {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                   
                    <button className="btn-continue" onClick={e=> {
                        props.close(e);
                        setClose(true)
                    }}>continue</button>
                </div>
          
        </StyledWrapper>
    )
}

export default Modal;
