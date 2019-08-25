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
  contractAddress = "KT1PSVXthBYGQAryRhh9CSQt4BXQuiq6vKLH";
  eztz.node.setProvider("http://35.222.254.242:8732");
  account = keys.pkh;
  console.log(account);

  eztz.rpc.getBalance(account).then(function(res) {
    $("#balance").html(res / 1000000);
    $("#account").html(account);
  });

  eztz.contract.watch(contractAddress, 2, function(s){
    console.log("New storage", s);
    var memo = s.string;
    $("#memo").html(memo);
    $("#msg").html("");
  });
}

function writeNewMemo() {
  var memoToWrite = $("#writeNew").val();
  var currentMemo = $("#memo").val();
  const additional = memoToWrite.length - currentMemo.length;
  eztz.contract.send(contractAddress, account, keys, 0, '\"' + memoToWrite + '\"', 5000, 800000, 60000).then(function(res){
    console.log(res);
    result = JSON.parse(res);
    $("#msg").html(`Please wait for the transaction to complete.\n Operation Hash: ${res.hash}`);
  }).catch(function(e){
    console.log(e);
    const error = JSON.parse(e)
    $("#msg").html(`Error: ${error[0].id}: ${error[0].msg}`);
  });
}
