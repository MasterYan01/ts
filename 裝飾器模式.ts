interface ICalculate {
  calculate(): void
}
class Calculate implements ICalculate {
  calculate(): void {
    console.log('[核心邏輯]')
  }
}
class TimeDecorator implements ICalculate {
  cal: ICalculate
  constructor(cal: ICalculate) {
    this.cal = cal
  }
  calculate(): void {
    let startTime = new Date().getTime()
    this.cal.calculate()
    let spendTime = new Date().getTime() - startTime
    console.log('first', spendTime)
  }
}
class LogDecorator implements ICalculate {
  cal: ICalculate
  constructor(cal: ICalculate) {
    this.cal = cal
  }
  calculate(): void {
    console.log('執行開始')
    this.cal.calculate()
    console.log('執行結束')
  }
}

//索引操作符之後的聽不懂 很難聽不懂