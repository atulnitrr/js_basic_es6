
const ss = solution();
console.log(ss);

function solution() {
  let ans = "";
  const trs = document.getElementsByTagName("table")[0].getElementsByTagName("tr");  
  [...trs].forEach(tr => {
    const td = tr.getElementsByTagName("td");
    const fd = 
    [...td].filter(td => {
      return !Object.is(td.style.color, td.style.backgroundColor)
    });

    ans = [...fd].reduce((a, b) => a + b.textContent, ans);
    
  });
  return ans;
}