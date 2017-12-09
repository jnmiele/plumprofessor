class UsersContoller < ApplicationController
	def create
		user = User.new(user_params)
    if user.save
      token = encode_token({ user_id: user.id})
      render json: {user: user, jwt: token}
    else
    	render json: { message: 'Error'}
    end
	end

	def show

	end

	private

	def user_params
		user_params.require(:user).permit(:email, :first_name, :last_name, :password)
	end
end