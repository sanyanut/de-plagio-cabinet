import React, {useState} from "react";

import SideMenu from "../../components/side-menu/side-menu.component";
import TopMenu from "../../components/top-menu/top-menu.component";
import PlagiarismBlock from "../../components/plagiarism-block/plagiarism-block.component";

const PlagiarismChecker = props => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        if(isMenuOpen) {
            setMenuOpen(false)
        }
    }

    return (
        <div className='plagiarism-checker-wrapper' onClick={closeMenu}>
            <SideMenu toggleMenu={isMenuOpen}/>
            <div className='plagiarism-checker'>
                <TopMenu toggleMenu={toggleMenu}/>
                <PlagiarismBlock />
            </div>
        </div>
    )
}

export default PlagiarismChecker;