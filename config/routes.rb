Rails.application.routes.draw do
  root 'boggle#index'

  namespace :api do
    namespace :v1 do
      get :boggle, to: "game#new_game", :defaults => {:format => :json}
      get ':boggle/check', to: "game#check_word", :defaults => {:format => :json}
    end
  end
end