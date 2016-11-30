function Vegeta(){
  
  var $ = function(sel, parent){
    parent = parent || document;
    if (sel[0] == "#" && sel.indexOf(' ') == -1){// #id => by ID (faster), else query selector
      return parent.getElementById( sel.slice(1) ) || parent.createElement("div");
    }
    return parent.querySelector(sel) || parent.createElement("div");
  };
  
  function resetClasses(el){
    var classes = ["is-default","is-danger","is-success","is-primary","is-warning","is-info"];
    for (var i = 0; i < classes.length; i ++){
      el.classList.remove(classes[i]);
    }
  }
    
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
        <span class="msg">Loading..</span>
      </div>
    `;
    $('#vgt-balloon .delete').addEventListener('click',function(){
      $('#vgt-balloon').style.display = "none";
    });
  };
  
  this.notif = function(msg, type){
    $bal = $('#vgt-balloon');
    if(type){
      resetClasses($bal);
      $bal.classList.add('is-'+type);
    }
    $bal.classList.add('notification');
    $('.msg',$bal).innerHTML = msg;
    $bal.style.display = "";
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
