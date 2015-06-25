class AddProviderMinloanMaxloanToLoan < ActiveRecord::Migration
  def change
    add_column :loans, :provider, :string
    add_column :loans, :min_loan, :integer
    add_column :loans, :max_loan, :integer
  end
end
