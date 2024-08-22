//Define it
const stockSW = "/assets/js/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
const close = localStorage.getItem('leave')
const key = localStorage.getItem('key')
const icon = localStorage.getItem('icon')
const favicon = document.getElementById('favicon')
const clickoff1 = localStorage.getItem('clickoff')
const theme = localStorage.getItem('theme');
const leave = localStorage.getItem('leave')
const er = localStorage.getItem('eurda')
const blanke = localStorage.getItem('abt')

//Random URLs
randRange = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

randomURL = function() {
    URL_LIST = [
        "https://www.google.com",
        "https://www.classroom.google.com",
        "https://www.google.com/search?q=where+to+find+ghosts",
        "https://docs.google.com"
    ]
    return URL_LIST[randRange(0, 3)]
}

window.addEventListener("chemicalLoaded", function(e) {
    new Ultraviolet.BareClient();
});

addEventListener("DOMContentLoaded", async (event) => {
    console.log('hehe')
    if(window.screen.height += '600px') {
        console.log('Not on mobile!')
    }else {
        const disc = doucment.getElementById('disc')
        const school = doucment.getElementById('school')
        const algebra = doucment.getElementById('algebra')
        const sett = doucment.getElementById('sett')
        const brows = doucment.getElementById('brows')

        disc.innerTextContent = ''
        school.innerTextContent = ''
        algebra.innerTextContent = ''
        sett.innerTextContent = ''
        brows.innerTextContent = ''
        console.log('On Mobile!')
    }

    //switches
    switch(blanke) {
        case "on":
        blank();
        break;
        case "off":
        console.log(``)
        break;
    }

    switch(er) {
        case "on":
        eruda.init();
        break;
        case "off":
        break;
        case null:
        localStorage.setItem('eruda', 'off')
        break;
    }

    switch(icon){
        case 'docs':
        favicon.href = '/assets/img/docs.png'
        document.title = "Google Docs";
        break;
        case 'drive':
        favicon.href = '/assets/img/drive.png' 
        document.title = "Google Drive";
        break;
        case 'desmos':
        favicon.href = '/assets/img/desmos.png'
        document.title = "Desmos";
        break;
        case 'canvas':
        favicon.href = '/assets/img/canvas.png'
        document.title = "Canvas";
        break;
        case 'classroom':
        favicon.href = '/assets/img/classroom.png'
        document.title = "Google Classroom";
        break;
    }
    switch(leave){
        case "on":
        window.onbeforeunload = function() {
        return true;
        };
        break;
        case "off":
        break;
    }

    //ifs
    if(clickoff1 === 'on') {
        document.addEventListener('visibilitychange', e=>{
            if (document.visibilityState === 'visible') {
                document.title = 'Ghost'
                favicon.href = '/assets/img/ghost.png'
           } else {
                document.title = 'Google Docs'
                favicon.href = '/assets/img/docs.png'
           }  
       })
    }
    if (close === 'on' ) {
        window.onbeforeunload = function() {
            return true;
        }
    } else {
            console.log(`Anti Close Disabled!`)
        }
    if (key === null) {
        localStorage.setItem('key', '`')
    }
    document.addEventListener('keydown', function(event) {
        if (event.key === key) {
            top.location.replace("https://www.google.com")
            console.log(`Key PRESSED RUN URN RUN`)
        }
      })
      if(blanke === null) {
        localStorage.setItem('abt', 'off')
    }
    if (clickoff1 === null) {
        localStorage.setItem('clickoff', 'off')
    }
    if (close === null) {
        localStorage.setItem('leave', 'off')
    }
    
      initTheme();
      registerSW();
            });
            
            //functions
        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                    document.body.setAttribute('data-theme', savedTheme);
                  }
                  if(savedTheme === 'green') {
                    document.body.style.backgroundColor =  '#49d533;';
                    document.body.setAttribute('data-theme', savedTheme);
                  }
                 }

                function blank() {
                    var currentUrl = top.location.href;
                    if (currentUrl === "about:blank") {
                      console.log(currentUrl);
                    } else {
                    var win = window.open()
                    var url = "/"
                    var iframe = win.document.createElement('iframe')
                    top.location.replace(randomURL())
                    iframe.style.position = "fixed";
                    iframe.style.top = 0;
                    iframe.style.bottom = 0;
                    iframe.style.left = 0;
                    iframe.style.right = 0;
                    iframe.style.border  = "none"
                    iframe.style.outline = "none";
                    iframe.style.width = "100%"
                    iframe.style.height = "100%";
                    iframe.src = url
                  
                    win.document.body.appendChild(iframe)
                    }
                  }

                  async function registerSW() {
                    await connection.setTransport("/epox/index.mjs");
                    if (!navigator.serviceWorker) {
                      if (
                        location.protocol !== "https:" &&
                        !swAllowedHostnames.includes(location.hostname)
                      )
                        throw new Error("Service workers cannot be registered without https.");
                  
                      throw new Error("Your browser doesn't support service workers.");
                    }
                  
                    await navigator.serviceWorker.register(stockSW);
                  }