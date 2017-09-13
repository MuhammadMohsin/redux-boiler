export default class path {

    static environment = "dev";
    // static environment = "prod";
    static baseUrl = this.environment === "dev" ? "" : "https://abc.com/";

    //authentication URL
    static SIGNUP = this.baseUrl + "api/user/signup";
    static LOGIN = "https://jsonplaceholder.typicode.com/posts"; // temp for now
    
}