import {css} from  'styled-components';
import { dropShadow } from '../effects';

const bounce = css`

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