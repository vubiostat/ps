$(document).on('shiny:connected', function() {
  let sliderInfo = {
    mouseDown: false,
    element: undefined
  }

  $('span.irs-slider').on('mousedown', function(event) {
    sliderInfo.mouseDown = true;
    sliderInfo.element = this;
  });

  $(document).on('mouseup', function(event) {
    if (sliderInfo.mouseDown) {
      sliderInfo.mouseDown = false;
      $(sliderInfo.element).parents('div.shiny-input-container').find('input').change();
    }
  });

  $(document).on('shiny:inputchanged', function(event) {
    if (sliderInfo.mouseDown) {
      event.preventDefault();
    }
  });
});
