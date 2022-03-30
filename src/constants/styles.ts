import { keyframes, Keyframes } from 'styled-components';

/*
100%: -75%
75%: -30%
50%: 0%
25%: 30%
0%: 70%;
*/

export const PLEIN: Keyframes = keyframes`
    @keyframes fill-up {
    to {
        top: -70%;
    }
}`;

export const PRESQUE_PLEIN: Keyframes = keyframes`
    @keyframes fill-up {
    to {
        top: -30%;
    }
}`;

export const MILIEUX: Keyframes = keyframes`
    @keyframes fill-up {
    to {
        top: 0%;
    }
}`;

export const PRESQUE_VIDE: Keyframes = keyframes`
    @keyframes fill-up {
    to {
        top: 30%;
    }
}`;
export const VIDE: Keyframes = keyframes`
    @keyframes fill-up {
    to {
        top: 80%;
    }
}`;
