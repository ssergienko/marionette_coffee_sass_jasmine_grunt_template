(function() {
  GithubApp.module("GithubApp.Contributers", function(Contributers) {
    return Contributers.Controller = {
      showList: function() {
        var contributers;
        window.spinner = GithubApp.spinner.wait();
        return contributers = new Contributers.ContributersModel().fetch().done(this.success).error(this.error);
      },
      success: function(contributersList) {
        var contributersListView;
        if (contributersList && contributersList.length > 0) {
          if (!contributersListView) {
            contributersListView = new Contributers.ContributersListView({
              collection: new Backbone.Collection(contributersList)
            });
            contributersListView.render();
          }
        } else {
          console.log('Couldn`t recive contributers');
        }
        return window.spinner.destroy();
      },
      error: function(message) {
        console.log(message);
        return window.spinner.destroy();
      },
      test: function() {
        return 'test';
      }
    };
  });

}).call(this);
