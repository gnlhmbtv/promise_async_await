
let submit = document.getElementById("submit");
let reverseDate;
submit.onclick = function(){
    let datee=document.getElementById("date").value;
     reverseDate = datee.split("-").reverse().join("-");
     console.log(reverseDate);
      getNamazTimes();
}

async function getNamazTimes() {
	const res = await axios.get('https://api.aladhan.com/v1/calendar?latitude=40.409264&longitude=49.867092&method=2&month=12&year=2021');
    let lorem = (res.data.data);
    for (const item of lorem) {
        let jsonDate = (item.date.gregorian.date);
        if (reverseDate===jsonDate) {
            console.log("OKKKKKKK");
            break;
        }
        else{
            console.log("not ok");
            break;
        }
    }
}
















