var companies = [];
var trs = document.getElementsByTagName('tr');

for (var i = 1, len = trs.length; i< len; i +=2) {
    var tds = [];

    var company = {};
    var tr = trs[i];
    tds = tr.getElementsByTagName('td');
    //console.log(tds);

    for ( var j = 0, len = tds.length; j < len; j++) {
        console.log(j + ',' + tds[j]);

    }
    company.name = tr.firstElementChild.textContent;
    company.symbole = tr.getElementsByTagName('h3')[0].textContent.trim();

    console.log(company.name);
    companies.push(company);

}
console.log('FINISH');
console.log(companies);