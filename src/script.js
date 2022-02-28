
$(document).ready(function() {
	$('#first').hide();
	$('#second').hide();
	$('#third').hide();
	$('#forth').hide();
	$('#fifth').hide();
	$('#btn').on('click', function() {
		$('#btn').hide();
		$('#first').show();
	});
	$('#btn1').on('click', function() {
		$('#first').hide();
		$('#second').show();
	});
	$('#btn2').on('click', function() {
		$('#second').hide();
		$('#third').show();
	});
	$('#btn3').on('click', function() {
		$('#third').hide();
		$('#forth').show();
	});
	$('#btn4').on('click', function() {
		$('#fifth').show();
		$('#forth').hide();
	});
	$('#btn5').on('click', function() {
		$('#fifth').hide();
		document.getElementById('container').innerHTML = 'TEST SUBMMITTED';
	});
});
