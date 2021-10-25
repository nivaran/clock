let mydate;
let newdate;
let mytime;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// lets make functions of "value" of all option tag

ceurope = () => {
    mydate = new Date();
    newdate = mydate.toLocaleString(undefined, { timeZone: 'Europe/Astrakhan' });
    document.getElementById('new').innerHTML =   newdate;
}
camerica = () => {
    mydate = new Date();
    newdate = mydate.toLocaleString(undefined, { timeZone: 'America/Chicago' });
    document.getElementById('new').innerHTML =  newdate;
}
cindia = () => {
    mydate = new Date();
    newdate = mydate.toLocaleDateString(undefined, options);
    mytime = mydate.toLocaleTimeString();
    document.getElementById('new').innerHTML = mytime + ' on ' + newdate;
}
// make variable for set interval or clear interval , 
// clearing interval is impotant otherwise it will run interval in behind also
let eu; 
let di;
let am;

// event onchange(in select tag we cannot run onclick event,use onchange event) of function timezone

function timezone(x) {
    if (x == "ceurope") {
        return clearInterval(am),clearInterval(di),eu = setInterval(ceurope, 1000);
    }
    else if (x == "camerica") {
        return clearInterval(eu),clearInterval(di),am = setInterval(camerica, 1000);

    } else if (x == "cindia") {
        return clearInterval(eu),clearInterval(am) ,di = setInterval(cindia, 1000);
    }

}