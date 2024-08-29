import { useState } from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import ArrowVertical from '../ArrowVertical/ArrowVertical';
export default function Header() {
	const [userName, setUserName] = useState('Иванов Иван Иванович')
	const [iin, setIin] = useState("ИИН")
	const [language, setLanguage] = useState("RU")
	const [isDown, setIsDown] = useState(true);
	const toggleArrow = () => {
		setIsDown(!isDown);
	};
	const navigate = useNavigate();
	function goToBack(){
		navigate(-1)
	}

	return (

		<header className="header">
			<button onClick={goToBack} className="header__back-container"><div className="header__back-button"></div></button>
			<div className="header__content">
				<p className="header__user-name">{userName}</p>
				<p className="header__iin">{iin}</p>
			</div>
			<button onClick={toggleArrow} className="header__language-selector-btn">
				<div className="header__language-selected">{language}</div>
				<ArrowVertical isClick={isDown}/>
			</button>
		</header>
	);
}
