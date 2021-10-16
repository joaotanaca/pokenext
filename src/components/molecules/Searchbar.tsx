import React from "react";
import Icon from "@atoms/icons";
import Logo from "@atoms/Logo";
import styled from "styled-components";

const SearchbarContainer = styled.div.attrs({
    className: "col-span-12 grid grid-cols-6 mb-4",
})`
    input {
        border: 1px solid ${({ theme }) => theme.lightGray};
        &::placeholder {
            text-align: center;
            line-height: 16px;
            font-weight: 400;
        }
    }
`;

const Searchbar: React.FC = () => {
    return (
        <SearchbarContainer>
            <Logo />
            <div className="col-span-3 flex items-center justify-end text-2xl">
                #
                <Icon name="arrow-down" size={14} className="ml-1" />
            </div>
            <div className="col-span-6 mt-3">
                <input
                    type="text"
                    className="w-full py-2 px-4 rounded-2xl"
                    placeholder="Procurar"
                />
            </div>
        </SearchbarContainer>
    );
};

export default Searchbar;
