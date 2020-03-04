class Lazy {
  constructor () {
    this.functions = []
  }

  add (func, ...args) {
    this.functions.push({
      func,
      args
    })
    return this
  }

  evaluate (args) {
    return args.map(arg => {
      this.functions.forEach(func => {
        arg = func.func(...[arg, ...func.args])
      })
      return arg
    })
  }
}

module.exports = Lazy
