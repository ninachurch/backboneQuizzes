var QuizView = Backbone.View.extend({
  el: $(".quiz"),

  initialize: function(){
    _.bindAll(this, 'render');
    // this.render();
  },

  render: function(){
    console.log(this.el)
  }
})

var quizView = new QuizView();
quizView.render();
