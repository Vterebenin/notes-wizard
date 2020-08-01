module Api
  module V1
    class WelcomeController < ApplicationController
      def index
        @message = { 'message' => 'Hello world!' }
        render json: @message
      end
    end
  end
end
