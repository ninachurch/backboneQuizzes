class ApplicationController < ActionController::API
  def index
    render json: "hello"
  end

end
