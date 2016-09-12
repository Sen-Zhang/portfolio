class Api::V1::SessionsController < Api::V1::ApplicationController
  skip_before_action :authenticate!, only: [:create]

  def create
    account = Account.find_by(subdomain: params[:account])

    if account.blank?
      render json: {errors: ['Unknown Account'], status: :not_found} and return
    end

    user = account.users.find_by(email: params[:email])

    if user.try(:authenticate, params[:password])
      render json: {auth_token: JsonWebToken.encode({account_id: account.id,
                                                     user_id:    user.id})}
    else
      render json: {error: ['Invalid credentials']}
    end
  end
end