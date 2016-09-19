require 'rails_helper'

describe Assignment, type: :model do
  it { is_expected.to belong_to :account }

  it { is_expected.to belong_to :user }

  it { is_expected.to belong_to :role }
end