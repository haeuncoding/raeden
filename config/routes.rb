Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :books, only: [:index, :create, :show, :update, :destroy]
    resources :lists, only: [:index, :create, :show, :update, :destroy]
  end

  get '*path', to: 'static_pages#frontend'
end
