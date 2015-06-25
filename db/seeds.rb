# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

loans = [
  {
    provider: 'easycredit',
    min_loan: 1000,
    max_loan: 5000
  },
  {
    provider: 'expresskredit',
    min_loan: 500,
    max_loan: 8000
  }
]

loans.each { |loan| Loan.create(loan) }
