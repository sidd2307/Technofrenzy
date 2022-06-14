const getAge = (dobp) => {
    var dob = new Date(dobp);
    //extract the year, month, and date from user date input
    var dobYear = dob.getYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();

    //get the current date from the system
    var now = new Date();
    //extract the year, month, and date from current date
    var currentYear = now.getYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    //declare a variable to collect the age in year, month, and days
    var age = {};
    var ageString = "";

    //get years
    let yearAge = currentYear - dobYear;

    var monthAge;
    var dateAge;
    //get months
    if (currentMonth >= dobMonth)
        //get months when current month is greater
        monthAge = currentMonth - dobMonth;
    else {
        yearAge--;
        monthAge = 12 + currentMonth - dobMonth;
    }

    //get days
    if (currentDate >= dobDate)
        //get days when the current date is greater
        dateAge = currentDate - dobDate;
    else {
        monthAge--;
        dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    //group the age in a single variable
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge,
    };

    ageString += "posted "

    if (age.years === 0) {

    } else {
        ageString +=
            (age.years +
                " years, ")
    }

    if (age.months === 0) {

    } else {
        ageString +=
            (age.months +
                " months, ")
    }

    if (age.days === 0) {

    } else {
        ageString +=
            (age.days +
                " days")
    }

    ageString +=
        " ago";
    console.log(ageString);

    return ageString;
};

export default getAge