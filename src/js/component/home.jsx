import propTypes from "prop-types";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div id="cajita" className="d-flex justify-content-center">
				<Post url="https://i.pinimg.com/originals/19/80/34/198034b0276ec4242dc003c13d328e9e.jpg" />
				<Post url="https://i.pinimg.com/originals/c9/57/82/c95782e79c46a5fabed34f6cd809f8ae.jpg" />
				<Post url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTV5RKjkKiDMTS4OcWr_GTK6O1WXu2UiARlt5JJ5aI9XAS85G_8GdZnraeGH8DMUEG2Pc&usqp=CAU" />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
/*Navbar*/
const Navbar = () => {
	return (
		<div>
			<nav
				id="mainnav"
				className="navbar sticky-top navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand">
						<a id="navtitle" className="navbar-brand" href="#">
							Start Bootstrap
						</a>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-ion"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<button
									type="button"
									className="btn btn-primary"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal">
									Create a new post
								</button>
							</li>

							<li className="nav-item dropstart">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									<i className="fa-solid fa-gear"></i>
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink">
									<li>
										<a className="dropdown-item" href="#">
											Profile
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Feedback
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Settings
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

/*Header Container*/
const Header = () => {
	return (
		<div id="header" className="container">
			<h1>A Warm Welcome!</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged.
			</p>
			<button id="headerbutton" type="button" className="btn btn-primary">
				Call to action!
			</button>
		</div>
	);
};

/*Post*/
const Post = (props) => {
	return (
		<div className="card p-3 align-self-end">
			<img src={props.url} />
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.texto}</p>
				<a href="#" className="btn btn-primary">
					¡Amazing!
				</a>
			</div>
		</div>
	);
};

/*Footer*/
const Footer = () => {
	return (
		<div className="fixed-bottom">
			<p id="pfooter">Copyright © Chris 2022</p>
		</div>
	);
};

export default Home;
