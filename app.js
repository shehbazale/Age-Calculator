function calculateAge() {
    // const day = document.querySelector('#day');
    // day.innerHTML = 'hello';
    const dob = new Date(document.querySelector('#dob').value);
    // console.log(dob);
    const ageInMS = Date.now()-dob.getTime();
    const ageDate = new Date(ageInMS);
    const age = Math.abs(ageDate.getUTCFullYear()-1970);
//     console.log(age);
    const month = ageDate.getUTCMonth();
    const days =  ageDate.getUTCDate()-1;
    document.querySelector('#year').innerHTML =age;
    document.querySelector('#month').innerHTML =month;
    document.querySelector('#day').innerHTML =days;

}
