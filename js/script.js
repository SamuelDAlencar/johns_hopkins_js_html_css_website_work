$(document).ready(function () {
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});

(function (global) {
	var dc = {};

	var homeHtml = "snippets/home-snippet.html";
	var allCategoriesUrl ="https://davids-restaurant.herokuapp.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";

	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};
	
	var showLoading = function (selector) {
		var html = "<div class ='text-center'>";
		html += "<img src='images/ajax-loader.gif'></div>";
		insertHtml(selector, html);
	};

	var insertProperty = function (string, propName, Propvalue) {
		var propToReplace = "{{" + propName + "}}";
		string = string
		.replace(new RegExp(propToReplace, "g"), propValue);
		return string;
	}

	document.addEventListener("DOMContentLoaded", function (event) {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest (
			homeHtml,
			function (responseText) {
				document.querySelector("#main-content")
				.innerHTML = responseText;
			},
		false);
	});

	dc.loadMenuCategories = function () {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
		allCategoriesUrl,buildAndShowCategoriesHTML);
	};

	function buildAndShowCategoriesHTML (categories) {

	$ajaxUtils.sendGetRequest(
		categoryHtml,
		function (categoriesTitleHtml) {
			$ajaxUtils.sendGetRequest(
				categoryHtml,
				function (categoryHtml) {
			var categoriesViewHtml =
			buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
			insertHtml("#main-content", categoriesViewHtml);
		},
		false);
	},
	false);
}

function buildCategoriesView 

	global.$dc = dc;
})(window);

