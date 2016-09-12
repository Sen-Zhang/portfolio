require 'rails_helper'

describe Role, type: :model do
  it { is_expected.to validate_presence_of :name }

  it { is_expected.to validate_presence_of :title }

  it { is_expected.to have_many :assignments }

  it { is_expected.to have_many(:accounts).through(:assignments) }

  it { is_expected.to have_many(:users).through(:assignments) }
end