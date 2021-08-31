import React from "react";

Article.defaultProps = {
	date: "January 1, 1970",
};

function indicator(n) {
	if (n < 30) {
		const amount = Math.ceil(n / 5) * 5;
		return "☕️".repeat(amount / 5);
	} else {
		const amount = Math.ceil(n / 10) * 10;
		return "🍱".repeat(amount / 10);
	}
}
function Article(props) {
	return (
		<article>
			<h3>{props.title}</h3>
			<small>
				`{props.date} ● {indicator(props.minutes)} {props.minutes}{" "}
				Minutes`
			</small>
			<p>{props.preview}</p>
		</article>
	);
}
export default Article;
