require 'json_web_token'

class Api::V1::ApplicationController < ActionController::API
  include ActionController::Serialization

  before_action :authenticate!

  def curr_user
    begin
      @current_user ||= User.find(decoded_auth_token[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: ['Invalid Signature'] }, status: :unauthorized
    end
  end

  rescue_from ActiveRecord::RecordNotFound do
    render json: { status: :not_found }
  end

  private

  def authenticate!
    begin
      decoded_auth_token
      curr_user
    rescue JWT::MissingTokenError
      render json: { errors: ['Token is missing'] }, status: :unauthorized
    rescue JWT::ExpiredSignature
      render json: { errors: ['Expired Signature'] }, status: :unauthorized
    rescue JWT::VerificationError
      render json: { errors: ['Invalid Signature'] }, status: :unauthorized
    end
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header
    raise JWT::MissingTokenError if request.headers['Authorization'].blank?
    request.headers['Authorization'].split(' ').last
  end

  helper_method :curr_user
end
