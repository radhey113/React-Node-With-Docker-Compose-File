// URL constants
// const BaseURL = 'http://13.232.17.77:8080/';
let BaseURL = 'http://127.0.0.1:4000/';

if(process.env.NODE_ENV === 'production'){

    console.log("Production port...");
    BaseURL = 'http:localhost:4001/';
}else{
    console.log("Development or local port...");
    // BaseURL = 'http://13.232.17.77:8080/';
    BaseURL = 'http://localhost:4000/';
}

export const LoaderColors = {
    red: 'red',
    green: 'green',
    black: 'black',
    primary: 'primary'
};