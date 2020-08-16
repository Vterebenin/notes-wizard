class Api::V1::WelcomeController < ApplicationController
  def index
    @message = { 'message' => 'Hello world!' }
    render json: @message
  end
end
