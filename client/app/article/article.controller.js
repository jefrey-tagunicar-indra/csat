'use strict';
(function(){

class ArticleComponent {
  constructor($http, $scope, socket, Article) {
    this.message = 'Hello';
    this.articles = Article.list();
    this.$http = $http;
  }

$onInit() {
	//this.articles = Article.get();
    // this.$http.get('/api/articles').then(response => {
    //   this.articles = response.data;
    // });
  }

addArticle() {
    if (this.newArticle) {
      this.$http.post('/api/articles', { name: this.newArticle.name });
      this.newArticle = {};
    }
  }

deleteArticle(article) {
    this.$http.delete('/api/articles/' + article._id);
  }
}

angular.module('csatApp')
  .component('article', {
    templateUrl: 'app/article/article.html',
    controller: ArticleComponent
  });

})();
