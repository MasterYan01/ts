interface IBasic {
  name: string,
  age: number,
}

type Student = IBasic & {
  study_direction: 'web' | 'java'
}

type Teacher = IBasic & {
  teachingAge: number,
  course: string
}

let teacher: Teacher = {
  name: 'yan',
  age: 35,
  teachingAge: 20,
  course: 'SF'
}

//行為
interface IMp5 {
  music(): void,
  watchMovie(): void,
}

interface IAlarm {
  wakeUp(): void
}
let iphone: IMp5 & IAlarm = {
  music(){

  },
  wakeUp(){

  },
  watchMovie() {
    
  },
}
