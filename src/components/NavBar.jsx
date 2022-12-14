import icon from '../assets/reactjs-icon.svg';

export default function NavBar() {
	return (
		<nav className="nav">
			<div>
				<img src={icon} alt="Icon" className="nav-logo" />
				<h1>ReactFacts</h1>
			</div>
			<h2>React Course - Project 1</h2>
		</nav>
	);
}
