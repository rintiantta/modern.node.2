# 모듈을 추출합니다.
fs = require "fs"
#dir = fs.readdirSync "."
###
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
###

["A", "B", "C", "D", "E", "F"].forEach (item) ->
    dir = fs.readdirSync "./부록#{item}"
    dir = dir.filter (item) -> parseInt item
    dir.forEach (file) ->
        a = "./부록#{item}/#{file}"
        b = "./부록#{item}/#{item.toLowerCase()}-#{file}"
        fs.renameSync a, b