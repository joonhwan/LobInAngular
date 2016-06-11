const addressData = {
  street1 : '보라동 한보라마을 5단지',
  street2 : '기흥구',
  city : '용인시',
  state : '경기도',
  zip : '302-402',
  country: '대한민국',
};

let {street1:st1, street2:st2, country} = addressData;
print(`${st1}, ${st2}, ${country}`);


const gonmuwon = {
  name: '박근혜',
  age: 52,
  title: 'President',
  department: 'Blue House',
  sex: 'Female'
};

const myself = {
  name: '이준환',
  age: 47,
  job: 'Software Developer',
  Company: 'mirero',
  sex: 'Male'
};

const category = ({age, sex}) => {
  if(age > 50) {
    return sex == 'Female' ? 'Grandma' : 'Grandfa';
  } else {
    return sex == 'Female' ? 'Woman' : 'Man';
  }
}

print(category(gonmuwon));
print(category(myself));
