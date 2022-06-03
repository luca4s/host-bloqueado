const hosts = [
    "gartic",
    "poki",
    "friv",
    "clickjogos",
    "stopots",
    "roblox",
    "minijogos",
    "gaamess",
    "trex-runner",
    "jogos360",
    "santatracker",
    "aiwigame",
    "chess",
    "pornhub",
    "xvideos",
    "1001jogos",
    "lagged",
    "genioquiz",
    "now.gg",
    "akinator",
    "coolmathgames"
];
hosts.forEach(function (v, i) {
    if (window.location.host.match(v)) {
        document.head.innerHTML = '<title>Host bloqueado.</title> <style>body { text-align: center; font-family: Arial, Helvetica, sans-serif; }</style>'
        document.body.innerHTML = '<b class="title">Host bloqueado.</b><br><a>Este host foi bloqueado pela biblioteca por motivos de uso impróprio.</a><br><a>Por favor, apenas use os computadores para motivos educacionais.</a>'
    }
});
