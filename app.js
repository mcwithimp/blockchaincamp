var contractAddress;
var keys = { 
  "sk": "edskRrYMg...",
  "pk": "edpku47Gs...",
  "pkh": "tz1LpLiNNq..."
};
var account;

function loadData() {
  contractAddress = "KT1PSxxxxx";
  eztz.node.setProvider("http://12.34.56.78:8732");
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
  eztz.contract.send(contractAddress, account, keys, 0, '\"' + memoToWrite + '\"', 1000000, 800000, 60000).then(function(res){
    console.log(res);
    $("#msg").html(`Please wait for the transaction to complete.\n Operation Hash: ${res.hash}`);
  }).catch(function(e){
    console.log(e);
    $("#msg").html(`Error: ${e[0].id}: ${e[0].msg}`);
  });
}
