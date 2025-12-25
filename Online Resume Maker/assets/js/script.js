

// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

//my extra feature to change the resume function

  document.getElementById('colorPicker').addEventListener('input', function() {
    var selectedColor = this.value;
    document.getElementById('previewContainer').style.backgroundColor = selectedColor;
  });


