class WordsController < ApplicationController
  def new
    @course = Course.find(params[:course_id])
    
  end
  def create
    @course = Course.find(params[:course_id])
    @word = @course.words.create(params[:word].permit(:english, :chinese,:pinyin))
    redirect_to course_path(@course)
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
    course_id = @word.course_id
    @word.destroy
    
    redirect_to course_path(course_id)
  end
  private 
  def word_params
    params.require(:word).permit(:lexical_form)
  end
  
  
end
