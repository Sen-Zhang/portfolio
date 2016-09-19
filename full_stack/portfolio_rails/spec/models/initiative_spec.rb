require 'rails_helper'

describe Initiative, type: :model do
  subject { build(:initiative) }

  it { is_expected.to validate_presence_of :title }

  it { is_expected.to validate_uniqueness_of(:title).scoped_to(:account_id) }

  it { is_expected.to validate_length_of(:description).is_at_most(500) }

  it { is_expected.to validate_presence_of :time_period }

  it { is_expected.to validate_presence_of :population }

  it { is_expected.to validate_presence_of :employee_num }

  it { is_expected.to validate_numericality_of(:employee_num).is_greater_than_or_equal_to(0) }

  it { is_expected.to validate_presence_of :countries }

  it { is_expected.to validate_presence_of :language }

  it { is_expected.to belong_to :account }

  it { is_expected.to validate_presence_of :account_id }
end