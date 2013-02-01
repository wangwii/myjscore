require "uglifier"

desc "Build javascript files to .min.js file."
task :default => [:build]

PACKAGE_NAME = 'myjscore'
BASE_DIR = File.expand_path(File.dirname(__FILE__))
INDEX_FILE = File.expand_path('index_file', BASE_DIR)
SOURCE_DIR = File.expand_path('src', BASE_DIR)
OUT_FILE_NAME = File.expand_path("#{PACKAGE_NAME}.min.js", BASE_DIR)

LICENSE_TEXT = %q{/*
 * The Javascript core object enhance
 * (c) 2013 Wang Wei - cnetwei@gmail.com
 * updated: 2013-02-01
 * license: http://www.opensource.org/licenses/mit-license.php
 */
}

task :build do
  opts = {mangle: false, copyright: false}
  ugl = Uglifier.new(opts)
  begin
    output = File.open(OUT_FILE_NAME, 'w')
    output << LICENSE_TEXT

    #TODO:: added the index_file process for packing sequence
    Dir.glob(File.join(SOURCE_DIR, '**/*.js')).each do |js_path|
      output.puts(ugl.compile(File.read(js_path)))
    end
  ensure
    output.close if output.respond_to?(:close)
  end
end