const getRandomNumber = (min=1, max=10) => {
  return Math.ceil(Math.random() * (max - min + 1))
}

module.exports = {
  getRandomNumber
}