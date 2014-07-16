Rails.application.routes.draw do
  
  root to: 'welcome#index' 

  resources :places, only: [:index]

end
