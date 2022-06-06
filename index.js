const hosts = ["pornhub", "xvideos", "gartic", "poki", "friv", "clickjogos", "stopots", "roblox", "minijogos", "gaamess", "trex-runner", "jogos360", "santatracker", "aiwigame", "chess", "1001jogos", "lagged", "genioquiz", "now.gg", "akinator", "coolmathgames", "term.ooo", "gogy.com", "contexto.me", "quizparamigos.com"];
var host = window.location.host

hosts.forEach(function (v) {
    if (host.match(v)) {
        var script = document.createElement("script")
        script.type = "text/javascript"
        script.innerHTML = `setTimeout(function() { document.body.innerHTML = '<b class="title">Host bloqueado.</b><br><a>O host ${host} foi bloqueado pela biblioteca por motivos de uso impróprio.</a><br><a>Por favor, apenas use os computadores para motivos educacionais.</a>'; }, 1)`
        document.head.innerHTML = '<title>Host bloqueado.</title> <style>body { text-align: center; font-family: Arial, Helvetica, sans-serif; }</style>';
        document.head.appendChild(script)
    };
});