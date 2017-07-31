var Vegeta = {

  // bind navbar burger
  // original script from http://bulma.io/documentation/components/navbar/
  bind_nav_burger: function(){
    document.addEventListener('DOMContentLoaded', function () {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      // Check if there are any nav burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  },

  // notifications
  bind_notif: function(target_id){
    document.getElementById(target_id).innerHTML =
            "<div id='vgt-balloon' class='notification' style='display: none;'>"
          + "<button id='vgt-balloon-x' class='delete'></button>"
          + "<span id='vgt-balloon-msg'>Loading..</span>"
          + "</div>";
    document.getElementById('vgt-balloon-x').addEventListener('click', function(){
      this.parentNode.style.display = 'none';
    });
  },
  notif: function(msg, type){
    $bal = document.getElementById('vgt-balloon');
    $bal.setAttribute('class', 'notification');
    if(type){
      $bal.classList.add('is-'+ type);
    }
    document.getElementById('vgt-balloon-msg').innerHTML = msg;
    $bal.style.display = 'block';
  },
  notif_default: function(msg){ this.notif(msg, 'default'); },
  notif_info:    function(msg){ this.notif(msg, 'info');    },
  notif_primary: function(msg){ this.notif(msg, 'primary'); },
  notif_success: function(msg){ this.notif(msg, 'success'); },
  notif_warning: function(msg){ this.notif(msg, 'warning'); },
  notif_danger:  function(msg){ this.notif(msg, 'danger');  },

}
