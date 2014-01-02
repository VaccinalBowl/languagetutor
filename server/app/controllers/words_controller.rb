class WordsController < ApplicationController
  def new
    @word = Word.new
  end
  def create
    @word = Word.new(word_params)
    if @word.save
      redirect_to @word
    else
      render 'new'
    end
  end
  def show
    @word = Word.find(params[:id])
  end
  def index
    @words = Word.all
    respond_to do |format|
      format.html
      format.xml { render xml: @words}
      format.json{ render json: @words}
    end
  end


  def edit
    @word = Word.find(params[:id])
  end
  
  def update
    @word = Word.find(params[:id])
    
    if @word.update(params[:word].permit(:lexical_form))
      redirect_to @word
    else
      render 'edit'
    end
  end

  def destroy
    @word = Word.find(params[:id])
    @word.destroy
    
    redirect_to words_path
  end
  private 
  def word_params
    params.require(:word).permit(:lexical_form)
  end
  
  
end
