import {css} from  'styled-components';
import { dropShadow } from '../effects';

const bounce = css`
animation: bounce 0.5s ease infinite alternate;

@keyframes bounce {
  from {
    transform: scale(1) translateY(0px);
   
  }
  to {
    transform: scale(1.1) translateY(-15px);
    ${dropShadow}
    
  }
}
`

export {bounce}