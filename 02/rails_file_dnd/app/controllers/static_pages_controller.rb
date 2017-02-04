class StaticPagesController < ApplicationController
  def home
    @img_paths = []
    jpgs = Dir.glob(Rails.root.join('public', '*.jpg'))
    jpgs.each do |j|
      @img_paths.push('/'+ File.basename(j))
    end
  end

  def file_upload
    params['file'].original_filename
    file = params['file'].tempfile
    read_file = File.open(file, 'rb')
    file_path = 'public/' + params['file'].original_filename
    File.open(file_path, 'wb') do |f|
      f.write read_file.read
    end
    redirect_to action: 'home', status: :ok
  end
end
