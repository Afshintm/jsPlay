
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    if (userDate === undefined) return;
    var parts = userDate.split('/');
    for(let i = 0 ;i<3;i++)

    console.log(parts[i]);
    var date = new Date(parts[2],parts[0],parts[1]);
    console.log(date);
    return (date.getYear()+date.getMonth()+date.getDay());
    
  }
  
  console.log(formatDate("12/31/2014"));