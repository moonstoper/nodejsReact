//keys.js
if (process.env.NODE_ENV === "production") {
  //set prod keys
  module.exports=require("./prodkeys");
} else {
  //set dev keys
  module.exports=require("./devkeys");
}
