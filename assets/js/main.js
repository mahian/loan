$(document).ready(function () {

  $(".gardinats").change(function(){
        var val = $(".gardinats:checked").val();
        if (val=='1') {
          $('#parent_text_cng').css('display','block');
          $('#parent_text_cng').html('আপনার পিতার নাম লিখুন : <span class="start_color">*</span>');
          $("#gardian_placeholder").attr("placeholder", "আপনার পিতার নাম লিখুন").placeholder();
          
        }
        else if (val=='2') {
          $('#parent_text_cng').css('display','block');
          $('#parent_text_cng').html('আপনার স্বামী নাম লিখুন : <span class="start_color">*</span>');
          $("#gardian_placeholder").attr("placeholder", "আপনার স্বামী নাম লিখুন").placeholder();
        }else{
          $('#parent_text_cng').css('display','none');
          $("#gardian_placeholder").attr("placeholder", "আপনার পিতা / স্বামী সিলেক্ট করুন ").placeholder();
        }
        
    });


  /// nomoni 

  $(".nomoni").change(function(){
        var val = $(".nomoni:checked").val();
        if (val=='1') {
          $('#nomoni_text_cng').css('display','block');
          $('#nomoni_text_cng').html('নমিনির পিতার নাম লিখুন : <span class="start_color">*</span>');
          $("#nomoni_placeholder").attr("placeholder", "আপনার পিতার নাম লিখুন").placeholder();
          
        }
        else if (val=='2') {
          $('#nomoni_text_cng').css('display','block');
          $('#nomoni_text_cng').html('নমিনির স্বামী নাম লিখুন : <span class="start_color">*</span>');
          $("#nomoni_placeholder").attr("placeholder", "নমিনির স্বামী নাম লিখুন").placeholder();
        }else{
          $('#nomoni_text_cng').css('display','none');
          $("#nomoni_placeholder").attr("placeholder", "নমিনির পিতা / স্বামী সিলেক্ট করুন ").placeholder();
        }
        
    });

  /// jamindar 

  $(".jamindar").change(function(){
        var val = $(".jamindar:checked").val();
        if (val=='1') {
          $('#jamindar_text_cng').css('display','block');
          $('#jamindar_text_cng').html('জামিনদারের পিতার নাম লিখুন : <span class="start_color">*</span>');
          $("#jamindar_placeholder").attr("placeholder", "জামিনদারের পিতার নাম লিখুন").placeholder();
          
        }
        else if (val=='2') {
          $('#jamindar_text_cng').css('display','block');
          $('#jamindar_text_cng').html('জামিনদারের স্বামী নাম লিখুন : <span class="start_color">*</span>');
          $("#jamindar_placeholder").attr("placeholder", "জামিনদারের স্বামী নাম লিখুন").placeholder();
        }else{
          $('#jamindar_text_cng').css('display','none');
          $("#jamindar_placeholder").attr("placeholder", "জামিনদারের পিতা / স্বামী সিলেক্ট করুন ").placeholder();
        }
        
    });






  $(".back_check").change(function(){
        var val = $(".back_check:checked").val();
        if (val=='yes') {
          $('#bank_box').css('display','block');
          
        }else{
          $('#bank_box').css('display','none');
        }
        
    });




  $("#nid_card").change(function () {
    var nationality = $("#nid_card option:selected").val();
    if (nationality=='ভোটার আইডি') {
      $('.nid_box').css('display','flex');
      $('.passport_box').css('display','none');
      $('.dateofbirht_box').css('display','none');
    }

    else if (nationality=='পাসপোর্ট') {
      $('.passport_box').css('display','flex');
      $('.nid_box').css('display','none');
      $('.dateofbirht_box').css('display','none');
    }

    else if (nationality=='জন্ম নিবন্ধন') {
      $('.dateofbirht_box').css('display','flex');
      $('.passport_box').css('display','none');
      $('.nid_box').css('display','none');
    }else{
      $('.nid_box').css('display','none');
      $('.passport_box').css('display','none');
      $('.dateofbirht_box').css('display','none');
    }
     
  });


    $("#nomoni_nid").change(function () {
    var nationality = $("#nomoni_nid option:selected").val();
    if (nationality=='ভোটার আইডি') {
      $('.nomoni_nid_box').css('display','flex');
      $('.nomoni_passport_box').css('display','none');
      $('.nomoni_dateofbirht_box').css('display','none');
    }

    else if (nationality=='পাসপোর্ট') {
      $('.nomoni_passport_box').css('display','flex');
      $('.nomoni_nid_box').css('display','none');
      $('.nomoni_dateofbirht_box').css('display','none');
    }

    else if (nationality=='জন্ম নিবন্ধন') {
      $('.nomoni_dateofbirht_box').css('display','flex');
      $('.nomoni_passport_box').css('display','none');
      $('.nomoni_nid_box').css('display','none');
    }else{
      $('.nomoni_nid_box').css('display','none');
      $('.nomoni_passport_box').css('display','none');
      $('.nomoni_dateofbirht_box').css('display','none');
    }
     
  });



    $("#jamindar_nid").change(function () {
    var nationality = $("#jamindar_nid option:selected").val();
    if (nationality=='ভোটার আইডি') {
      $('.jamindar_nid_box').css('display','flex');
      $('.jamindar_passport_box').css('display','none');
      $('.jamindar_dateofbirht_box').css('display','none');
    }

    else if (nationality=='পাসপোর্ট') {
      $('.jamindar_passport_box').css('display','flex');
      $('.jamindar_nid_box').css('display','none');
      $('.jamindar_dateofbirht_box').css('display','none');
    }

    else if (nationality=='জন্ম নিবন্ধন') {
      $('.jamindar_dateofbirht_box').css('display','flex');
      $('.jamindar_passport_box').css('display','none');
      $('.jamindar_nid_box').css('display','none');
    }else{
      $('.jamindar_nid_box').css('display','none');
      $('.jamindar_passport_box').css('display','none');
      $('.jamindar_dateofbirht_box').css('display','none');
    }
     
  });


    // loan er typers

    $("#loan_types").change(function () {
    var nationality = $("#loan_types option:selected").val();
    if (nationality=='প্রবাসী লোন') {
      $('.probasi_select_show').css('display','block');
      $('#loan_content_cng').text('নিচে প্রবাসী যেকনো  ডকুমেন্ট  আপলোড করুন');
    }

    else if (nationality=='হোম লোন') {
      $('.probasi_select_show').css('display','block');
      $('#loan_content_cng').text('নিচে হোম লোন যেকনো  ডকুমেন্ট  আপলোড করুন');
    }

    else if (nationality=='পার্সোনাল লোন') {
      $('.probasi_select_show').css('display','block');
      $('#loan_content_cng').text('নিচে পার্সোনাল লোন যেকনো  ডকুমেন্ট  আপলোড করুন');
    }
    else if (nationality=='উদ্যোক্তা লোন') {
      $('.probasi_select_show').css('display','block');
      $('#loan_content_cng').text('নিচে উদ্যোক্তা লোন যেকনো  ডকুমেন্ট  আপলোড করুন');
    }
    else if (nationality=='বেবসায়ী লোন') {
      $('.probasi_select_show').css('display','block');
      $('#loan_content_cng').text('নিচে বেবসায়ী লোন যেকনো  ডকুমেন্ট  আপলোড করুন');
    }
    else{
      $('.probasi_select_show').css('display','none');
    }
     
  });



});


function pic_one(input){
    var file = $(".profile_pic").get(0).files[0];

    if(file){
        var reader = new FileReader();

        reader.onload = function(){

            $("#previewImgOne").attr("src", reader.result);
            $('#profile_pic_img .main-img #previewImgOne').css('opacity','1');
            $('#profile_pic_img .upload-wrapper').addClass('active');
            $('#profile_pic_img #cancel-btn').css('display','block');
            $('#cancel-btn').click(function(){
              $("#previewImgOne").attr("src",'');
              $('#profile_pic_img .upload-wrapper').removeClass('active');
              $('#profile_pic_img .main-img #previewImgOne').css('opacity','0');
              $('#profile_pic_img #cancel-btn').css('display','none');
            });

        }

        reader.readAsDataURL(file);
    }
}


function pic_two(input){
    var file_one = $(".signature").get(0).files[0];

    if(file_one){
        var reader = new FileReader();
       

        reader.onload = function(){

            $("#previewImgTwo").attr("src", reader.result);
            $('#signature_pic_img .main-img #previewImgTwo').css('opacity','1');
            $('#signature_pic_img .upload-wrapper').addClass('active');
            $('#signature_pic_img #cancel-btn').css('display','block');
            $('#signature_pic_img #cancel-btn').click(function(){
              $("#previewImgTwo").attr("src",'');
              $('#signature_pic_img .upload-wrapper').removeClass('active');
              $('#signature_pic_img .main-img #previewImgTwo').css('opacity','0');
              $('#signature_pic_img #cancel-btn').css('display','none');
            });
           
        }

        reader.readAsDataURL(file_one);
    }
}



function pic_three(input){
    var file_one = $(".first_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#previewImgThree").attr("src", reader.result);
            $('#nid_first_pic_img .main-img #previewImgThree').css('opacity','1');
            $('#nid_first_pic_img .upload-wrapper').addClass('active');
            $('#nid_first_pic_img .nid_first_cancel').css('display','block');
            $('.nid_first_cancel').click(function(){
              $("#previewImgThree").attr("src",'');
              $('#nid_first_pic_img .upload-wrapper').removeClass('active');
              $('#nid_first_pic_img .main-img #previewImgThree').css('opacity','0');
              $('#nid_first_pic_img #cancel-btn').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}

function pic_four(input){
    var file_one = $(".second_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#previewImgFour").attr("src", reader.result);
            $('#nid_second_pic_img .main-img #previewImgFour').css('opacity','1');
            $('#nid_second_pic_img .upload-wrapper').addClass('active');
            $('.nid_second_cancel').css('display','block');
            $('.nid_second_cancel').click(function(){
              $("#previewImgFour").attr("src",'');
              $('#nid_second_pic_img .upload-wrapper').removeClass('active');
              $('#nid_second_pic_img .main-img #previewImgFour').css('opacity','0');
              $('.nid_second_cancel').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}


function pic_five(input){
    var file_one = $(".passport_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#previewImgFive").attr("src", reader.result);
            $('#passport_nid_pic .main-img #previewImgFive').css('opacity','1');
            $('#passport_nid_pic .upload-wrapper').addClass('active');
            $('#passport_nid_pic #cancel-btn').css('display','block');
            $('#passport_nid_pic #cancel-btn').click(function(){
              $("#previewImgFive").attr("src",'');
              $('#passport_nid_pic .upload-wrapper').removeClass('active');
              $('#passport_nid_pic .main-img #previewImgFive').css('opacity','0');
              $('#passport_nid_pic #cancel-btn').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}

function pic_six(input){
    var file_one = $(".date_birth_pic").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#previewImgSix").attr("src", reader.result);
            $('#datebirth_nid_pic .main-img #previewImgSix').css('opacity','1');
            $('#datebirth_nid_pic .upload-wrapper').addClass('active');
            $('#datebirth_nid_pic #cancel-btn').css('display','block');
            $('#datebirth_nid_pic #cancel-btn').click(function(){
              $("#previewImgSix").attr("src",'');
              $('#datebirth_nid_pic .upload-wrapper').removeClass('active');
              $('#datebirth_nid_pic .main-img #previewImgSix').css('opacity','0');
              $('#datebirth_nid_pic #cancel-btn').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}


// Nomonir Porfile Pic

function nomoni_pic(input){
    var file_one = $(".nomonir_profile_pic").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#nomonir_pic").attr("src", reader.result);
            $('#nomoni_pic_img .main-img #nomonir_pic').css('opacity','1');
            $('#nomoni_pic_img .upload-wrapper').addClass('active');
            $('#nomoni_pic_img #cancel-btn').css('display','block');
            $('#nomoni_pic_img #cancel-btn').click(function(){
              $("#nomonir_pic").attr("src",'');
              $('#nomoni_pic_img .upload-wrapper').removeClass('active');
              $('#nomoni_pic_img .main-img #nomonir_pic').css('opacity','0');
              $('#nomoni_pic_img #cancel-btn').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}


function nomoni_nid_first(input){
    var file_one = $(".nomoni_first_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Nomonir_first_previewImg").attr("src", reader.result);
            $('#Nomoni_first_pic .main-img #Nomonir_first_previewImg').css('opacity','1');
            $('#Nomoni_first_pic .upload-wrapper').addClass('active');
            $('.nomonir_nid_first_cancel').css('display','block');
            $('.nomonir_nid_first_cancel').click(function(){
              $("#Nomonir_first_previewImg").attr("src",'');
              $('#Nomoni_first_pic .upload-wrapper').removeClass('active');
              $('#Nomoni_first_pic .main-img #Nomonir_first_previewImg').css('opacity','0');
              $('.nomonir_nid_first_cancel').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}

function nomoni_nid_second(input){
    var file_one = $(".nomoni_second_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Nomonir_second_previewImg").attr("src", reader.result);
            $('#Nomoni_second_pic .main-img #Nomonir_second_previewImg').css('opacity','1');
            $('#Nomoni_second_pic .upload-wrapper').addClass('active');
            $('.nomonir_nid_second_cancel').css('display','block');
            $('.nomonir_nid_second_cancel').click(function(){
              $("#Nomonir_second_previewImg").attr("src",'');
              $('#Nomoni_second_pic .upload-wrapper').removeClass('active');
              $('#Nomoni_second_pic .main-img #Nomonir_second_previewImg').css('opacity','0');
              $('.nomonir_nid_second_cancel').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}


function nomoni_nid_passport(input){
    var file_one = $(".nomoni_passport_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Nomonir_nid_previewImg").attr("src", reader.result);
            $('#Nomoni_nid_pic .main-img #Nomonir_nid_previewImg').css('opacity','1');
            $('#Nomoni_nid_pic .upload-wrapper').addClass('active');
            $('.nomoni_cancel_nid').css('display','block');
            $('.nomoni_cancel_nid').click(function(){
              $("#Nomonir_nid_previewImg").attr("src",'');
              $('#Nomoni_nid_pic .upload-wrapper').removeClass('active');
              $('#Nomoni_nid_pic .main-img #Nomonir_nid_previewImg').css('opacity','0');
              $('.nomoni_cancel_nid').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}

function nomoni_nid_dofBirth(input){
    var file_one = $(".nomoni_date_birth_pic").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Nomoni_datebirht_previewImg").attr("src", reader.result);
            $('#Nomoni_datebirth .main-img #Nomoni_datebirht_previewImg').css('opacity','1');
            $('#Nomoni_datebirth .upload-wrapper').addClass('active');
            $('.Nomonir_Databirht_cancel').css('display','block');
            $('.Nomonir_Databirht_cancel').click(function(){
              $("#Nomoni_datebirht_previewImg").attr("src",'');
              $('#Nomoni_datebirth .upload-wrapper').removeClass('active');
              $('#Nomoni_datebirth .main-img #Nomoni_datebirht_previewImg').css('opacity','0');
              $('#Nomoni_datebirth #cancel-btn').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}



// Jamindar Porfile Pic

function jamindar_pic(input){
    var file_one = $(".jamindar_profile_pic").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Jamindar_previeImg").attr("src", reader.result);
            $('#jamindar_pic_img .main-img #Jamindar_previeImg').css('opacity','1');
            $('#jamindar_pic_img .upload-wrapper').addClass('active');
            $('#jamindar_pic_img #cancel-btn').css('display','block');
            $('#jamindar_pic_img #cancel-btn').click(function(){
              $("#Jamindar_previeImg").attr("src",'');
              $('#jamindar_pic_img .upload-wrapper').removeClass('active');
              $('#jamindar_pic_img .main-img #Jamindar_previeImg').css('opacity','0');
              $('#jamindar_pic_img #cancel-btn').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}



function jamindar_nid_first(input){
    var file_one = $(".jamindar_first_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Jamindar_first_previewImg").attr("src", reader.result);
            $('#Jamindar_first_pic .main-img #Jamindar_first_previewImg').css('opacity','1');
            $('#Jamindar_first_pic .upload-wrapper').addClass('active');
            $('.jamindar_nid_first_cancel').css('display','block');
            $('.jamindar_nid_first_cancel').click(function(){
              $("#Jamindar_first_previewImg").attr("src",'');
              $('#Jamindar_first_pic .upload-wrapper').removeClass('active');
              $('#Jamindar_first_pic .main-img #Jamindar_first_previewImg').css('opacity','0');
              $('.jamindar_nid_first_cancel').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}

function jamindar_nid_second(input){
    var file_one = $(".jamindar_second_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Jamindar_second_previewImg").attr("src", reader.result);
            $('#Jamindar_second_pic .main-img #Jamindar_second_previewImg').css('opacity','1');
            $('#Jamindar_second_pic .upload-wrapper').addClass('active');
            $('.jamindar_nid_second_cancel').css('display','block');
            $('.jamindar_nid_second_cancel').click(function(){
              $("#Jamindar_second_previewImg").attr("src",'');
              $('#Jamindar_second_pic .upload-wrapper').removeClass('active');
              $('#Jamindar_second_pic .main-img #Jamindar_second_previewImg').css('opacity','0');
              $('.jamindar_nid_second_cancel').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}


function jamindar_nid_passport(input){
    var file_one = $(".jamindar_passport_nid").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Jamindar_nid_previewImg").attr("src", reader.result);
            $('#Jamindar_nid_pic .main-img #Jamindar_nid_previewImg').css('opacity','1');
            $('#Jamindar_nid_pic .upload-wrapper').addClass('active');
            $('.jamindar_cancel_nid').css('display','block');
            $('.jamindar_cancel_nid').click(function(){
              $("#Jamindar_nid_previewImg").attr("src",'');
              $('#Jamindar_nid_pic .upload-wrapper').removeClass('active');
              $('#Jamindar_nid_pic .main-img #Jamindar_nid_previewImg').css('opacity','0');
              $('.jamindar_cancel_nid').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}

function jamindar_nid_dofBirth(input){
    var file_one = $(".jamindar_date_birth_pic").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Jamindar_datebirht_previewImg").attr("src", reader.result);
            $('#Jamindar_datebirth .main-img #Jamindar_datebirht_previewImg').css('opacity','1');
            $('#Jamindar_datebirth .upload-wrapper').addClass('active');
            $('.Jamindar_Databirht_cancel').css('display','block');
            $('.Jamindar_Databirht_cancel').click(function(){
              $("#Jamindar_datebirht_previewImg").attr("src",'');
              $('#Jamindar_datebirth .upload-wrapper').removeClass('active');
              $('#Jamindar_datebirth .main-img #Jamindar_datebirht_previewImg').css('opacity','0');
              $('.Jamindar_Databirht_cancel').css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}




// Other Information  Pic


function probasi_pic(input){
    var file_one = $(".probasi_profile_pic").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Probasi_previeImg").attr("src", reader.result);
            $('#probasi_pic_img .main-img #Probasi_previeImg').css('opacity','1');
            $('#probasi_pic_img .upload-wrapper').addClass('active');
            $('#probasi_pic_img #cancel-btn').css('display','block');
            $('#probasi_pic_img #cancel-btn').click(function(){
              $("#Probasi_previeImg").attr("src",'');
              $('#probasi_pic_img .upload-wrapper').removeClass('active');
              $('#probasi_pic_img .main-img #Probasi_previeImg').css('opacity','0');
              $('#probasi_pic_img #cancel-btn').css('display','none');
              $('#probasi_pic_img .file-name').text(file).css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}




function income_document(input){
    var file_one = $(".income_profile_pic").get(0).files[0];
    if(file_one){
        var reader = new FileReader();
        reader.onload = function(){
            $("#Income_previeImg").attr("src", reader.result);
            $('#income_pic_img .main-img #Income_previeImg').css('opacity','1');
            $('#income_pic_img .upload-wrapper').addClass('active');
            $('#income_pic_img #cancel-btn').css('display','block');
            $('#income_pic_img #cancel-btn').click(function(){
              $("#Income_previeImg").attr("src",'');
              $('#income_pic_img .upload-wrapper').removeClass('active');
              $('#income_pic_img .main-img #Income_previeImg').css('opacity','0');
              $('#income_pic_img #cancel-btn').css('display','none');
              $('#income_pic_img .file-name').text(file).css('display','none');
            });  
        }
        reader.readAsDataURL(file_one);
    }
}

// Bikas Nogod Payment

function bikas_payment(){
  $('#payment_box').css('display','block');
  $('#money_recive_content').text('আপনার বিকাশ নাম্বার দিন');
  $("#payment_placeholder").attr("placeholder", "আপনার বিকাশ নাম্বারটি সংখ্যায় লিখুন").placeholder();

}

function nogod_payment(){
  $('#payment_box').css('display','block');
  $('#money_recive_content').text('আপনার নগদ নাম্বার দিন');
  $("#payment_placeholder").attr("placeholder", "আপনার নগদ  নাম্বারটি সংখ্যায় লিখুন").placeholder();
}


// Bikas Nogod Payment Reice

function bikas_recive_payment(){
  $('#payment_box_recive').css('display','block');
  $('#payment_recive_content').text('01777000000 এই নাম্বা‌রে সেন্ড মা‌নি ক‌রে ‌নি‌চে Tnxid ব‌সি‌য়ে Next বাটন ক্লিক করুন');
  $("#payment_recive_placeholder").attr("placeholder", "transaction id").placeholder();

}

function nogod_recice_payment(){
  $('#payment_box_recive').css('display','block');
  $('#payment_recive_content').text('01777000000 এই নাম্বা‌রে সেন্ড মা‌নি ক‌রে ‌নি‌চে Tnxid ব‌সি‌য়ে Next বাটন ক্লিক করু');
  $("#payment_recive_placeholder").attr("placeholder", "transaction id").placeholder();
}





const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}