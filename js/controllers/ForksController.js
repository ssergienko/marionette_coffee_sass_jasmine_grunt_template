(function() {
  GithubApp.module("GithubApp.Forks", function(Forks) {
    return Forks.Controller = {
      showList: function() {
        var contributers;
        window.spinner = GithubApp.spinner.wait();
        return contributers = new Forks.ForksModel().fetch().done(this.success).error(this.error);
      },
      success: function(forksList) {
        var forksListView;
        if (forksList && forksList.length > 0) {
          if (!forksListView) {
            forksListView = new Forks.ForksListView({
              collection: new Backbone.Collection(forksList)
            });
            forksListView.render();
          }
        } else {
          console.log('Couldn`t recive forks');
        }
        return window.spinner.destroy();
      },
      error: function(message) {
        console.log(message);
        return window.spinner.destroy();
      }
    };
  });

}).call(this);
