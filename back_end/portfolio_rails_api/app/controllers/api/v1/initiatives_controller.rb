class Api::V1::InitiativesController < Api::V1::ApplicationController
  def index
    render json: Initiative.all
  end

  def show
    render json: Initiative.find(params[:id])
  end
end