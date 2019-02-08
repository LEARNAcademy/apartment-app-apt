class PagesController < ApplicationController
    before_action :authenticate_user!, only: :protected
    skip_before_action :verify_authenticity_token

    def unprotected
    end

    def protected
    end
end
