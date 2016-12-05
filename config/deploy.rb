# config valid only for current version of Capistrano
lock '3.4.1'
set :application, 'edf-rnd'
set :repo_url, 'ssh://git@git.recast.ai:2424/bots/edf.git'
# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/bots/#{fetch :application}"
# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('config/index.js')
# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('node_modules')
# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
# Default value for keep_releases is 5
# set :keep_releases, 5
