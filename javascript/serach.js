function searchElement() {
    var searchQuery = document.getElementById('searchBox').value.toLowerCase();
    var elements = document.querySelectorAll('[id*="' + searchQuery + '"]');

    if (elements.length > 0) {
      elements.forEach(element => {
        // Scroll to the element for better visibility
        element.scrollIntoView({ behavior: 'smooth' });
      });
    } 
  }





  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
  }