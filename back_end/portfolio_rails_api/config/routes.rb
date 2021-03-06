Rails.application.routes.draw do
  constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1, default: {format: :json} do

        post 'sign_in', to: 'sessions#create'

        resources :users, only: [:index, :show, :update, :destroy]
        resources :initiatives, only: [:index, :show, :update, :destroy]
      end
    end
  end
end
