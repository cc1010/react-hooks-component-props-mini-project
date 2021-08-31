import React from "react";
import Article from "./Article";

// Article.defaultProps = {
// 	date: "January 1, 1970",
// };
function ArticleList(props) {
	const renderPosts = props.posts.map((post) => (
		<Article
			title={post.title}
			date={post.date}
			preview={post.post}
			key={post.id}
			minutes={post.minutes}
		/>
	));

	return <main>{renderPosts}</main>;
}
export default ArticleList;
