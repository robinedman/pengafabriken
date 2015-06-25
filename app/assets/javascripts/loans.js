// Populate the loans TABLE on page load
$.get('/loans.json', function(loans) {
  var loanHtmlRows = loans.map(function(loan) {
    return '<tr><td>' + loan.provider + '</td>' + '<td>' + loan.min_loan + '</td>' + '<td>' + loan.max_loan + '</td>' + '</tr>'
  })

  var loansTableEl = document.getElementById('loans')
  loansTableEl.innerHTML = loanHtmlRows.join('')
})
