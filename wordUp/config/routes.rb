Rails.application.routes.draw do
  
  post '/users/login', to: 'authentication#login'
  get '/users/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

 end
