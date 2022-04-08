const formBtn = document.getElementById("form-btn");
console.log(formBtn);

formBtn.addEventListener("click",
    function () {

        //Preleviamo gli input dell' utente
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
  
        if (userAge === "minorenne") {
            sale = ticketPrice * 0.2;
        } else if (userAge === "over") {
            sale = ticketPrice * 0.4;
        } else {
            sale = 0;
        }
        
        finalPrice = ticketPrice - sale;
        console.log(finalPrice);

        //Visualizzare nella pagina le risposte dell'utente
        const greetingResponseName = document.querySelector(".col-3 #user-name");
        console.log(greetingResponseName);
        greetingResponseName.innerHTML = userName;

        const greetingResponseOffer = document.querySelector(".col-2 #offer");
        console.log(greetingResponseOffer);

        let responseOffer;

        if (userAge === "minorenne") {
            responseOffer = `Offerta Young`;
        } else if (userAge === "over") {
            responseOffer = `Offerta Silver`;
        } else {
            responseOffer = `Offerta Standard`;
        }

        console.log(responseOffer);
        greetingResponseOffer.innerHTML = responseOffer;

        const greetingResponseCab = document.querySelector(".col-2 #cab");
        console.log(greetingResponseCab);
        greetingResponseCab.innerHTML = Math.floor(Math.random() * 10) + 1;

        const greetingResponseCPcode = document.querySelector(".col-2 #cp-code");
        console.log(greetingResponseCPcode);
        greetingResponseCPcode.innerHTML = Math.floor(Math.random() * 10000) + 90000;

        const greetingResponseFinalPrice = document.querySelector(".col-3 #total");
        greetingResponseFinalPrice.innerHTML = `${finalPrice}€`
    }
)