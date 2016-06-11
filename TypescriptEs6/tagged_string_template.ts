import {printLine as print} from './commonlib';

const friend = (strings:string[], ...substitutions:string[]) => {
  const result = [];
  substitutions.forEach((sub, index) => {
    result.push(strings[index], sub);
  });
  result.push(strings[strings.length - 1]);
  return result.join('');
}
var name = "Joonhwan";
print(friend`Hello, ${name}`);

var family : string[] = ['Joonhwan', 'Sinyoung', 'Seoyeon', 'Eunseo'];

for(var member in family) {
  print('Family:' + member);
}

for(var member of family) {
  print('Family:' + member);
}

const instrument:string = "œå";
for(let c of instrument) {
  print(c);
}
print('END');
