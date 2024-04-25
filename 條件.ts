type E1 = Exclude<string | number, string>
type E2 = Extract<string | number, number>
type E3 = NonNullable<string | number | undefined | null | boolean>

function getUserInfo() {
  return { name: 'tom', age: 35 }
}
type E4 = ReturnType<typeof getUserInfo>

type E5 = Parameters<(x: number, y: number) => void>
