class AddInitiatives < ActiveRecord::Migration[5.0]
  def change
    create_table :initiatives do |t|
      t.string :title, limit: 50, null: false
      t.string :description, limit: 500
      t.string :time_period, limit: 20, null: false
      t.string :population, null: false
      t.integer :employee_num, null: false, default: 0
      t.string :countries, null: false
      t.string :language, null: false, default: 'English'
      t.date :launch_date

      t.timestamps

      t.references :account, index: true
    end

    add_index :initiatives, [:title, :account_id], unique: true
    add_foreign_key :initiatives, :accounts, on_delete: :cascade
  end
end