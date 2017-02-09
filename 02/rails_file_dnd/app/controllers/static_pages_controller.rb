require 'mini_magick'
class StaticPagesController < ApplicationController
  def home
  end

  def file_upload
    file_name = params['file'].original_filename
    file = params['file'].tempfile
    thumb = MiniMagick::Image.read(file)
    thumb.resize "150x150"
    thumb.write "./public/#{file_name}"
    render text: '/' + params['file'].original_filename
  end
end
