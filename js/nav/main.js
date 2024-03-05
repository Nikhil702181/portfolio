//////////////////////////////////////////////////////////////// preloader start/////////////////////////////////////////////////////////////////////
  var loader = document.getElementById("pre-loader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});
// ///////////////////////////////////////////////////////////////preloader end////////////////////////////////////////////////////////////////////
// scrolling header
window.onscroll = function() {
    var header = document.getElementById('myHeader');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // You can adjust the scroll position threshold based on your needs
    var threshold = 100;

    if (scrollPosition > threshold) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  };
///////////////////////////////////////////////////////////////////////////////////// scrolling header//////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// list hide and show start/////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
  // Hide the last two items on page load
  var listItems = document.querySelectorAll('#list li');
  listItems.forEach(function(item, index) {
    if (index >= 3) {
      item.style.display = 'none';
    }
  });
});

function toggleVisibility() {
  var listItems = document.querySelectorAll('#list li');
  var viewMoreBtn = document.getElementById('viewMoreBtn');

  listItems.forEach(function(item, index) {
    // Toggle visibility for the last two items
    if (index >= 3) {
      var currentDisplayStyle = window.getComputedStyle(item).display;
      item.style.display = currentDisplayStyle === 'none' ? '' : 'none';
    }
  });

  // Update button text based on visibility
  if (listItems[3].style.display === 'none') {
    viewMoreBtn.textContent = 'View More';
  } else {
    viewMoreBtn.textContent = 'View Less';
  }
}
 ////////////////////////////////////////////////////////////////////////// list hide and show end/////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////// hide right click go in head tag of index page start///////////////////////////////////////////////////////////////////////
        // document.addEventListener('contextmenu', function (e) {
        //     e.preventDefault(); // Prevent the right-click context menu
        // });

        // document.addEventListener('keydown', function (e) {
        //     if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 67)) {
        //         e.preventDefault(); // Prevent Ctrl+U (view source) and Ctrl+C (copy)
        //     }
        // });
/////////////////////////////////////////////////////////////////////////// hide right click go in head tag of index page end //////////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////////// scroll top button start//////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  // Show or hide the button based on the scroll position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scrollToTopBtn').fadeIn();
    } else {
      $('#scrollToTopBtn').fadeOut();
    }
  });

  // Smooth scroll to the top when the button is clicked
  $('#scrollToTopBtn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, {
      duration: 0,
      easing: 'swing'
    });
    return false;
  });
});
////////////////////////////////////////////////////////////////////////////////// scroll top end //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////typewritter start //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const words = ['HTML 5', 'CSS 3', 'BOOTSTRAP 5', 'PHP', 'SQl'];
  let index = 0;
  const speed = 150;

  function typeWriter() {
    const word = words[index];
    let i = 0;

    function type() {
      if (i < word.length) {
        $('#typewriter').append(word.charAt(i));
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(erase, speed * 3);
      }
    }

    function erase() {
      if (i >= 0) {
        const partialWord = word.substring(0, i);
        $('#typewriter').html(partialWord);
        i--;
        setTimeout(erase, speed / 2);
      } else {
        index = (index + 1) % words.length;
        setTimeout(typeWriter, speed);
      }
    }

    type();
  }

  $(document).ready(typeWriter);
//////////////////////////////////////////////////////////////////////////////////typewritter end//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


