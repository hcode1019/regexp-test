const str = `
010-1234-5678
hansol@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog,
abbcccdddd
https//localhost:1234
`

// 생성자 함수 방식
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식
// const regexp = /the/gi
// console.log(str.match(regexp))


// const regexp = /fox/gi
// // console.log(regexp.test(str))
// console.log(str.replace(regexp,'AAA'))

// const regexp = /the/g
// console.log(str.match(regexp))

// console.log(str.match(/\.$/gim))



console.log(
  str.match(/d$/g)
)
// 문자 데이터 str 에서 시작부분과 끝부분은 백틱 back tick 기호를
// 기준으로 앞과 뒤이기 때문에 js파일 라인에서 확인하면 1번라인 백틱기호 뒤와
// 7번 라인 맨 앞쪽이 된다 문자열의 기준이 아니라 백틱 기호 기준.

console.log(
  str.match(/$d/gm)
)

// 위의 표현식과는 다르게 m 옵션 multi line을 통해서 각 줄을 검사한다



console.log(
  str.match(/http/g)
)

console.log(
  str.match(/h..p/g)
)
// 위 두개의 패턴은 일치한다

console.log(
  str.match(/fox|dog/g)
)

console.log(
  str.match(/https?/g)
)

console.log(
  str.match(/d{2}/)
)

console.log(
  str.match(/[fox]/g)
)