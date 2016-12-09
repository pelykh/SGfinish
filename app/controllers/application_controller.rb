class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include SessionsHelper
  include ApplicationHelper
  include PostsHelper

  unless  ActionController::Base.consider_all_requests_local
    rescue_from Exception, :with => :render_404
  end

private

  def render_404
    render :template => 'public/404', :layout => false, :status => :not_found
  end
end
