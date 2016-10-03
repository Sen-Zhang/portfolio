class Api::V1::SessionsController < Api::V1::ApplicationController
  skip_before_action :authenticate!, only: [:create]

  def create
    user = User.find_by(email: params[:email])

    if user.try(:authenticate, params[:password])
      render json: {
        auth_token: JsonWebToken.encode({ user_id: user.id }),
        user:       user.first_name
      }
    else
      render json: { error: ['Invalid credentials'] }
    end
  end
end