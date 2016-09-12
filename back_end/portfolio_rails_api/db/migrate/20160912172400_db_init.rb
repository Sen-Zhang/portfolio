class DbInit < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :name, null: false, limit: 20
      t.string :subdomain, null: false, limit: 20

      t.timestamps
    end

    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :first_name
      t.string :last_name

      t.timestamps
    end

    create_table :roles do |t|
      t.string :name, null: false, limit: 20
      t.string :title, null: false, limit: 20

      t.timestamps
    end

    create_table :assignments do |t|
      t.references :account, index: true
      t.references :user, index: true
      t.references :role, index: true
    end

    add_foreign_key :assignments, :accounts, on_delete: :cascade
    add_foreign_key :assignments, :users, on_delete: :cascade
    add_foreign_key :assignments, :roles, on_delete: :cascade
  end
end
