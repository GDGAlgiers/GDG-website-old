/// navbar logos
import GDGLogo from '../../images/gdg_algiers.png';
import PhoneGDGLogo from '../../images/icons/phonelogo.png';
/// box icons : 
import arrow from '../../images/icons/arrow.svg'
import cross from '../../images/icons/cross.svg'
import dots from '../../images/icons/dots.svg'
import icon1 from '../../images/icons/icon1.svg'
import icon2 from '../../images/icons/icon2.svg'
import icon3 from '../../images/icons/icon3.svg'
import losange from '../../images/icons/losange.svg'
import percentage from '../../images/icons/percentage.svg'
import plus from '../../images/icons/plus.svg'
import triangle from '../../images/icons/triangle.svg'
/// menu icons 
import close from '../../images/icons/close.svg'
import menu from '../../images/icons/menu.svg'


import React from 'react';

const Menu= {
    menu,
    close
}
const BoxIcons = {
     arrow ,
 cross,
 dots ,
 icon1 ,
 icon2 ,
 icon3 ,
 losange ,
 percentage ,
 plus,
 triangle 
} 
const logos = {
GDGLogo , PhoneGDGLogo
}




/// used emojis
const HeartEmoji = <span role="img" >❤️</span>
const CoffeeEmoji = <span role="img">☕</span>
const SadFaceEmoji = <span role="img">🥺</span>
const WinkFaceEmoji = <span role="img">😉</span>
const emojis = {
    HeartEmoji,
    CoffeeEmoji,
    SadFaceEmoji,
}
export {
    logos , 
    BoxIcons ,
    Menu ,
    emojis
}