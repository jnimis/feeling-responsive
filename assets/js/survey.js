$(document).ready(function() {

  function formatForSelected($button) {
    $button.blur();
    $button.parent().find('.blbf-btn').removeClass('btn-primary');
    $button.addClass('btn-primary');
  }

  function showModal(isError, title, message) {
    $('#blbf-error-modal').modal({backdrop: 'static', keyboard: false});
    // location.href = isError ? "#blbf-error-modal" : "";
    $('#blbf-alert-header').text(title);
    if (isError) {
      $('.error-text-div').removeClass('wh-hidden');
      $('#error-text-span').text(message);
      $('.message-text-div').addClass('wh-hidden');
    } else {
      $('.message-text-div').removeClass('wh-hidden');
      $('#message-text-span').text(message);
      $('.error-text-div').addClass('wh-hidden');
    }
  }

  function invokeAwsLambda(payloadJson) {

		var appClientId = '';

		// Initialize the Amazon Cognito credentials provider
		AWS.config.region = 'us-east-1'; // Region
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		    IdentityPoolId: 'us-east-1:05a3b015-7711-4a5f-999f-15f797566de4'
		});

		var lambda = new AWS.Lambda({region: 'us-east-1', apiVersion: '2015-03-31'});
		var functionName = 'BLBFSurvey';
		var payload = JSON.stringify(payloadJson);

		var params = {
		  FunctionName : functionName,
		  InvocationType : 'RequestResponse',
		  LogType : 'None',
		  Payload : payload
		};

    $('#blbf-loading-modal').modal('show');

		lambda.invoke(params, function(error, data) {

		  if (error) {
        $('#blbf-loading-modal').modal('hide').on('hidden.bs.modal', function() {
          showModal(true, 'Submission Error', error);
        });


		  } else {
		    var result = JSON.parse(data.Payload);
//			  $('#results').html(pullResults);
        if (result.success) {
          // navigate to thank you page
          window.location.href = "/thank-you";
        } else {
          showModal(true, 'Submission error', 'There was a server problem when submitting your form. Please try again, or contact boblynchboxingfoundation@gmail.com')
        }

		  }
		});
	}

// https://stackoverflow.com/questions/17980061/how-to-change-phone-number-format-in-input-as-you-type
  var phones = [{ "mask": "(###) ###-####"}, { "mask": "(###) ###-##############"}];
  $('#phone').inputmask({
      mask: phones,
      greedy: false,
      definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

  $('#birthday-div').birthdayPicker();

  $('#blbf-loading-modal').on('shown.bs.modal', function() {
    $('.load-spin').addClass('fa-spin');
  });

  $('#coach-button').on('click', function() {
    formatForSelected($(this));
    $('#coach-questions').removeClass('wh-hidden');
    $('#boxer-questions').addClass('wh-hidden');
  });

  $('#boxer-button').on('click', function() {
    formatForSelected($(this));
    $('#boxer-questions').removeClass('wh-hidden');
    $('#coach-questions').addClass('wh-hidden');
  });

  $('.single-select-button').on('click', function() {
    formatForSelected($(this));
  });

  $('#male-button').on('click', function() {
    formatForSelected($(this));
    $('#male-weight-classes').removeClass('wh-hidden');
    $('#female-weight-classes').addClass('wh-hidden');
  });

  $('#female-button').on('click', function() {
    formatForSelected($(this));
    $('#female-weight-classes').removeClass('wh-hidden');
    $('#male-weight-classes').addClass('wh-hidden');
  });

  $('#submit-coach').on('click', function() {

    var gymName = $('#gym-name').val();
    var gymLocation = $('#gym-location').val();
    var contactInfo = $('#contact-info').val();

    if (gymName == '' || gymLocation == '' || contactInfo == '') {
      showModal(true, 'Please complete gym information', '');
      return;
    }

    var counts = {};

    $('.blbf-weight-count').each(function(i, el) {
      var count = $(el).val();
      if (count > 0) {
        var weightClass = $(el).attr('id');
        counts[weightClass] = count;
      }
    });

    console.log(counts);

    counts['isCoach'] = true;
    counts['gymName'] = gymName;
    counts['gymLocation'] = gymLocation;
    counts['contactInfo'] = contactInfo;

    addContactInfoFields(counts);

    invokeAwsLambda(counts);

  });

  function hasValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function hasValidPhoneNumber(number) {
    var regex = /\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}/;
    return regex.test(number);
  }

  $('#submit-boxer').on('click', function() {

    var gender = $('.boxer-gender .btn-primary').text();
    var weightSelector = (gender === 'Male') ? '#male-weight-classes' : '#female-weight-classes';
    var weightClass = $(weightSelector + ' .btn-primary').text();
    var experience = $('.boxer-experience .btn-primary').text();
    var hostHotel = $('.boxer-host-hotel .btn-primary').text();
    var otherHotel = $('.boxer-other-hotel .btn-primary').text();
    var dailyTravel = $('.boxer-travel-each-day .btn-primary').text();
    var willAttend = $('.boxer-attend .btn-primary').text();

    var age = $('#age').val();
    var numBouts = $('#numbouts').val();
    var birthMonth = $('.birthMonth').find(":selected").text();
    var birthDay = $('.birthDate').find(":selected").text();
    var birthYear = $('.birthYear').find(":selected").text();
    var birthDate = birthMonth + "-" + birthDay + "-" + birthYear;

    var usaBoxing = $('#usaboxingid').val();
    var coachName = $('#coachname').val();
    var coachContact = $('#coachcontact').val();

    var formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    // perform validations
    var errString = '';
    var errors = [];
    if (birthMonth == 'Month' || birthDay == 'Day' || birthYear == 'Year') {errors.push('birthdate'); }
    if (gender == undefined || gender == '') { errors.push('gender'); }
    if (weightClass == undefined || weightClass == '') { errors.push('weight class'); }
    if (age == undefined || age == '') { errors.push('age'); }
    if (experience == undefined || experience == '') { errors.push('experience level'); }
    if (willAttend == undefined || willAttend == '') { errors.push('will attend'); }
    if (hostHotel == undefined || hostHotel == '' || otherHotel == undefined || otherHotel == '' || dailyTravel == undefined || dailyTravel == '') { errors.push('hotel plans'); }
    if (!hasValidEmail($('#email').val()) && !hasValidPhoneNumber($('#phone').val())) { errString = 'You must enter a valid email or phone number! ';}

    if (errors.length > 0) {
      errString += 'No answer chosen for ' + errors.concat(', ');
    }

    if (errString != '') {
      showModal(true, "Please Answer All Questions", errString);
      return;
    }

    // send
    // console.log(answersString + '; ' + infoString);

    var data = {
      'isCoach' : false,
      'gender' : gender,
      'weightClass' : weightClass,
      'experience' : experience,
      'hostHotel' : hostHotel,
      'otherHotel' : otherHotel,
      'dailyTravel' : dailyTravel,
      'willAttend' : willAttend,
      'age' : age,
      'numBouts' : numBouts,
      'birthdate' : birthDate,
      'usaboxingid' : usaBoxing,
      'coachName' : coachName,
      'coachContact' : coachContact,
      'submittedDate' : formattedDate
    };

    addContactInfoFields(data);

    // aws lambda submit
    invokeAwsLambda(data);
    // $('#blbf-loading-modal').modal('show');   // for testing

    // give feedback (thank you) and disable controls (new page?)


  });

  function addContactInfoFields(data) {
    data['name'] = $('#name').val();
    data['address'] = $('#address').val();
    data['cityzip'] = $('#cityzip').val();
    data['email'] = $('#email').val();
    data['phone'] = $('#phone').val();
    data['gymName'] = $('#gym-name').val();
  }

});
