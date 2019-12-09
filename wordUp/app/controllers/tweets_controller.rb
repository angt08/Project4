class TweetsController < ApplicationController
  before_action :set_tweet, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [ :index, :show]

  
  # GET /tweets
  def index
    @tweets = Tweet.all

    render json: @tweets, include: [:user, {comments: {include: :user}}]
  end

  # GET /tweets/1
  def show
    render json: @tweet, include: [:user, {comments: {include: :user}}]
  end

  # POST /tweets
  def create
    @tweet = Tweet.new(tweet_params)
    @current_user.tweets << @tweet
   
    if @tweet.save
      render json: @tweet, status: :created, location: @tweet
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tweets/1
  def update
    if @tweet.update(tweet_params)
      render json: @tweet
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tweets/1
  def destroy
    @tweet.destroy 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tweet
      @tweet = Tweet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tweet_params
      # params.fetch(:tweet, {})
      params.require(:tweet).permit(:content, :image, :user_id)
    end
end
