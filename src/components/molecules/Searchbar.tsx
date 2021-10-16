import React from "react";
import Icon from "@atoms/icons";
import Logo from "@atoms/Logo";
import styled from "styled-components";

type TProps = {
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSort: (event: React.MouseEvent<HTMLDivElement>) => void;
};

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

const Searchbar: React.FC<TProps> = ({ handleSearchChange, handleSort }) => {
    return (
        <SearchbarContainer>
            <Logo />
            <div className="col-span-3 flex justify-end text-2xl">
                <div
                    className="flex items-center cursor-pointer"
                    onClick={handleSort}
                >
                    #
                    <Icon name="arrow-down" size={14} className="ml-1" />
                </div>
            </div>
            <div className="col-span-6 mt-3">
                <input
                    type="text"
                    className="w-full py-2 px-4 rounded-2xl"
                    placeholder="Procurar"
                    onChange={handleSearchChange}
                />
            </div>
        </SearchbarContainer>
    );
};

export default Searchbar;
