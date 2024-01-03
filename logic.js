var button=document.getElementById("button")
var resume=document.getElementById("resume")
button.onclick=function(){
    var link = 'https://github.com/MirgudeMahesh';
    window.open(link, '_blank');
}

resume.onclick=function(){
    var link1='https://drive.google.com/file/d/16CYhIsXZ30rtISwjWyTLAtstk2RO9lzN/view';
    window.open(link1, '_blank');
}
var aboutme_link=document.getElementById("aboutmel")
var aboutme=document.getElementById("aboutme")
aboutme_link.onclick=function(){
    aboutme.scrollIntoView({ behavior: 'smooth' });
}

var skills_link=document.getElementById("skills")
var moreinfo=document.getElementById("moreinfo")
skills_link.onclick=function(){
    moreinfo.scrollIntoView({ behavior: 'smooth' });
}
var myinsta=document.getElementById("myinsta")
myinsta.onclick=function(){
    var link2="https://www.instagram.com/direct/t/117509539636965/"
    window.open(link2,'_blank');
}

var ln=document.getElementById("ln")
ln.onclick=function(){
  
        var link3="https://www.linkedin.com/in/mirgude-mahesh-kumar-794546221/"
        window.open(link3,'_blank');
    
  
    
}
var contact=document.getElementById("contact")
var footer=document.getElementById("footer")
contact.onclick=function(){
footer.scrollIntoView({behavior:'smooth'})
}
var mymail=document.getElementById("mymail")
mymail.onclick=function(){
    var emailAddress = 'mirgudemahesh2002@gmail.com';

    // Construct the mailto URL
    var mailtoURL = 'mailto:' + emailAddress;

    // Open the user's default email client
    window.location.href = mailtoURL;

}
document.addEventListener('DOMContentLoaded', function() {
    // After the page has fully loaded, reveal the text letter by letter
    var textElement = document.getElementById('hidden-text');
    var text = textElement.innerText;
    textElement.innerHTML = ''; // Clear the original text

    for (var i = 0; i < text.length; i++) {
        setTimeout(function(index) {
            textElement.innerHTML += text[index];
            if (index === text.length - 1) {
                textElement.classList.remove('hidden-text'); // Remove the hidden class after all letters are displayed
            }
        }, i * 40, i); // Adjust the delay (100ms in this example) to control the speed of text appearing
    }
});

function  changefun(){
    var select = document.getElementById("options");
    var selectedValue = select.value;

    switch (selectedValue) {
      case "Skills":
         var moreinfo=document.getElementById("moreinfo")
        moreinfo.scrollIntoView({ behavior: 'smooth' });
      
        // Your custom logic for Option 1
        break;
      case "About Me":
        var aboutme=document.getElementById("aboutme")
        aboutme.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Contact":
        var footer=document.getElementById("footer")
        footer.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        // Handle default case if needed
        break;}
    }