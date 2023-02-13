class ListsController < ActionController::API

  def index
    @lists = List.all
    if @lists
      render :index
    else
      render {}
    end
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: [errors: @list.errors.full_messages]
    end
  end

  def show
    @list = list.find_by(id: params[:id])
    render :show
  end

  def update
    @list = list.find_by(id: params[:id])
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages
    end
  end

  def destroy
    @list = list.find_by(id: params[:id])
    @list.delete
  end

  def add_book
    book = Book.find_by(id: params[:id])
  end

  private
  def book_params
    params.require(:list).permit(:title, :desc, :created_at, :updated_at)
  end


end
