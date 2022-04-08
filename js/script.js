const formBtn = document.getElementById("form-btn");
console.log(formBtn);

formBtn.addEventListener("click",
    function () {
        const userName = document.getElementById("user-name").value;
        console.log(userName);

        const userDistance = document.getElementById("user-km").value;
        console.log(userDistance);

        const userAge = document.getElementById("user-age").value;
        console.log(userAge);

        const ticketPrice = 0.21 * userDistance;
        console.log(ticketPrice);

        let sale;
        let finalPrice;

        if (userAge.val=("minorenne")) {
            sale = ticketPrice * 0.2;
        } else if (userAge.val=("over")) {
            sale = ticketPrice * 0.4;
        } else {
            sale = 0;
        }
        
        finalPrice = ticketPrice - sale;
        console.log(finalPrice);

        
        

    }

)