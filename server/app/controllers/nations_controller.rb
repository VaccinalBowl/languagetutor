class NationsController < ApplicationController
  def index
    @nations = Nation.all
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
  
  def masscreate
    ps = params.require(:nation).permit(:records);
    records =  ps["records"]
    records.each_line do |nation| 
      nation.chomp!
      cols = nation.split(',')
      puts cols[0]
      puts cols[1]
      puts cols[2]
      nations = Hash.new
      nations["english"] = cols[0]
      nations["chinese"] = cols[1]
      nations["pinyin"] = cols[2]
      @nations = Nation.new(nations)
      @nations.save
    end
    redirect_to nations_path
  
  end

  
  private
  def post_params
    params.require(:nation).permit(:english, :chinese, :pinyin)
  end

end
