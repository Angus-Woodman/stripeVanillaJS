var stripe = Stripe("pk_test_51IOjpLFbQZ4N47rt8UMkV8EalrN3qeboVXz6ZsU0a6NibhU88di6BWxdRLAk2OlbfnRnLvP0YQaCwmIjH3xxAfue00EzRH9pn1");
var checkoutButton1 = document.getElementById("checkout-button1");
var checkoutButton2 = document.getElementById("checkout-button2");
var checkoutButton3 = document.getElementById("checkout-button3");
var checkoutButton4 = document.getElementById("checkout-button4");
var checkoutButton5 = document.getElementById("checkout-button5");
var checkoutButton6 = document.getElementById("checkout-button6");
var checkoutButton7 = document.getElementById("checkout-button7");
var checkoutButton8 = document.getElementById("checkout-button8");
var checkoutButton9 = document.getElementById("checkout-button9");
var checkoutButton10 = document.getElementById("checkout-button10");
var checkoutButton11 = document.getElementById("checkout-button11");
var checkoutButton12 = document.getElementById("checkout-button12");
var checkoutButton13 = document.getElementById("checkout-button13");
var checkoutButton14 = document.getElementById("checkout-button14");

function handleCheckout(item, price, img){
  const data = {
    item: item,
    price: price,
    img:img
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  }

  fetch("/create-session", options)
    .then(r => r.json())
    .then(function (session) {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function (result) {
      // If redirectToCheckout fails due to a browser or network
      // error, you should display the localized error message to your
      // customer using error.message.
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

checkoutButton1.addEventListener("click", () => handleCheckout('MR ROSE', 18500, "images/0F1A2333-7DE3-4E76-8A4E-3A2AF48217C4_1_105_c.jpeg"));
checkoutButton2.addEventListener("click", () => handleCheckout('THE STORY OF THE SUN AND THE MOON', 50000, 'images/3FE8E033-BFF0-45FA-8F87-85133B593D21_1_105_c.jpeg'));
checkoutButton3.addEventListener("click", () => handleCheckout('LADY LOO AND THE FISHERMAN', 2000, 'images/4EF37F50-ED64-4E0B-972E-2CCC80742818_1_105_c.jpeg'));
checkoutButton4.addEventListener("click", () => handleCheckout('THE FOX WHISPERER', 16500, 'images/8B0319DB-7BD3-41F3-84A6-C4938FEBA95D_1_105_c.jpeg'));
checkoutButton3.addEventListener("click", () => handleCheckout('LADY LOO AND THE FISHERMAN', 2000, 'images/20F72CE7-FE6C-423F-AB45-F4668FBE479D_1_105_c.jpeg'));
checkoutButton6.addEventListener("click", () => handleCheckout('NO RIVER IS TOO LONG TO LOVE', 70000, 'images/90B7EE80-A615-47A9-87A7-9B327A0BAE09_1_105_c.jpeg'));
checkoutButton7.addEventListener("click", () => handleCheckout('THE LOVE STORY OF THE MAN AND THE MOON', 12500, 'images/2979AB0D-EF1D-4A56-9EA5-29E22FC8803A_1_105_c.jpeg'));
checkoutButton8.addEventListener("click", () => handleCheckout('ON MY WAY TO THE MOON', 20000, 'images/A7D5D31A-C120-4F46-848E-B9D4869A3424_1_105_c.jpeg'));
checkoutButton9.addEventListener("click", () => handleCheckout('THE RIVER WOMAN', 40000, 'images/BDE274DB-213F-4916-BAF6-EA4E7D14A07D_1_105_c.jpeg'));
checkoutButton10.addEventListener("click", () => handleCheckout('THEY TOLD ME TO REACH FOR THE STARS', 18500, 'images/C9762173-BC3D-41F0-A3AC-3571D9E9FF8F_1_105_c.jpeg'));
checkoutButton11.addEventListener("click", () => handleCheckout('THE LION WHISPERER', 16500, 'images/DF74EC2D-2F99-41B2-BDC6-D9F522341985_1_105_c.jpeg'));
checkoutButton12.addEventListener("click", () => handleCheckout('HERE IS A LITTLE BIT OF MY HEART', 9000, 'images/F2F30F83-00CD-4FB1-BC65-585A0B3541FF_1_105_c.jpeg'));
checkoutButton13.addEventListener("click", () => handleCheckout('FUTURISTIC YOGA PERSON', 50000, 'images/FC1ECA62-22D6-4EBB-B351-6ED45046818A_1_105_c.jpeg'));
checkoutButton14.addEventListener("click", () => handleCheckout('FISHING FOR FISH', 15000, 'images/FD08D2F7-CBE5-43D8-A65E-B6B91DF422B6_1_105_c.jpeg'));
