var companies = [];
var trs = document.getElementsByTagName('tr');
console.log(trs.length);

for (var i = 1, len = trs.length; i< len; i +=2) {

    // console.log('iteration = ' + i + ', len = ' + len);
    var company = {};
    var tr = trs[i];
    var tds = tr.getElementsByTagName('td');
    //console.log(tds);

    company.name = tds[0].textContent.trim();
    company.symbol = tr.getElementsByTagName('h3')[0].textContent.trim();
    company.MarketCap = tds[2].textContent.trim();
    company.adrTSO = tds[3].textContent.trim();
    company.country = tds[4].textContent.trim();
    company.IPOyr = tds[5].textContent.trim();
    company.subsector= tds[6].textContent.trim();

    console.log(company.name);
    console.log(company.symbol);
    console.log(company.MarketCap);
    console.log(company.adrTSO);
    console.log(company.country);
    console.log(company.IPOyr);
    console.log(company.subsector);

    companies.push(company);
}
console.log('FINISH');
console.log(companies);