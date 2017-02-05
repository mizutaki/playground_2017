class StaticPagesController < ApplicationController
  def home
  end

  def file_upload
    params['file'].original_filename
    file = params['file'].tempfile
    read_file = File.open(file, 'rb')
    file_path = 'public/' + params['file'].original_filename
    File.open(file_path, 'wb') do |f|
      f.write read_file.read
    end
    render text: '/' + params['file'].original_filename
  end
end
