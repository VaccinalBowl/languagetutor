class NationsController < ApplicationController
  def index
    @nations = Nation.all
    puts current_user
    puts "gay"
  end
  
  def new
    
  end
  
  def create
    @nation = Nation.new(post_params)
    @nation.save
    redirect_to @nation
  end
  
  def show
    @nation = Nation.find(params[:id])
  end
  
  def destroy
    @nation = Nation.find(params[:id])
    @nation.destroy
    
    redirect_to nations_path
  end
  def edit
    
    @nation = Nation.find(params[:id])

  end
  
  def update
    @nation = Nation.find(params[:id])
    if @nation.update(params[:nation].permit(:english, :chinese,:pinyin))
      redirect_to @nation
    else
      render 'edit'
    end
  end

  def masscreate
    ps = params.require(:nation).permit(:records);
    records =  ps["records"]
    records.each_line do |nation| 
      nation.chomp!
      cols = nation.split(',')
      nations = Hash.new
      nations["english"] = cols[0]
      nations["chinese"] = cols[1]
      nations["pinyin"] = cols[2]
      @nations = Nation.new(nations)
      @nations.save
    end
    redirect_to nations_path
  
  end
  
  def deleteall
    @nations = Nation.all
    @nations.each { |nation| nation.destroy }
    redirect_to nations_path
  end
  
  private
  def post_params
    params.require(:nation).permit(:english, :chinese, :pinyin)
  end

end
