
const renderCardNumber = number => {
    number = number.toString()
   
    let resultStr = ''
    for(let i =0; i < number.length; i += 4) {
      resultStr += number.slice(i, i + 4) + ' '
    }
    return resultStr.trim()
  }

export default renderCardNumber ;
