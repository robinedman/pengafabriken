class LoansController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: Loan.all }
    end
  end
end
