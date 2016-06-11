'use strict';

var addressData = {
    street1: '보라동 한보라마을 5단지',
    street2: '기흥구',
    city: '용인시',
    state: '경기도',
    zip: '302-402',
    country: '대한민국'
};
var st1 = addressData.street1;
var st2 = addressData.street2;
var country = addressData.country;

print(st1 + ', ' + st2 + ', ' + country);
var gonmuwon = {
    name: '박근혜',
    age: 52,
    title: 'President',
    department: 'Blue House',
    sex: 'Female'
};
var myself = {
    name: '이준환',
    age: 47,
    job: 'Software Developer',
    Company: 'mirero',
    sex: 'Male'
};
var category = function category(_ref) {
    var age = _ref.age;
    var sex = _ref.sex;

    if (age > 50) {
        return sex == 'Female' ? 'Grandma' : 'Grandfa';
    } else {
        return sex == 'Female' ? 'Woman' : 'Man';
    }
};
print(category(gonmuwon));
print(category(myself));