Rails.application.routes.draw do
  constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1, default: {format: :json} do

        resources :users
      end
    end
  end
end
