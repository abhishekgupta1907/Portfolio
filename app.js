function sendReq() {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}
let myInterceptor = axios.interceptors.request.use((req) => {
    console.log(req.method.toUpperCase());
    console.log(req.url);
    return req;
});
axios.interceptors.request.eject(myInterceptor);
sendReq();
