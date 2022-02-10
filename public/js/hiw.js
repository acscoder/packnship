
function show_hiw_item(ind,color){
  jQuery('body').attr('class', function(i, c){
return c.replace(/(^|\s)bg-\S+/g, '');
});
  jQuery('body').addClass('bg-'+color+'-600');


  jQuery('#hiw_menu button').attr('class', function(i, c){
return c.replace(/(^|\s)hover:bg-\S+/g, '');});

jQuery('#hiw_menu button').addClass('hover:bg-'+color+'-700');


jQuery('#hiw_menu button .number').attr('class', function(i, c){
return c.replace(/(^|\s)text-(\S+)-800/g, '');});
jQuery('#hiw_menu button .number').addClass('text-'+color+'-800');


jQuery('.hiw_item').addClass('sm:hidden');
jQuery('#hiw_item_'+ind).removeClass('sm:hidden');

jQuery('#slogan').removeClass('text-yellow');
if(ind){
  jQuery('#slogan').addClass('text-white');
}else{
  jQuery('#slogan').addClass('text-yellow');
}
}

jQuery('.hiw_menu_item').click(function(){
  show_hiw_item(jQuery(this).data('index'),jQuery(this).data('color'));
});
jQuery('.h-full-block').each(function(){
  if(jQuery(this).find('> div').height() > window.innerHeight){
      jQuery(this).removeClass('h-full');
  }
});