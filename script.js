// var n = Math.random();
// console.log(n);           //0.86350431021697489

// n = n * 6;
// console.log(n);          // 5.181025861301849

// n = Math.floor(n);
// console.log(n);         // 5


//                            ***** Love Calculation *****
function calculateLoveScore() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    if (input1 === "" || input2 === "") {
        alert("Please enter both names.");
        return;
    }

    var result = Math.random() * 100;
    result = Math.floor(result) + 1;
    // alert("Your love score is: " + result);

    var heading = document.getElementById('heading');
    heading.textContent= `The love score of ${input1} and ${input2} is : ${result}`;
  
}



    


   



















