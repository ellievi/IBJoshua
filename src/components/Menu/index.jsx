import {Link} from "react-router-dom";
import IbjoshuaLogo from "../../assets/svg/ibjoshualogo.svg";
import MenuItem from "./menuItem";
import {HamburguerIcon} from "../../assets/svg/HamburguerIcon";
import Button from "../Button";
import { useState } from "react";

const Menu = () => {
	const [isMenuVisible, setIsMenuVisible] = useState();

    return (
			<nav className="w-full">
        <div className="flex justify-between h-24 text-white beige-orange">
					<Link to="/" className="flex">
						<img
						src={IbjoshuaLogo}
						className="ml-10"
						alt="Logo da Igreja Batista Joshua. A imagem contém uma ilustração de um peixe branco 
						e ao lado contém o título da Igreja Batista Joshua, também em branco"
						/>
					</Link>
					<div className="pr-12 hidden lg:flex items-center">
						<MenuItem />
					</div>
					<div className="flex items-center mr-10 lg:hidden">
						<Button onClick={() => setIsMenuVisible(!isMenuVisible)}>
							{isMenuVisible 
							?
							<span className="font-semibold text-white">X</span>
							:
							<HamburguerIcon />
							}
						</Button>
					</div>
					{isMenuVisible && (
						<div id="menu" className="z-40 w-full h-[calc(100vh-1px)] fixed top-20 left-0 lg:hidden beige-orange">
						<div className="flex flex-col items-stretch justify-center">
							<MenuItem isLateralMenu onClick={() => setIsMenuVisible(!isMenuVisible)}/>
						</div>
					</div>
					)}
				</div>
			</nav>
    );
}

export default Menu;