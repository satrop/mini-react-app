import icon2 from '../assets/reactjs-icon2.svg';

export default function Main() {
	return (
		<main>
			<div className="header">Fun facts about React</div>
			<ul className="main__ul">
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>
					Powers thousands of enterprise apps, including mobile apps
				</li>
			</ul>
			<img className="background-icon" src={icon2} alt="" />
		</main>
	);
}
