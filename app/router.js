/*global Ember, App*/
App.ContributorListRoute = Ember.Route.extend({
  model: function(){
    return App.Contributor.list();
  },
  renderTemplates: function(){
    this.render("contributor-list");
  },
  events:{
    showContributor:function(route, context){
      route.transitionTo("contributor", context);
    }
  }
});

App.ContributorRoute = Ember.Route.extend({
  model:function(context){
    return context;
  },
  renderTemplates: function(){
    this.render("contributor");
  },
  events:{
    showContributorList:function(route, context){
      route.transitionTo("contributorList");
    }
  }
});

App.Router.map(function(match){
  match("/").to("app", function(match){
    match("/").to("contributorList");
    match("/:login").to("contributor");
  });
});

