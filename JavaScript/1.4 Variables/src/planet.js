const OUR_PLANET_NAME = 'Earth';
const currentUserName = {name : "John Remorkek"};

currentUserName.name = 'John Doe'; // Tohle funguje protože měním vlastnost objektu a neměním jeho referenci

if(true)
    var me = `CurrentUsers`; //var je zastaralý a function scope -> nepoužívat!

console.log(me); // ikdyž je to součástí if a tudíž v jiné vrstvě, stejné se díky var k tomu dokážu dostats
alert(`${OUR_PLANET_NAME} is visited by ${currentUserName.name}`);