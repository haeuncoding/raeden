class ListsController < ActionController::API

  def index

  end

  def create

  end

  def show

  end

  def update

  end

  def destroy

  end

  private
  def book_params
    params.require(:list).permit(:title, :desc, :created_at, :updated_at)
  end


end
