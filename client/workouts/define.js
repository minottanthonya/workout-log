$(function(){
	$.extend(Workoutlog, {
		definition: {
			userDefinition: [],

			create: function() {
				var def = {
					desc:$("#def-descritption").val(),
					type:$("#def-logtype").val()
				};
				var postData = { definition: def};
				var define = $.ajax({
					type:"POST",
					url:Workoutlog.API_BASE + "definition",
					data:JSON.stringify(postData),
					contentType:"application/json"
				});
				
				define.done(function(data){

			Workoutlog.definition.userDefinitions.push(data.definition);		
				});


			},

			fetchAll: function() {
					var fetchdefs = $.ajax({
					type:"GET",
					url:Workoutlog.API_BASE + "definition",
					headers: {
						"authorization": window.localStorage.getItem("sessionToken")
					}

				})
					.fail(function(err){
						console.log(err);
					});

			}
		}
	});
	// bindings
	$("#def-save").on("click", Workoutlog.definition.create);
	// fetch definitions if we already are
	// authenticated and refreshed
	if (window.localStorage.getItem("sessionToken")) {
		Workoutlog.definition.fetchAll();
	}

});
