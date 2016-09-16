# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160916180126) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "name",       limit: 20, null: false
    t.string   "subdomain",  limit: 20, null: false
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["name"], name: "index_accounts_on_name", unique: true, using: :btree
    t.index ["subdomain"], name: "index_accounts_on_subdomain", unique: true, using: :btree
  end

  create_table "assignments", force: :cascade do |t|
    t.integer "account_id"
    t.integer "user_id"
    t.integer "role_id"
    t.index ["account_id"], name: "index_assignments_on_account_id", using: :btree
    t.index ["role_id"], name: "index_assignments_on_role_id", using: :btree
    t.index ["user_id"], name: "index_assignments_on_user_id", using: :btree
  end

  create_table "initiatives", force: :cascade do |t|
    t.string   "title",        limit: 50,                      null: false
    t.string   "description",  limit: 500
    t.string   "time_period",  limit: 20,                      null: false
    t.string   "population",                                   null: false
    t.integer  "employee_num",             default: 0,         null: false
    t.string   "countries",                                    null: false
    t.string   "language",                 default: "English", null: false
    t.date     "launch_date"
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.integer  "account_id"
    t.index ["account_id"], name: "index_initiatives_on_account_id", using: :btree
    t.index ["title", "account_id"], name: "index_initiatives_on_title_and_account_id", unique: true, using: :btree
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name",       limit: 20, null: false
    t.string   "title",      limit: 20, null: false
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["name"], name: "index_roles_on_name", unique: true, using: :btree
    t.index ["title"], name: "index_roles_on_title", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  add_foreign_key "assignments", "accounts", on_delete: :cascade
  add_foreign_key "assignments", "roles", on_delete: :cascade
  add_foreign_key "assignments", "users", on_delete: :cascade
  add_foreign_key "initiatives", "accounts", on_delete: :cascade
end
