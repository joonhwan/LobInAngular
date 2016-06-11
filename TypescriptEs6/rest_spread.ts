function multiGreet(...persons: string[]) {
  persons.forEach(person => {
    print(`Hello ${person}`);
  });
}
var myFamily = ['신영', '준환', '서연', '은서'];

print("my family...");
multiGreet(...myFamily);
print();
print(`empty` + 1)
multiGreet();
print();


const instrument:string = "asdf";
for(let c of instrument) {
  print(c);
}
print('END');
