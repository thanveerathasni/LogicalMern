

function countUniqueVowels(str) {
  let vow = "AEIOUaeiou"
  let count = 0
  let res = []
  for(let i = 0 ; i<str.length;i++){
    if(vow.includes(str[i])&& !res.includes(str[i])){
      res.push(str[i])
      count++
    }
    
  }
  
      return count

  
  
}

  console.log(countUniqueVowels("thanveera"))


