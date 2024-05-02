import { useState, useContext } from "react";
import { useCartDetails } from "../../context/useCartDetails";

import LogoSneakes from "../../assets/images/logo.svg";
import AvatarImage from "../../assets/images/image-avatar.png";

import MenuIcon from "../../components/icons/MenuIcon";
import CartIcon from "../../components/icons/CartIcon";

import NavLinkHeader from "../../components/header/NavLinkHeader";

import CartDetailsHeader from "../../components/header/CartDetailsHeader";
const MainHeader = () => {
    const { totalQuantityProduct } = useContext(useCartDetails);

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenDetailsCart, setOpenDetailsCart] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    return (
        <>
            <header className="container relative mx-auto flex items-center gap-8 p-4  ">
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={LogoSneakes}
                    alt="Logo sneakers"
                    className="mr-auto mb-1 h-5 md:mr-0"
                />
                <nav
                    className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
                        isOpenMenu
                            ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8"
                            : "hidden md:flex" 
                    }`}
                >
                    <button
                        className="mb-12 md:hidden"
                        onClick={handleCloseMenu}
                    ></button>

                    <div className=' md:block  '>
                        <ul className="ml-[70px] flex gap-5 sm:text-[#D0D1D4] ">
                            {[
                                "Collections",
                                "Men",
                                "Women",
                                "About",
                                "Contact",
                            ].map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className={`sm:hidden ${
                            isOpenMenu ? "block" : "hidden"
                        }`}
                    >
                        <NavLinkHeader text="Collections" />
                        <NavLinkHeader text="Men" />
                        <NavLinkHeader text="Women" />
                        <NavLinkHeader text="About" />
                        <NavLinkHeader text="Contact" />
                    </div>
                </nav>
                <div className="flex gap-4">
                    <button
                        onClick={() => setOpenDetailsCart(!isOpenDetailsCart)}
                        className="relative"
                    >
                        <CartIcon />
                        <span className="rigth-0 absolute top-0 translate-x-1 rounded-full bg-orange-primary px-2 text-xs font-bold text-white">
                            {totalQuantityProduct}
                        </span>
                    </button>
                    <img src={AvatarImage} alt="" className="w-10" />
                    {isOpenDetailsCart && <CartDetailsHeader />}
                </div>
            </header>
            <span className="container mx-auto hidden h-[2px] w-full bg-gray-300 md:block "></span>
            <span className=" text-white sm:py-0">......................................</span>
        </>
    );
};
export default MainHeader;
