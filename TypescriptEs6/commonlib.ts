export function printLine(msg:string) {
  var node = document.getElementById("output");
  node.innerHTML += ('> ' + (msg || '') + "<br/>");
}
