import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import ArticleList from './ArticleList';
import CreateArticle from './CreateArticle';

const Article = ({match}) => {
	console.log(match.url, 'match')
	return 	<Switch>
				<Route exact path={`/admin/article`} component={ArticleList} />
				<Route exact path={`/admin/create_article`} component={CreateArticle} />
			</Switch>
}

export default Article;