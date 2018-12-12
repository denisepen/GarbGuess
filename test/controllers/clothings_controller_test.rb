require 'test_helper'

class ClothingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clothing = clothings(:one)
  end

  test "should get index" do
    get clothings_url, as: :json
    assert_response :success
  end

  test "should create clothing" do
    assert_difference('Clothing.count') do
      post clothings_url, params: { clothing: { body_cat: @clothing.body_cat, color: @clothing.color, event: @clothing.event, weather_category: @clothing.weather_category } }, as: :json
    end

    assert_response 201
  end

  test "should show clothing" do
    get clothing_url(@clothing), as: :json
    assert_response :success
  end

  test "should update clothing" do
    patch clothing_url(@clothing), params: { clothing: { body_cat: @clothing.body_cat, color: @clothing.color, event: @clothing.event, weather_category: @clothing.weather_category } }, as: :json
    assert_response 200
  end

  test "should destroy clothing" do
    assert_difference('Clothing.count', -1) do
      delete clothing_url(@clothing), as: :json
    end

    assert_response 204
  end
end
