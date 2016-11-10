function Vegeta(){

  this.bind_nav_toggle = function(){
    var $toggle = $('.nav-toggle');
    var $menu = $('.nav-menu');
    $toggle.click(function() {
      $(this).toggleClass('is-active');
      $menu.toggleClass('is-active');
    });
  };

  this.bind_notif = function(sel){
    $(sel).html(`
      <div style='display: none;' id='vgt-balloon' class="notification">
        <button class="delete"></button>
        <span>Loading..</span>
      </div>
    `);
    $('#vgt-balloon .delete').click(function(){
      $('#vgt-balloon').hide();
    });
  };

  this.notif = function(msg, type){
    $('#vgt-balloon').removeClass();
    if(type){
      $('#vgt-balloon').addClass('is-'+type);
    }
    $('#vgt-balloon').addClass('notification');
    $('#vgt-balloon span').html(msg);
    $('#vgt-balloon').show();
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
