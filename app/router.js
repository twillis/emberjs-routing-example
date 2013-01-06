/*global Ember, App*/
App.ContributorListRoute = Ember.Route.extend({
  model: function(){
    console.log("model...");
    return [{login:"foo", 
             contributions:"i wrote it"},
            {login:"bar", 
             contributions:"i broke it"}];
  },
  renderTemplates: function(){
    console.log("renderTemplate...");
    this.render("contributor-list");
  },
  events:{
    showContributor:function(route, context){
      console.log(route);
      console.log(context);
      route.transitionTo("contributor", context);
    }
  }
});

App.ContributorRoute = Ember.Route.extend({
  model:function(context){
    console.log(context);
    return context;
  },
  renderTemplates: function(){
    this.render("contributor");
  }
});

App.Router.map(function(match){
  console.log("routing...");
  match("/").to("app", function(match){
    match("/").to("contributorList");
    match("/:login").to("contributor");
  });
});

