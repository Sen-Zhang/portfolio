class DbInit < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :name, null: false, limit: 20
      t.string :subdomain, null: false, limit: 20

      t.timestamps
    end

    add_index :accounts, :name, unique: true
    add_index :accounts, :subdomain, unique: true

    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :first_name
      t.string :last_name

      t.timestamps
    end

    add_index :users, :email, unique: true

    create_table :roles do |t|
      t.string :name, null: false, limit: 20
      t.string :title, null: false, limit: 20

      t.timestamps
    end

    add_index :roles, :name, unique: true
    add_index :roles, :title, unique: true

    create_table :assignments do |t|
      t.references :account, index: true
      t.references :user, index: true
      t.references :role, index: true
    end

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

    add_foreign_key :assignments, :accounts, on_delete: :cascade
    add_foreign_key :assignments, :users, on_delete: :cascade
    add_foreign_key :assignments, :roles, on_delete: :cascade
    add_foreign_key :initiatives, :accounts, on_delete: :cascade
  end
end
