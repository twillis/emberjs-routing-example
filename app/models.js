/*global App, Ember*/
App.Contributor = Ember.Object.extend();
App.Contributor.reopenClass({
  allContributors: [],
  list: function(){
    $.ajax({
      url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
      dataType: 'jsonp',
      context: this,
      success: function(response){
        response.data.forEach(function(contributor){
          this.allContributors.addObject(App.Contributor.create(contributor));
        }, this);
      }
    });
    return this.allContributors;
  }
});