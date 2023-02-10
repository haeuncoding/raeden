class BooksController < ActionController::API

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
    params.require(:book).permit(:title, :author, :isbn, :genre, :created_at, :updated_at)
  end

end
