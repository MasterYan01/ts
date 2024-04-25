"use strict";
class Calculate {
    calculate() {
        console.log('[核心邏輯]');
    }
}
class TimeDecorator {
    constructor(cal) {
        this.cal = cal;
    }
    calculate() {
        let startTime = new Date().getTime();
        this.cal.calculate();
        let spendTime = new Date().getTime() - startTime;
        console.log('first', spendTime);
    }
}
class LogDecorator {
    constructor(cal) {
        this.cal = cal;
    }
    calculate() {
        console.log('執行開始');
        this.cal.calculate();
        console.log('執行結束');
    }
}
//索引操作符之後的聽不懂 很難聽不懂
