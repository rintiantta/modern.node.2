(function() {
  var fs;

  fs = require("fs");

  /*
  # 디렉토리를 읽습니다.
  output = []
  dir.forEach (item) ->
      output.push item if item.indexOf(".") is -1
  
  # 디렉토리 내부의 파일을 검출합니다.
  output.forEach (item) ->
      rint = item
      master = parseInt item
      if isNaN master then return
      dir = fs.readdirSync item
      dir = dir.filter (item) -> parseInt item
      dir.forEach (item) ->
          fs.renameSync "./#{rint}/#{item}", "./#{rint}/#{master}-#{item}"
  */


  ["A", "B", "C", "D", "E", "F"].forEach(function(item) {
    var dir;
    dir = fs.readdirSync("./부록" + item);
    dir = dir.filter(function(item) {
      return parseInt(item);
    });
    return dir.forEach(function(file) {
      var a, b;
      a = "./부록" + item + "/" + file;
      b = "./부록" + item + "/" + (item.toLowerCase()) + "-" + file;
      return fs.renameSync(a, b);
    });
  });

}).call(this);
