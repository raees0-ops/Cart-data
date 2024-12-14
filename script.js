document.querySelectorAll('.offer-header').forEach((offerHeader) => {
    offerHeader.addEventListener('click', () => {

      document.querySelectorAll('.offer-body').forEach((offerBody) => {
        offerBody.style.display = 'none';
      });
  
     
      const offerBody = offerHeader.nextElementSibling;
      if (offerBody) {
        offerBody.style.display = 'block';
      }
  
  
      const radioButton = offerHeader.querySelector('input[type="radio"]');
      if (radioButton) {
        radioButton.checked = true;
      }
  

      const value = radioButton.value;
      let price;

      if(value==1){
        price = "$10.00 USD";
      }
      else if(value==2){
        price = "$18.00 USD";
      }
      else{
        price = "$24.00 USD";
      }
  
      const totalPrice = document.getElementById("total-price");
      if (totalPrice) {
        totalPrice.textContent = "Total: " + price;
      }
    });
  });
  