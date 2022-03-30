import styled, { Keyframes } from 'styled-components';

const Loader = (keyframe: Keyframes) =>
  styled.div`
    animation: ${keyframe} 10s ease infinite;
  `;
export default Loader;
