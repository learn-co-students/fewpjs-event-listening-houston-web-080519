class SignsController < ApplicationController
    def index
        signs = Sign.all
        render json: signs
    end



end