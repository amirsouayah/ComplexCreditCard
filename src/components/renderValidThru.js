

const renderValidThru = number => {
    number = number.toString()
    return number.slice(0,2) + '/' + number.slice(2)
}

export default renderValidThru;