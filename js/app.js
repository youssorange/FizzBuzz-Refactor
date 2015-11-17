$(document).ready(function(){
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var number = $('#inputNum').val();


		if (!$('section').is(':empty')) 
			$('section').html('');

		if (!$('span').is(':empty'))
			$('span').html('');

		if (number % 1 === 0) {
			appendFizzBuzz(number);
			$('form').trigger("reset");
		} else{
			$('span').append('Input must be an integer.');
		}

	});

	function clearText() {
		$('#inputNum').val('');
	}
	

var appendFizzBuzz = function (n) {
	for (var i = 1; i <= n; i++) {


// Check if 'i' is divided by both 3 and 5
		if (i % 15 === 0) {
			$('section').append('FizzBuzz');

// Check if 'i' is divded by 3
		}else if (i % 3 === 0) {
			$('section').append('Fizz');
		

// Check if 'i' is divded by 5
		}else if (i % 5 === 0) {
			$('section').append('Buzz');

//If none of above, print 'i'
		}else  {
			$('section').append(i);
		}

//Add a line break after each interation of the for loop
		$('section').append('<br />');
	}
};


//end
});
