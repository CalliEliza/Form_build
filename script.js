$(document).ready(function(){
    
    // function that toggles the email box
    $("#subscribe").change(function() {
        if (this.checked) {
            $("#emailpara").slideDown('fast');
        }
        else {
            $("#emailpara").slideUp('fast');
        }
    });
});

// function that copies postal address to home address

function setHomeAddress() {
    var txtarea = document.getElementById("postaladdress");
 
    var checkbox = document.querySelector("#homepostalcheck");
    checkbox.addEventListener("click", function() {                 
        if (homepostalcheck.checked == true) {
            document.getElementById("homeaddress").value = txtarea.value;
        }
        else {
            document.getElementById("homeaddress").value = homeaddress.defaultValue;
        }
    })
}

setHomeAddress();