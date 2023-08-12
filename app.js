const axios=require("axios")
const fs=require("fs")
async function main(){
  let r=await axios.get("https://wdbible.app/app")
  let reg=/<a href="(.*?)">/igm
  let url=r.data.match(reg)[15].replace(reg, "$1")
  fs.writeFileSync("url.txt", url)
}
main()
