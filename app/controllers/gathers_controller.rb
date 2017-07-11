class GathersController < ApplicationController
  def index
    @gathers = Gather.all
  end

  def show
    @gather = Gather.find(params[:id])
  end

  def new
    @gather = Gather.new
  end

  def create
    @gahter = current_user.gathers.new(user_params)
    if @gather.save
      flash[:info] = "ぎゃざーをつくったよ"
      redirect_to gathers_url
    else
      render 'new'
    end
  end

  def edit
    @gather = Gather.find(params[:id])
  end

  def update
    @gahter = Gather.find(params[:id])
    if @gather.update_attributes(gather_params)
      flash[:success] = "ぎゃざーをこうしんしたよ"
      redirect_to gather_url(params[:id])
    else
      render edit_gather_path
    end
  end

  def destroy
    Gather.find(params[:id]).destroy
    flash[:success] = "ぎゃざーをけしたよ"
    redirect_to gathers_url
  end

  private

  def gather_params
    params.require(:gather).permit(:name, :description)
  end
end
