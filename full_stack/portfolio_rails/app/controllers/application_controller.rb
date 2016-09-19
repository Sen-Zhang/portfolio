class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  add_flash_types :success

  before_action :authenticate!

  def curr_user
    @current_user ||= User.find(decoded_auth_token[:user_id])
  end

  def curr_account
    @current_account ||= Account.find(decoded_auth_token[:account_id])
  end

  def signed_in?
    @current_user.present?
  end

  private

  def account_subdomain
    request.subdomain.split('.').first
  end

  def authenticate!
    begin
      decoded_auth_token
      curr_user
      curr_account
    rescue JWT::ExpiredSignature, JWT::VerificationError
      reset_session
    end
  end

  def decoded_auth_token
    raise JWT::VerificationError if cookies.permanent[:token].blank?
    @decoded_auth_token ||= JsonWebToken.decode(cookies.permanent[:token])
  end

  def reset_session
    cookies.permanent[:token] = nil

    redirect_to :new_sessions
  end

  helper_method :curr_user, :curr_account, :signed_in?
end
