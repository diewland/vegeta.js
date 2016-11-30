function Vegeta(){
  
  var $ = function(sel){
    if (sel[0] == "#" && sel.indexOf(' ') == -1){// #id => by ID (faster), else query selector
      return document.getElementById( sel.slice(1) ) || document.createElement("div");
    }
    return document.querySelector(sel) || document.createElement("div");
  };
  
  this.bind_nav_toggle = function(){
    var $toggle = $('.nav-toggle');
    var $menu = $('.nav-menu');
    $toggle.addEventListener('click',function() {
      this.classList.toggle('is-active');
      $menu.classList.toggle('is-active');
    });
  };
  
  this.bind_notif = function(sel){
    $(sel).innerHTML = `
      <div style='display: none;' id='vgt-balloon' class="notification">
        <button class="delete"></button>
        <span>Loading..</span>
      </div>
    `;
    $('#vgt-balloon .delete').addEventListener('click',function(){
      $('#vgt-balloon').style.visibility = "hidden";
    });
  };
  
  this.notif = function(msg, type){
    $bal = $('#vgt-balloon');
    if(type){
      $bal.classList.add('is-'+type);
    }
    $bal.classList.add('notification');
    $bal.innerHTML = msg;
    $bal.style.visibility = "visible";
  }
  this.notif_info = function(msg){
    this.notif(msg, 'info');
  }
  this.notif_primary = function(msg){
    this.notif(msg, 'primary');
  }
  this.notif_success = function(msg){
    this.notif(msg, 'success');
  }
  this.notif_warning = function(msg){
    this.notif(msg, 'warning');
  }
  this.notif_danger = function(msg){
    this.notif(msg, 'danger');
  }
}
