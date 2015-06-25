var loansCollection = [];

function renderLoansTable(loans) {
  var loanHtmlRows = loans.map(function(loan) {
    return '<tr><td>' + loan.provider + '</td>' + '<td>' + loan.min_loan + '</td>' + '<td>' + loan.max_loan + '</td>' + '</tr>'
  })

  var loansTableEl = document.getElementById('loans')
  loansTableEl.innerHTML = loanHtmlRows.join('')
}

// Get all loans from the server and render them on page load
$.get('/loans.json', function(loans) {
  // Save for later
  loansCollection = loans;

  renderLoansTable(loansCollection)
})

document.addEventListener("DOMContentLoaded", function(event) { 
  var filterForm = document.getElementById('filter-form')

  filterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var minValue = parseInt(filterForm['min'].value, 10)
    
    var filteredLoans = loansCollection.filter(function(loan) {
      console.log('minValue', minValue)
      console.log('loan.min_loan', loan.min_loan)
      return minValue <= loan.min_loan
    })

    renderLoansTable(filteredLoans)
  })

  document.getElementById('filter-form-reset-button').addEventListener('click', function(e) {
    e.preventDefault();

    renderLoansTable(loansCollection)
  })
})
