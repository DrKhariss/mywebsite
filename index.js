var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
    
     var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let accordion = document.getElementsByClassName("accordion");
const totalAccordions = accordion.length;

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;

    if (panel.classList[1] === "panel-closed") {
      panel.classList.add("panel-open");
      panel.classList.remove("panel-closed");
    } else {
      panel.classList.add("panel-closed");
      panel.classList.remove("panel-open");
    }
  });
}

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;

    if (panel.classList[1] === "panel-closed") {
      panel.classList.add("panel-open");
      panel.classList.remove("panel-closed");
    } else {
      panel.classList.add("panel-closed");
      panel.classList.remove("panel-open");
    }
  });
}

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {

  e.target.classList.toggle("accordion-active");

    let panel = e.target.nextElementSibling;

    if (panel.classList[1] === "panel-closed") {
      panel.classList.toggle("panel-open");
    } 
  });
}

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;

    if (panel.classList[1] === "panel-closed") {
      e.target.classList.toggle("accordion-active");
      panel.classList.toggle("panel-open");
      closeAllExcept(panel);
    }
  });
} 

const closeAllExcept = (pan) => {
  for (let i = 0; i < totalAccordions; i++) {
    let panelToClose = accordion[i].nextElementSibling;
    if(panelToClose !== pan){
       accordion[i].classList.remove("accordion-active");
       panelToClose.classList.remove("panel-open");
    }
  }

  for (let i = 0; i < totalAccordions; i++) {
    let panelToClose = accordion[i].nextElementSibling;
    if(panelToClose !== pan){
       accordion[i].classList.remove("accordion-active");
       panelToClose.classList.remove("panel-open");
    }
  }


for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;

    if (panel.classList[1] === "panel-closed") {
      e.target.classList.toggle("accordion-active");
      panel.classList.toggle("panel-open");
      closeAllExcept(panel);
    }
  });
} 

  for (let i = 0; i < totalAccordions; i++) {
    let panelToClose = accordion[i].nextElementSibling;
    if(panelToClose !== pan){
       accordion[i].classList.remove("accordion-active");
       panelToClose.classList.remove("panel-open");
    }
  }
}
