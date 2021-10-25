function Counter(element, value) {
  this.counter = element
  this.value = value
  this.resetBtn = element.querySelector('.reset')
  this.increaseBtn = element.querySelector('.increase')
  this.decreaseBtn = element.querySelector('.decrease')
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.textContent = this.value

  //  ***Theres 2 ways to use the click event, using bind***
  // this.increaseBtn.addEventListener('click', this.increase.bind(this))
  //  ***OR using instances***
  this.increase = this.increase.bind(this)
  this.reset = this.reset.bind(this)
  this.decrease = this.decrease.bind(this)

  this.increaseBtn.addEventListener('click', this.increase)
  this.resetBtn.addEventListener('click', this.reset)
  this.decreaseBtn.addEventListener('click', this.decrease)
}

function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(`Please check "${selection}" seletor, no such element exists`)
}

Counter.prototype.increase = function () {
  this.value++
  this.valueDOM.textContent = this.value
}

Counter.prototype.decrease = function () {
  this.value--
  this.valueDOM.textContent = this.value
}

Counter.prototype.reset = function () {
  this.value = 0
  this.valueDOM.textContent = this.value
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)
