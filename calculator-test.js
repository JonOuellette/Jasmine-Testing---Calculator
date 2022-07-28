
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 10000, years: 5, rate: 1}
  expect(calculateMonthlyPayment(values)).toEqual('170.94');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 100000, years: 10.5, rate: 5}
  expect(calculateMonthlyPayment(values)).toEqual('1021.75');
});

/// etc
