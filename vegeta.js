function Vegeta(){
  
  var $ = function(sel, parent){
    parent = parent || document;
    if (sel[0] == "#" && sel.indexOf(' ') == -1){// #id => by ID (faster), else query selector
      return parent.getElementById( sel.slice(1) ) || parent.createElement("div");
    }
    return parent.querySelector(sel);
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
      $toggle.classList.toggle('is-active');
      $menu.classList.toggle('is-active');
    });
    // https://stackoverflow.com/a/18504302/466693
    $toggle.setAttribute('tabindex', 0);
    $toggle.addEventListener('blur',function(e) {
      // do not hide menu when click menu item
      if((e.relatedTarget != null) && (!e.relatedTarget.classList.contains('nav-item'))){
        $toggle.classList.remove('is-active');
        $menu.classList.remove('is-active');
      }
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
  this.notif_default = function(msg){
    this.notif(msg, 'default');
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
