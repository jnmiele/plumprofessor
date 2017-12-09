class ApplicationController < ActionController::API
	before_action :authorized, except: [:welcome]

  def encode_token(payload)
    token = JWT.encode(payload, 'personal-plum-professor')
  end

  def auth_header
    header = request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header
      begin
        JWT.decode(token, 'personal-plum-professor', true, {algorithm: 'HS256'})
      rescue JWT::DecodeError
        [{}]
      end
    else
    end
  end

  def current_user
    if decoded_token
      if user_id = decoded_token[0]['user_id']
        @user = User.find(user_id)
      else
      end
    else
    end
  end

  def logged_in?
    !!current_user
  end

  def welcome
    render json: {message: 'Please log in'}
  end
end