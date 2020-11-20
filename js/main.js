// $('.nav_link_list_title').click(function(){
//     if(!$(this).hasClass('active')){
//         $(this).addClass('active')
//         $('.nav_link_list_content').fadeIn()
//     }else{
//         $(this).removeClass('active')
//         $('.nav_link_list_content').fadeOut()
//     }
// })


$('.nav_link_list').click(function(){
    if(!$(this).find('.nav_link_list_title').hasClass('active')){
        $('.nav_link_list .nav_link_list_title').removeClass('active')
        $('.nav_link_list_content').fadeOut()
        $(this).find('.nav_link_list_title').addClass('active')
        $(this).find('.nav_link_list_content').fadeIn()
        

    }else{
        $(this).find('.nav_link_list_title').removeClass('active')
        $(this).find('.nav_link_list_content').fadeOut()
    }
})





$('.nav_burger_button').click(function(){
    if(!$('.nav_burger_button').hasClass('active')){
        $('.nav_burger_button').addClass('active');
        $('.nav_burger_content').slideDown();
  
        
    }else{
      $('.nav_burger_button').removeClass('active');
      $('.nav_burger_content').slideUp();
        
    }
  })
  $('.nav_burger_body .nav_a').click(function(){
    $('.nav_burger_button').removeClass('active');
    $('.nav_burger_content').slideUp();
})


$('.nav_link_list_content_burger').slideUp()
$('.nav_link_list_burger').click(function(){
    if(!$(this).find('.nav_link_list_title_burger').hasClass('active')){


        $('.nav_link_list_burger .nav_link_list_title_burger').removeClass('active')

        $('.nav_link_list_content_burger').slideUp()

        $(this).find('.nav_link_list_title_burger').addClass('active')
        $(this).find('.nav_link_list_content_burger').slideDown()

        



    }else{
        $(this).find('.nav_link_list_title_burger').removeClass('active')
        $(this).find('.nav_link_list_content_burger').slideUp()
    }
})





