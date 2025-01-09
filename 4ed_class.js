const myPromise = new Promise((resolve, reject)=>{
    const success = true;
    if (success) {
        resolve("작업 성공")
    } else{
        reject(new Error("작업 살패"))
    }
})
myPromise.then((result)=>{
    console.log("성공",result)
})
.catch((error)=>{
    console.error("실패",error.message)
})