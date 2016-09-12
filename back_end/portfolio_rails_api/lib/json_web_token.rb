require 'jwt'

class JsonWebToken
  class << self
    def secret
      Rails.application.secrets.secret_key_base
    end

    def encode(payload, exp = 24.hours.from_now)
      payload[:exp] = exp.to_i

      JWT.encode(payload, secret, 'HS512')
    end

    def decode(token)
      JWT.decode(token, secret, 'HS512').first.with_indifferent_access
    end
  end
end

module JWT
  class MissingTokenError < StandardError; end
end