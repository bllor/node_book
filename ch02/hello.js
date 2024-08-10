const http = require("http");
let count = 0;
const server = http.createServer((req,res)=>{ 
    // creatServer(callback): 서버 인스턴스를 만드는 함수.
    // 인수로는 콜백 함수를 받는데, 콜백 함수에서는 http서버로 요청이 들어오면 해당 요청을 처리할 수 있는 함수를 설정
    // 콜백함수는 요청 처리에 사용할 요청(req)와 응답(res)객체를 인수로 받습니다.

    log(count);
    res.statusCode =  200; // 요청에 대한 상태코드
    res.setHeader("Content-Type","text/plain") 
    // http 요청, 응답에 대한 부가정보를 설정하는 곳
    // 콘텐츠 타입을 text/plain으로 정했으며, text/plain은 텍스트를 평문으로 해석하겠다는 뜻입니다.
    // text/html일 경우 html로 해석한다는 뜻이 됩니다. 
    res.write("Hello\n")
    setTimeout(()=>{
        res.end("Node.js")
    },2000);
})

function log(count){
    console.log(count+=1)
}
server.listen(8000);