class InitiativesController < ApplicationController
  def index
    render locals: {initiatives: curr_account.initiatives}
  end

  def show
    render locals: {initiative: curr_account.initiatives.find(params[:id])}
  end
end
