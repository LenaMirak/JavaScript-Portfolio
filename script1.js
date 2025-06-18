

function area(a,b){
    let count = Number(prompt("Enter the number of rectangles: "));
    for(let i=0; i<count; i++){
        let width = parseFloat(prompt("width:" ));
        let height =parseFloat(prompt("height: "))
    
 if(isNaN(width) || isNaN(height) || width <=0 || height <= 0 ){
    alert("Please enter the valid number");
    return
 }
 if(width ==  height){
    alert('It is the square');
 }else{
    alert('This is a rectangle');
 }
 const area =a*b;
 alert(`Area:${area}`)
}
}

area(width,height);