window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});

document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".black").style.display = "none";
});

document.querySelector("#close-next").addEventListener("click", function(){
  document.querySelector(".black").style.display = "none";
});

// Also when the use clicks GDPR Text with Link, it should direct users to this Wikipedia Page on a new tab.
function goWiki() {
  window.open("https://en.wikipedia.org/wiki/General_Data_Protection_Regulation","_blank");  
}

function copyCoupon() {
  // Get the text field
  let copyText = document.getElementById("coupon");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

function beFirst() {
  let eMail = document.getElementById("e-mail");
  let phoneNumber = document.getElementById("phone-number");
  let checkBox = document.getElementById("checkbox");
  let full = true;
  let responseFlag = 0;

  if ( eMail.value === "") {
    eMail.style.borderColor = "red";
    full = false;
  }   if ( phoneNumber.value === "") {
    phoneNumber.style.borderColor = "red";
    full = false;
  }  if ( checkBox.value === "") {
    checkBox.style.borderColor = "red";
    full = false;
  } if (full) {
    async function GetData(){
      let data = {
          "email": eMail.value,
          "phone": phoneNumber.value
      }
      const response = await fetch("https://insider-optimus.herokuapp.com/lead-collection", {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify(data) 
      });
      console.log(response);
      responseFlag = response.ok 
  }
  
  GetData()
  .then((mail) => {
    console.log("enes:",responseFlag);
    if (responseFlag === true) {
      document.getElementById("col-right").classList.remove("col-right");
      document.getElementById("col-right").classList.add("col-right-remove");
      document.getElementById("col-right-next").classList.remove("col-right-remove");
      document.getElementById("col-right-next").classList.add("col-right-next");
      alert("Thank you");
    } else {
      alert("Invalid data");
    }
  })
  .catch((err) => {
    console.error(err);
  })
  }
}