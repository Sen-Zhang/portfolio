class SessionsController < ApplicationController
  skip_before_action :authenticate!, only: [:new, :create]

  def new
  end

  def create
    account = Account.find_by(subdomain: account_subdomain)
    handle_invalid_credentials && return if account.blank?

    user = account.users.find_by(email: session_params[:email])
    handle_invalid_credentials && return if user.blank?

    if user.authenticate(session_params[:password])
      cookies.permanent[:token] = JsonWebToken.encode({account_id: account.id,
                                                       user_id:    user.id})

      redirect_to root_path
    else
      handle_invalid_credentials
    end
  end

  def destroy
    reset_session
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end

  def handle_invalid_credentials
    flash.now[:error] = 'Invalid email or password'
    render :new
  end
end
