class CoursesController < ApplicationController
  def index    
    @courses = Course.all   
  end
  
  def show
    @course = Course.find(params[:id])
    @words = @course.words  
  end
  
  def edit
    @course = Course.find(params[:id])
  end
  
  def create
    @course = Course.new(post_params)
    @course.created_by = current_user.email
    @course.save
    redirect_to @course
  end

  def new
    @course = Course.new
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy

    redirect_to courses_path
  end

  def update
    @course = Course.find(params[:id])
    if @course.update(params[:course].permit(:name, :teaches,:for_speakers_of))
      redirect_to @course
    else
      render 'edit'
    end
  end

  private
  def post_params
    params.require(:course).permit(:name, :teaches,:for_speakers_of)
  end
  
 
end
