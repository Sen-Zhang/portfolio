Rails.application.routes.draw do
  root to: 'initiatives#index'

  resource :sessions
  resources :initiatives
end
