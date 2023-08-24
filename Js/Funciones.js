window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.backgroundColor = "#F5CBA7";
      document.getElementById("navbar").style.padding = "10px";
      document.getElementById("navbar-right").style.paddingTop = "10px";
      document.getElementById("logo").style.paddingLeft = "10px";
      document.getElementById("imagen").style.width = "140px"; // 
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      
      document.getElementById("navbar").style.padding = "20px 20px";
      document.getElementById("imagen").style.width = "300px"; 
      document.getElementById("navbar-right").style.paddingTop = "20px";
    }
  }

  