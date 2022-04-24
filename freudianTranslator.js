function toFreud(string) {
  if (string === '' || string === null){
    return ''
  }else{
  let newArr = string.split(' ')
  let newArr1 = []
  for (let i = 0; i <newArr.length; i++){
    newArr[i] = 'sex'
    newArr1.push(newArr[i])
  }
  let str1 = newArr1.join(' ')
  
return str1;
    }
}
