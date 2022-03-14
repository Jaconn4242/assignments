function digital_root(n) {
    console.log([...n.toString()].reduce((a,c) => parseInt(c) + parseInt(a), 0)) // equals 7 
   
  }