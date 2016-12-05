server 'bots-bots-1', user: 'bots', role: %w(app db web)
server 'bots-bots-2', user: 'bots', role: %w(app db web)

namespace :deploy do
    desc 'Install dependencies'
    task :install do
        on roles(:all) do
              execute "cd #{fetch :release_path} && NODE_ENV=development pnpm install"
          end
    end
    desc 'Build'
    task :build do
        on roles(:all) do
            execute "cd #{fetch :release_path} && npm run build"
        end
    end
    desc 'Restart'
    task :restart do
        on roles(:all) do
            execute "pm2 restart #{fetch :application} || pm2 start #{fetch :deploy_to}/current/lib/server.js -i 0 --name #{fetch :application}"
        end
    end
    after :updated, :install
    after :updated, :build
    after :published, :restart
end
