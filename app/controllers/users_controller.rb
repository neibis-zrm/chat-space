class UsersController < ApplicationController

  before_action :redirect_no_user

  def index
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def redirect_no_user
    redirect_to root_path unless user_signed_in?
  end

  def user_params
    params.require(:user).permit(:name, :email)
  end

end
