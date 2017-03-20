$(document).ready(function(){
	var mapping =[];
	$('#get_name').autocomplete({
        source: function(request, response) {
            var get_value = request.term
            $.ajax({
                url : "core.php",
                type : "POST",
                data : {
                    value:get_value,
                    type:'name'
                },
                success : function(json) {
                	var source =[];
                	mapping = [];
                	var parsed = JSON.parse(json);
                	for (var i = 0; i < parsed.length; i++) {
                		source.push(parsed[i].label);
                		mapping[parsed[i].label] = parsed[i].value;
                	}
                    response(source);
                },
                error : function(xhr,errmsg,err) {
                    console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
                }
            });
        },
        minLength: 2,
        open: function() {},
        close: function() {},
        focus: function(event,ui) {},
        select: function(event, ui) {
        	$('#get_name').val(ui.item.value);
        	$('#emp_id').val(mapping[ui.item.value]);
        }
    });

	// function get_name()

});