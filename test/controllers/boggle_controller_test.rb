require 'test_helper'

class BoggleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ''
    assert_response :success
  end
end
