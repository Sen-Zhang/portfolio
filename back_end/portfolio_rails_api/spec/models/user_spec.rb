require 'rails_helper'

describe User, type: :model do
  it { is_expected.to validate_presence_of :email }

  it { is_expected.to validate_presence_of :password }

  it { is_expected.to have_many :assignments }

  it { is_expected.to have_many(:accounts).through(:assignments) }

  it { is_expected.to have_many(:roles).through(:assignments) }
end