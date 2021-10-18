import Badge from "@atoms/Badge";
import Icon from "@atoms/icons";
import Image from "@atoms/Image";
import useMobile from "@hooks/useMobile";
import { TPokemon } from "@interfaces/pokemon";
import { PokemonColors } from "@styles/theme";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import styled from "styled-components";

type TModalContainerProps = { type: PokemonColors };
type TProps = { pokemon: TPokemon; onClose: () => void };

const ModalContainer = styled.div.attrs({
    className: "relative block pointer-events-none open",
})<TModalContainerProps>`
    color: ${({ theme }) => theme.white};
    max-width: 540px;
    width: 100%;
    &.open {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: fixed;
        z-index: 1;
        overflow: hidden;
        padding: 40px 0;
        .modal-content {
            pointer-events: none;
            .content {
                color: ${({ theme, type }) => theme[type]};
            }
            .informations {
                color: ${({ theme }) => theme.darkGray};
            }
        }
    }
    .modal-content {
        border-radius: 20px;
        background: ${({ theme, type }) => theme[type]};
    }
    .content {
        border-radius: 20px;
        background-color: #fff;
    }
`;

const Overlay = styled(motion.div).attrs({
    className:
        "pointer-events-auto fixed w-full left-1/2 inset-y-0 cursor-pointer",
})`
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
    will-change: opacity;
    transform: translateX(-50%);
`;

const ModalPokemon: React.FC<TProps> = ({ pokemon, onClose }) => {
    const mobile = useMobile();
    const renderBadge = useMemo(
        () => pokemon.type.map((type) => <Badge type={type} key={type} />),
        [pokemon.type],
    );
    
    const renderWeaknesses = useMemo(
        () =>
            pokemon.weaknesses.map((type) => <Badge type={type} key={type} />),
        [pokemon.weaknesses],
    );
    return (
        <>
            <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                onClick={() => onClose()}
            />
            <ModalContainer type={pokemon.type[0]}>
                <motion.div
                    className="modal-content flex flex-col pointer-events-auto relative overflow-hidden h-full mx-auto"
                    layoutId={`modal-container-${pokemon.id}`}
                >
                    <Icon
                        className="absolute right-6 top-6"
                        name="pokeball"
                        color="rgba(255,255,255,0.1)"
                        size={208}
                    />
                    <div className="flex justify-between items-center pt-6 px-6">
                        <motion.p
                            className="text-2xl font-bold"
                            layoutId={`modal-title-${pokemon.id}`}
                        >
                            {pokemon.name}
                        </motion.p>
                        <motion.div
                            className="text-lg font-bold"
                            layoutId={`modal-num-${pokemon.id}`}
                        >
                            #{pokemon.num}
                        </motion.div>
                    </div>
                    <motion.div
                        style={{
                            width: "100%",
                            height: mobile ? 258 : 208,
                            zIndex: 100,
                        }}
                        layoutId={`modal-image-${pokemon.id}`}
                    >
                        <Image
                            img={pokemon.img}
                            alt={pokemon.name}
                            objectFit={{
                                desktop: "contain",
                                mobile: "contain",
                            }}
                            quality={{ desktop: "100", mobile: "100" }}
                        />
                    </motion.div>
                    <div className="content flex flex-col p-5 mx-1 mb-1 z-0">
                        <div className="badge-content flex gap-4 mx-auto">
                            {renderBadge}
                        </div>
                        <p className="font-bold text-center my-4">About</p>
                        <div className="flex justify-between gap-14 mx-auto informations">
                            <div className="grid grid-cols-2 items-center gap-2">
                                <Icon name="weight" size={32} />
                                {pokemon.weight}
                                <p className="w-full col-span-2 text-center">
                                    Weight
                                </p>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-2">
                                <Icon name="height" size={32} />
                                {pokemon.height}
                                <p className="w-full col-span-2 text-center">
                                    Height
                                </p>
                            </div>
                        </div>
                        <p className="font-bold text-center my-4">Weakness</p>
                        <div className="badge-content flex gap-4 mx-auto">
                            {renderWeaknesses}
                        </div>
                    </div>
                </motion.div>
            </ModalContainer>
        </>
    );
};

export default ModalPokemon;
