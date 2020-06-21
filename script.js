var sysbarSystem = document.getElementById("systemButton");
var sysbarApps = document.getElementById("appsButton");
var sysbarSystemContextMenu = document.getElementById("systemContextMenu");
var sysbarAppsContextMenu = document.getElementById("appsContextMenu");
var sysbarClick = false;
var clockDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var clockMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var osContextMenu = document.getElementById("osContextMenu");

setInterval( function() {
	var date = new Date();
  var minute = date.getMinutes()
  if (date.getMinutes() < 10) minute = "0" + date.getMinutes();
	document.getElementById("sysbarClock").innerHTML = clockDays[date.getDay()] + " " + clockMonths[date.getMonth()] + " " + date.getDate() + " - " + " " + date.getHours() + ":" + minute;
}, 1000);

sysbarSystem.addEventListener("click", function() {
  if (sysbarClick) {
    sysbarClick = false;
    sysbarSystem.style = null;
    sysbarSystemContextMenu.style = "display: none;";
    sysbarAppsContextMenu.style = "display: none;";
    sysbarApps.style = null;
  } else {
    sysbarClick = true;
    sysbarSystemContextMenu.style = "transform: translate(0px, -20px);";
    setTimeout(function(){
      sysbarSystemContextMenu.style = "transform: translate(0px, 0px);";
    }, 1)
    sysbarSystem.style = "background-color: #004b8a;";
  }
});
sysbarApps.addEventListener("click", function() {
  if (sysbarClick) {
    sysbarClick = false;
    sysbarApps.style = null;
    sysbarSystemContextMenu.style = "display: none;";
    sysbarAppsContextMenu.style = "display: none;";
    sysbarSystem.style = null;
  } else {
    sysbarClick = true;
    sysbarAppsContextMenu.style = "transform: translate(87px, -20px);";
    setTimeout(function(){
      sysbarAppsContextMenu.style = "transform: translate(87px, 0px);";
    }, 1)
    sysbarApps.style = "background-color: #004b8a;";
  }
});

sysbarSystem.addEventListener("mouseover", function() {
  if (sysbarClick) {
    sysbarSystem.style = "background-color: #004b8a;";
    sysbarSystemContextMenu.style = null;
    sysbarAppsContextMenu.style = "display: none;";
    sysbarApps.style = null;
  }
});
sysbarApps.addEventListener("mouseover", function() {
  if (sysbarClick) {
    sysbarApps.style = "background-color: #004b8a;";
    sysbarSystemContextMenu.style = "display: none;";
    sysbarAppsContextMenu.style = "transform: translate(87px, 0px);";
    sysbarSystem.style = null;
  }
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    osContextMenu.style = "position: fixed;";
    osContextMenu.style.top = (e.clientY - 20) + "px";
    osContextMenu.style.left = e.clientX + "px";
    setTimeout(function() {
      osContextMenu.style.top = e.clientY + "px";
    }, 1)
}, false);
document.addEventListener("mousedown", function() {
  osContextMenu.style = "display: none;"
})

document.getElementById("systemShutdown").onmousedown = function() {
  document.getElementById("shutdown").style = null;
  setTimeout(function() {
    document.getElementById("shutdown").style = "transition:0.5s;background-color:black;width:100%;height:100%;position:absolute;z-index:256;";
  }, 1)
}

document.getElementById("systemReboot").onmousedown = function() {
  document.getElementById("shutdown").style = null;
  setTimeout(function() {
    document.getElementById("shutdown").style = "transition:0.5s;background-color:black;width:100%;height:100%;position:absolute;z-index:256;";
  }, 1);
  setTimeout(function() {
    location = location;
  }, 1000);
}

function windowEnable(elmnt, canDrag) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var firstActivate = document.getElementById(elmnt.id + "Open")
  var secondActivate = null;
  var thirdActivate = null;
  var fourthActivate = null;
  document.getElementById(elmnt.id + "Close").onmouseup = function() {
    elmnt.style = "display: none;";
  }
  try {var secondActivate=document.getElementById(elmnt.id + "Open2");}catch(a){}
  try {var thirdActivate=document.getElementById(elmnt.id + "Open3");}catch(a){}
  try {var fourthActivate=document.getElementById(elmnt.id + "Open4");}catch(a){}
  if (secondActivate) {
    secondActivate.onmouseup = function() {
      elmnt.style = "top: 30px;";
      setTimeout(function() {
        elmnt.style = "top: 50px;";
      }, 1)
      setTimeout(function() {
        elmnt.style = "top: 50px; transition: none;";
      }, 100)
    }
  }
  if (thirdActivate) {
    thirdActivate.onmousedown = function() {
      elmnt.style = "top: 30px;";
      setTimeout(function() {
        elmnt.style = "top: 50px;";
      }, 1)
      setTimeout(function() {
        elmnt.style = "top: 50px; transition: none;";
      }, 100)
    }
  }
  if (fourthActivate) {
    fourthActivate.onmousedown = function() {
      elmnt.style = "top: 30px;";
      setTimeout(function() {
        elmnt.style = "top: 50px;";
      }, 1)
      setTimeout(function() {
        elmnt.style = "top: 50px; transition: none;";
      }, 100)
    }
  }
  firstActivate.onmouseup = function() {
    elmnt.style = "top: 30px;";
    setTimeout(function() {
      elmnt.style = "top: 50px;";
    }, 1)
    setTimeout(function() {
      elmnt.style = "top: 50px; transition: none;";
    }, 100)
  }
  if (canDrag) {
    document.getElementById(elmnt.id + "TitleBar").onmousedown = function(e) {
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.getElementById("aboutWindow").style.zIndex = 1;
    document.getElementById("settingsWindow").style.zIndex = 1;
    document.getElementById("uiWindow").style.zIndex = 1;
    document.getElementById("terminalWindow").style.zIndex = 1;
    elmnt.style.zIndex = 2;
    document.onmouseup = function() {document.onmouseup = null; document.onmousemove = null;};
    document.onmousemove = function(e) {
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      e.preventDefault();
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    }
  }
}

windowEnable(document.getElementById("aboutWindow"), true);
windowEnable(document.getElementById("settingsWindow"), true);
windowEnable(document.getElementById("uiWindow"), true);
windowEnable(document.getElementById("terminalWindow"), true);

document.getElementById("closeAllWindows").onmousedown = function() {
  document.getElementById("aboutWindow").style = "display: none;";
  document.getElementById("settingsWindow").style = "display: none;";
  document.getElementById("uiWindow").style = "display: none;";
  document.getElementById("terminalWindow").style = "display: none;";
}

window.onload = function() {
    document.getElementById("shutdown").style = "display: none;";
    document.getElementById("startup").style = "background-color:black;color:white;width:100%;height:100%;position:absolute;z-index:256;text-align:center;";
    setTimeout(function() {
      document.body.removeChild(document.getElementById("startup"));
      document.getElementById("shutdown").style = "background-color:black;width:100%;height:100%;position:absolute;z-index:256;";
      setTimeout(function() {
        document.getElementById("shutdown").style = "transition:0.5s;margin:50%;margin-top:0%;width:0%;height:0%;position:absolute;";
        setTimeout(function(){document.getElementById("shutdown").style = "display: none;"},600)
      }, 1000)
    }, 1000);
}

//settings.js
var fontSize = document.getElementById("settingsFontSize")
var fontSizeStyle = document.createElement("style");
document.head.appendChild(fontSizeStyle);
fontSizeStyle.sheet.insertRule("a{}");
var transparencyEffects = document.getElementById("settingsTransparencyEffects");
var transparencyEffectsStyle = document.createElement("style");
document.head.appendChild(transparencyEffectsStyle);
transparencyEffectsStyle.sheet.insertRule("a{}");
var backgroundURL = document.getElementById("settingsWallpaperURL");
var backgroundURLStyle = document.createElement("style");
document.head.appendChild(backgroundURLStyle);
backgroundURLStyle.sheet.insertRule("a{}");

fontSize.addEventListener("input", function() {
  fontSizeStyle.sheet.deleteRule(0);
  fontSizeStyle.sheet.insertRule("*:not(h1){font-size:" + fontSize.value + "px;}");
  document.getElementById("settingsFontSizePreview").innerHTML = "Font Size: " + fontSize.value + "px";
});

transparencyEffects.onchange = function() {
  if (transparencyEffects.checked) {
    transparencyEffectsStyle.sheet.deleteRule(0);
    transparencyEffectsStyle.sheet.insertRule("a{}");
  } else {
    transparencyEffectsStyle.sheet.deleteRule(0);
    transparencyEffectsStyle.sheet.insertRule(".blur{backdrop-filter:none;background-color:rgb(40,40,40);}");
  }
}

document.getElementById("settingsWallpaperURLSelect").onclick = function() {
  backgroundURLStyle.sheet.deleteRule(0);
  backgroundURLStyle.sheet.insertRule("body{background-image:url('" + backgroundURL.value + "')}")
}