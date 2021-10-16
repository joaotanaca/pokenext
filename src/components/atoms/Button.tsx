import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
    border: 1px solid ${({ theme }) => theme.mediumGray};
`;

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => (
    <ButtonStyled
        className={`p-4 font-normal rounded-2xl text-center ${className}`}
        {...props}
    >
        {children}
    </ButtonStyled>
);

export default Button;
