require 'rails_helper'

describe Account, type: :model do
  it { is_expected.to validate_presence_of :name }

  it { is_expected.to validate_presence_of :subdomain }

  it { is_expected.to have_many :assignments }

  it { is_expected.to have_many(:users).through(:assignments) }

  it { is_expected.to have_many(:roles).through(:assignments) }
end