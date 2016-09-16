require_relative 'boot'

require 'rails'
require 'active_model/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'action_mailer/railtie'

Bundler.require(*Rails.groups)

module PortfolioRailsApi
  class Application < Rails::Application
    config.api_only = true
    config.autoload_paths << Rails.root.join('lib')
  end
end
