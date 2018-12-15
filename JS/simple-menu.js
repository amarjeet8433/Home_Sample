function mainmenu(){
$(" #Sub-Nav ul ").css({display: "none"}); // Opera Fix
$(" #Sub-Nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
}

 
 
 $(document).ready(function(){					
	mainmenu();
});