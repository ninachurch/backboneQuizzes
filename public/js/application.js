
  var QuizView = Backbone.View.extend({
  el: $("body"),

  events: {
    'click #take-quiz': 'displayQuiz'
  },

  initialize: function(){
    _.bindAll(this, 'render');
    this.render();
  },

  render: function(){
    console.log(this.el)
  },

  displayQuiz: function() {
    alert("OMGEE");
  }

})


var quizView = new QuizView();



