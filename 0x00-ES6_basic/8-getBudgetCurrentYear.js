function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: gdp,
    [`gdp-${getCurrentYear()}`]: income,
    [`capita-${getCurrentYear()}`]: capita,
  };
  return budget;
}
