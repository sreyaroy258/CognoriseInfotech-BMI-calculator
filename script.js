

window.onload = () => {
 const button =  (document.querySelector('#btn'));
 button.addEventListener('click', 
 calculateBmi )
};

function calculateBmi () {
    const Height = document.querySelector('#Height').value;
    const Weight = document.querySelector('#Weight').value;
     const Result = document.querySelector('#Result')

if(!Height ||  isNaN(Height)  || Height <0){
 Result.innerText = "Please provide a valid height";
 return;
} else if(  !Weight || isNaN(Weight) || Weight<0) {
    Result.innerText = "please provide a valid weight";
    return;
}

const bmi = (Weight / ((Height*Height)/10000)).toFixed(2);

if (bmi <18.5){
    Result.innerText = ` Under weight : ${bmi}`;
}else if 
    (bmi >= 18.5 && bmi <24.9){
        Result.innerText = ` normal : ${bmi}`;
    
}else if(bmi >= 25 && bmi < 29.9 ){
    Result.innerText = ` Over weight : ${bmi}`;
}else if (bmi >= 30 && bmi < 34.9){
    Result.innerText = ` Obesity (Class I) : ${bmi}`;
}else if (bmi >= 35.5 && bmi < 39.9){
    Result.innerText = ` Obesity (Class II) : ${bmi}`;

} else {
    Result.innerText = `Extreme obesity : ${bmi}`;
}
}