var contractAddress;
var keys = { sk:
   'edskRrYMqSJK5VeuF7JJ8xY53uj9iPq6jbKzQwcCehydrfTP6H9B6x7UPdQidfwvx51bNDkRq6AXCZpfx3sY7XR4Cve
   XhQYsEU',
  pk: 'edpku47Gsf34xh3mJ5bnwWAmUp72UsFsqHyaVrFBeJhvHV1De2cBV6',
  pkh: 'tz1LpLiNNqMTfPJpf52H558Lmqx6Xomaor1S' }
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
  eztz.contract.send(contractAddress, account, keys, 0, '\"' + memoToWrite + '\"', 1000000, 800000, 60000).then(function(res){
    console.log(res);
    $("#msg").html(`Please wait for the transaction to complete.\n Operation Hash: ${res.hash}`);
  }).catch(function(e){
    console.log(e);
    $("#msg").html(`Error: ${e[0].id}: ${e[0].msg}`);
  });
}
