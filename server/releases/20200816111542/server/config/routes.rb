Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      root 'welcome#index'

      post 'refresh', controller: :refresh, action: :create
      post 'get_user', controller: :refresh, action: :get_user
      post 'signin', controller: :signin, action: :create
      post 'signup', controller: :signup, action: :create
      delete 'signin', controller: :signin, action: :destroy
    end
  end
end
