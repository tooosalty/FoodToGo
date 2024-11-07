setScreen("loginscreen");
onEvent("signup_loginsceen", "click", function( ) {
  setScreen("signupscreen");
});
onEvent("signup_button", "click", function( ) {
  setScreen("accountsuccess");
  createRecord("Signup", {Name:(getText("name_signup")), Email:(getText("email_signup")),  Password:(getText("password_signup"))}, function(record) {
    setScreen("accountsuccess");
  });
});
onEvent("accountsuccess", "click", function( ) {
  setScreen("Menu");
});
onEvent("Login_button", "click", function( ) {
  readRecords("Signup", {Email:(getText("email_login"))},function(records) {
    for (var i =0; i < records.length; i++) {
      if (records [i]. Password == getText("password_login")) {
        setScreen("Menu");
      } else {
        showElement("wrongdetails_login");
      }
    }
  });
});
// make sure to add table number and try to make an invalid message for already created accounts 

var MONEY = 0;
onEvent("button25", "click", function( ) {
  MONEY = MONEY+10;
});
onEvent("button24", "click", function( ) {
  MONEY = MONEY+15;
});
onEvent("button23", "click", function( ) {
  MONEY = MONEY+12;
});
onEvent("button16", "click", function( ) {
  MONEY = MONEY+9;
});
onEvent("button15", "click", function( ) {
  setScreen("cart");
  setText("label30", MONEY);
  MONEY = 0;
});
// add total value for each product on the menu
onEvent("button28", "click", function( ) {
  setScreen("OrderCancel");
});
// i made sure to set total money variable back to 0 if order is cnacelled so that it doesn't effect the next order's total valyue
onEvent("button30", "click", function( ) {
  setScreen("Menu");
});
onEvent("button27", "click", function( ) {
  setScreen("Payment");
});
onEvent("button21", "click", function( ) {
  setScreen("OrderSuccess");
});
onEvent("button22", "click", function( ) {
  setScreen("Payment");
});
onEvent("button14", "click", function( ) {
  setScreen("OrderSuccess");
});
onEvent("button21", "click", function( ) {
  setScreen("OrderSuccess");
});
onEvent("button22", "click", function( ) {
  setScreen("CardInfo");
});
onEvent("button20", "click", function( ) {
  setScreen("Menu");
});
