class UsersController < ApplicationController
  skip_before_action :confirm_authentication

  def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: { error: "No active session" }, status: :unauthorized
      end
  end

  def destroy
      user = User.find(params[:id])
      user.destroy
  end

  def create
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end

  private
  def user_params
      params.permit(:username, :password)
  end
end