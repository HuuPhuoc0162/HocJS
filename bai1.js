var myString = 'Hoc js khong kho js khong kho js'

// 1.length
console.log('length: ',myString.length); // tra ve do dai cua chuoi

// 2.Find index
// indexOf(),lastIndexOf() neu khong tim thay gia tri se tra ve -1
console.log('indexOf(js): ',myString.indexOf('js')); // tra ve vi tri xuat hien 'js'
console.log('indexOf(js,8): ',myString.indexOf('js',8)); // tra ve vi tri xuat hien 'js' tu sau vi tri thu 8
console.log('lastIndexOf(js): ',myString.lastIndexOf('js')); // tra ve vi tri xuat hien 'js' cuoi cung

// search()
console.log('search(): ',myString.search('js')); // khong ho tro tim tu vi tri thu 1, 2, 3,...

// cut String
// luu y: cat tu phai sang trai thi dem theo so am 
console.log('slice(): ',myString.slice(4)); // cat tu vi tri thu 4 den het chuoi
console.log('slice(): ',myString.slice(4,6)) // cat tu vi tri thu 4 den vi tri thu 6

// replace
console.log('replace: ',myString.replace('js','java')); // luu y: chi ghi de chu 'js' dau tien
console.log('replace: ',myString.replace(/js/g,'java')); // ghi de tat ca chu 'js; thanh 'java'

// convert to upper case 
console.log('toUpperCase(): ',myString.toUpperCase()); // chuyen tat ca chu trong chuoi thanh chu hoa
console.log('toLowerCase(): ',myString.toLowerCase()); // chuyen tat ca chu trong chuoi thanh chu thuong

// trim
var tm = '  huu phuoc  ';
console.log('do dai ban dau: ',tm.length);
console.log('trim(): ',tm.trim()); // xoa bo khoang trang cua hai dau
console.log('do dai sau khi su dung trim: ',tm.trim().length);

// split
// cat chuoi thanh arrays

var sp = 'java, css, html';
console.log('split(): ',sp.split(', ')); // tim diem chung de cat chuoi

//get a character by index
var test = 'Huu Phuoc';
console.log('charAt(): ',test.charAt(0)); // tra vi gia tri tuong ung voi vi tri index
// neu index khong hop le se tra ve chuoi rong

console.log('cach 2: ',test[0]); // tuong tu charAt() 
console.log(test[20]); // nhung neu truyen vao index khong hop le se tra ve undefined
