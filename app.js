var contractAddress;
const PUBLIC_KEY = "edpkvRDrADptQErsed5FmPeCKyNagN5Q6mJ1hnCXvyoeRvB1XHKW73";
const PUBLIC_KEY_HASH = "tz1LsDttshWsAAPHZqJGYuSZfrkGMcSpZ25B";
const PRIVATE_KEY = "edskRhYiMktvNXNRbQfUbfb5ytYZTYYEJoJ8YWT2USgYUBgdyg2v8WHbdUntRJaWvwpiqFP4FzBPP1iwt5v8jkZW7XgMgkReEc";
var keys = {
  pk: PUBLIC_KEY,
  pkh: PUBLIC_KEY_HASH,
  sk: PRIVATE_KEY
}
var account;

function loadData() {
  contractAddress = "KT1U6jj2t2D5WdX3Ez3jKLdtWC96yTzBAAUW";
  eztz.node.setProvider("http://localhost:8732");
  account = keys.pkh;
  console.log(account);

  eztz.rpc.getBalance(account).then(function(res) {
    $("#balance").html(res / 1000000);
    $("#account").html(account);
  });

  eztz.contract.watch(contractAddress, 2, function(s){
    console.log("New storage", s);
    var memo = s.args[0];
    $("#memo").html(memo);
    $("#msg").html("");
  });
}

function write() {
  var memoToWrite = $("#write").val();
  var currentMemo = $("#memo").val();
  const additional = memoToWrite.length - currentMemo.length;
  const storageLimit = (additional > 0) ? (additional * 1000) : 0;
  // eztz.contract.send(contract, from, keys, amount, parameter, fee, gasLimit, storageLimit)
  eztz.contract.send(contractAddress, account, keys, 0, '\"' + newMemo + '\"', 1000000, 400000, storageLimit).then(function(res){
    console.log(res); // Operation result
    $("#msg").html("Please wait for the transaction to complete");
  }).catch(function(e){
    console.log(e);
    $("#msg").html("Error: " + e.error + " - " + e.errors[1].with.args[0].string);
  });
}
