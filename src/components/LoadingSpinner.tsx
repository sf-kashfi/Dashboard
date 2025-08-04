/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react';

interface LoadingSpinnerProps {
    isDashboard?: boolean;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const overlayStyle = (isDashboard: boolean) => css`
  position: ${isDashboard ? 'absolute' : 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${isDashboard ? 'transparent' : 'rgba(255, 255, 255, 0.8)'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const spinnerStyle = css`
  width: 48px;
  height: 48px;
  border: 5px solid #ccc;
  border-top-color: #1976d2;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isDashboard = false }) => {
    return (
        <div css={overlayStyle(isDashboard)}>
            <div css={spinnerStyle} />
        </div>
    );
};

export default LoadingSpinner;
