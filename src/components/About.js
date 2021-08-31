import React from "react";

About.defaultProps = {
	image: "https://via.placeholder.com/215",
};

function About(props) {
	return (
		<aside>
			<img src={props.image} alt="blog logo"></img>
			<p>{props.about}</p>
		</aside>
	);
}
export default About;
