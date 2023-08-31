const test = (timeRange: string) => {
  function addLeadingZero(number: number) {
    if (number < 10) {
      return number.toString().padStart(2, '0');
    } else {
      return number.toString();
    }
  }

  let allIncomes;
  const currentYear = new Date().getFullYear();
  const presentMonth = new Date().getMonth() + 1;
  const currentMonth = addLeadingZero(presentMonth);
  const date = new Date().getDate();
  const currentDate = addLeadingZero(date);
  const currentDateWithMonthYear = `${currentYear}-${currentMonth}-${currentDate}`;
  const currentDay = new Date().getDay() + 1;

  if (timeRange === 'yearly') {
    allIncomes = {
      date: { $lte: `${currentYear}-12-31`, $gte: `${currentYear}-01-01` },
    };
  } else if (timeRange === 'monthly') {
    allIncomes = {
      date: {
        $lte: `${currentYear}-${currentMonth}-31`,
        $gte: `${currentYear}-${currentMonth}-01`,
      },
    };
  } else if (timeRange === 'weekly') {
    let subDate;
    if (date > currentDay) {
      subDate = date - currentDay;
    } else {
      subDate = date;
    }

    allIncomes = {
      date: {
        $lte: `${currentYear}-${currentMonth}-${currentDate}`,
        $gte: `${currentYear}-${currentMonth}-${subDate}`,
      },
    };
  } else if (timeRange === 'daily') {
    allIncomes = {
      date: currentDateWithMonthYear,
    };
  }

  return allIncomes;
};

export default test;
