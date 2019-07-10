/*------------------------------------------------------------------

[Master Script]

Organization     : Racik
Organization URI : http://racikproject.com
Name Project     : Bk3m
Version          : 1.0.0
Framework        : http://getnel.github.io 
Author           : Racik Website Team

-------------------------------------------------------------------*/

/*------------------------------------------------------------------
[Popup Add Users]
-------------------------------------------------------------------*/

$(document).ready(function(){

	function add_users(){

		var _add = $("#_add-user"),
			_add2 = $("#_add-user2"),
			_add_container = $("#_add-container"),
			_add_container2 = $("#_add-container2"),
			_add_close = $("#_add-close"),
			_add_close2 = $("#_add-close2");

		_add.on('click', function(){
			_add_container.addClass("_add-container-active");
		});
		_add2.on('click', function(){
			_add_container2.addClass("_add-container-active");
		});
		_add_close.on('click', function(){
			_add_container.removeClass("_add-container-active");
		});
		_add_close2.on('click', function(){
			_add_container2.removeClass("_add-container-active");
		});

	}

	add_users();

	function hide_sidebar_toggle(){

		var _sidebar_btn    = $("#_sidebar-btn"),
			_sidebar_window = $("#_sidebar-window");

		_sidebar_btn.on('click', function(){
			$(this).hide();
		});

		_sidebar_window.on('click', function(){
			_sidebar_btn.show();
		})

	}

	hide_sidebar_toggle();

	function tool_color(){
		var _tool_green = $("#_btn-tool-green"),
			_btn_tool_black = $("#_btn-tool-black"),
			_geometryangle = $("._geometryangle");

		_tool_green.on('click', function(){
			_geometryangle.removeClass('_geometryangle-tool-green');
		});

		_btn_tool_black.on('click', function(){
			_geometryangle.addClass('_geometryangle-tool-green');
		})


	}

	tool_color();

	function search_admin_content(){

		$("#_search-admin-toggle").on('click', function(e){
			$("#_search-admin-content").addClass("_search-admin-content-active");
			e.preventDefault();
		});

		$("#_search-admin-close").on('click', function(){
			$("#_search-admin-content").removeClass("_search-admin-content-active");
		});

	}

	search_admin_content();

	function edit(){
		$("._edit").on('click', function(e){
			// $("._edit-content").addClass("_edit-content-active");
			$("._edit-overflow").addClass("_edit-overflow-active");
			e.preventDefault();

			return false;
		});

		// $("._edit-close").on('click', function(){
		// 	$("._edit-content").removeClass("_edit-content-active");
		// 	$("._edit-overflow").removeClass("_edit-overflow-active");

		// 	return false;
		// });

		// $("._edit-content").on('click', function(){
		// 	return false;
		// });

		// $("html").on('click', function(){
		// 	$("._edit-content").removeClass("_edit-content-active");
		// 	$("._edit-overflow").removeClass("_edit-overflow-active");
		// });

		
		// Askar Pattukuth @Eukleia
		    
		// preset variables
		var _dt_btn = $('._dt-btn');
		var _dt_content = $('._dt-content');


		_dt_btn.on('click', function(e){
		  // store currently clicked button "data-btn" attr "value"
		  var data_btn_attr = $(this).data('btn');
		  /* check if any of the popups has the "data-pop" value 
		  same as the currently clicked button, then show that popup.
		  */
		  // store that popup
		  var popup_data_attr = $('._dt-content[data-pop="' + data_btn_attr + '"]');
		  // show that popup
		  popup_data_attr.addClass("_edit-content-active");
		  
		  $("._dt-window").fadeIn();

		  e.preventDefault();

		  return false;
		});

		$("._dt-content").on('click', function(){
		  
		  return false; 
		});

		$("html").on('click', function(){
		  $('._dt-content').removeClass("_edit-content-active");
		  $("._edit-overflow").removeClass("_edit-overflow-active");
		  $('._dt-window').fadeOut();
		  return false;
		});

		$("._edit-close").on('click', function(){
			$("._edit-content").removeClass("_edit-content-active");
			$("._edit-overflow").removeClass("_edit-overflow-active");
			$("._dt-window").fadeOut();

			return false;
		});

	}

	edit();

	// semantic ui
	$('.dropdown')
		.dropdown()
	;
	$('.ui.checkbox')
		.checkbox()
	;
	$('#example1').calendar();

});