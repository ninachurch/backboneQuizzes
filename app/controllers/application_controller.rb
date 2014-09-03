class ApplicationController < ActionController::API
  def index
    demo_quiz = { quiz_id: 1,
                  quiz_title: "Why is your momma smart?",
                  options: ["she went to college", "born that way", "badass mama", "she is not actually smart"],
                  correct_answer: 2 }
    render json: demo_quiz.to_json
  end

end
