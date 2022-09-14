const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let a = array1;
  let b = array2;
  if ((a==null || a==undefined) && (b==null || b==undefined)){
    return undefined;
  }else if (a==null || a==undefined){
  return b;
 }else if (b==null || b==undefined){
  return a;
 }else {
  return a.concat(b);
 }

}
module.exports = concatArray


// #### ให้เขียน Function ชื่อ concatArray (array1, array2) เพื่อ return เป็น array ที่ประกอบด้วยสมาชิกทั้งหมดและเรียงลำดับจาก element 
// ใน array1 และตามด้วย element ใน array2

// - กรณี array1 และ array2 ทั้งคู่มีค่า null หรือ undefined ให้คืนค่ากลับเป็น undefined
// - กรณี array1 และ array2 ทั้งคู่เป็น empty array ทั้งคู่ ให้ return empty array
// - กรณี array1 หรือ array2 อันใดอันหนึ่ง มีค่าเป็น empty array หรือ มีค่าเป็น null หรือ undefined ให้ return element ของ array ที่มีรายการแทน