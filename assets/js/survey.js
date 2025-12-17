// this file is included in _footer_scripts.html

/*****************************
*
*  This file corresponds to the `register.md` page for the BLBF Golden Gloves site
*  It sends form data to an AWS Lambda, which stores the registration info in a database
*  The registration year and database implementation details are controlled on the Lambda side
*  so this file shouldn't need to change at all year to year, except to be kept in sync
*  with the form elements on the `register.md` page.
*
*****************************/

$(document).ready(function() {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

    // **************************************
    // *  CONFIGURATION:
    // *  these variables determine where the survey goes, and how it is authenticated
    // *  to link it to a new AWS account, these must be changed
    //
    var identityPoolId = 'us-east-1:05a3b015-7711-4a5f-999f-15f797566de4';
    var lambdaName = 'BLBFSurvey';

		// Initialize the Amazon Cognito credentials provider
		AWS.config.region = 'us-east-1'; // Region
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		    IdentityPoolId: identityPoolId
		});

		var lambda = new AWS.Lambda({region: 'us-east-1', apiVersion: '2015-03-31'});
		var functionName = lambdaName;
		var payload = JSON.stringify(payloadJson);

		var params = {
		  FunctionName : functionName,
		  InvocationType : 'RequestResponse',
		  LogType : 'None',
		  Payload : payload
		};

    // show loading
    $('#blbf-loading-modal').modal('show');

		lambda.invoke(params, function(error, data) {

		  if (error) {
        $('#blbf-loading-modal').modal('hide');
        sleep(2000);
        showModal(true, 'Submission Error', error);
		  } else {
		    var result = JSON.parse(data.Payload);
//			  $('#results').html(pullResults);
        if (result.success) {
          // navigate to thank you page
          window.location.href = "/thank-you";
        } else {
          showModal(true, 'Submission error', 'There was a server problem when submitting your form. Please try again, or contact boblynchboxing@gmail.com')
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

    var isOutdatedForm = $('#invalid_form').val() == 'true';
    if (isOutdatedForm) {
      showModal(true, "Incorrect Registration Page", "You are using an outdated version of this form. Please use the links in the menu to find the most recent registration page.");
      return;
    }

    var gender = $('.boxer-gender .btn-primary').text();
    var weightSelector = (gender === 'Male') ? '#male-weight-classes' : '#female-weight-classes';
    var weightClass = $(weightSelector + ' .btn-primary').text();
    var experience = $('.boxer-experience .btn-primary').text();
    var hostHotel = $('.boxer-host-hotel .btn-primary').text();
    var otherHotel = $('.boxer-other-hotel .btn-primary').text();
    var dailyTravel = $('.boxer-travel-each-day .btn-primary').text();
    // var willAttend = $('.boxer-attend .btn-primary').text();

    var age = $('#age').val();
    var numBouts = $('#numbouts').val();
    var birthMonth = $('.birthMonth').find(":selected").text();
    var birthDay = $('.birthDate').find(":selected").text();
    var birthYear = $('.birthYear').find(":selected").text();
    var birthDate = birthMonth + "-" + birthDay + "-" + birthYear;

    var usaBoxing = $('#usaboxingid').val();
    var coachName = $('#coachname').val();
    var coachContact = $('#coachcontact').val();
    var stateInfo = $('.in-out-state .btn-primary').text();
    var shirtSize = $('#shirt-size').val();

    var formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    // perform validations
    var errString = '';
    var errors = [];
    if ($('#firstname').val() == undefined || $('#firstname').val() == '') { errors.push('first name'); }
    if ($('#lastname').val() == undefined || $('#lastname').val() == '') { errors.push('last name'); }
    if (birthMonth == 'Month' || birthDay == 'Day' || birthYear == 'Year') {errors.push('birthdate'); }
    if (stateInfo == undefined || stateInfo == '') { errors.push('Wisconsin or out-of-state'); }
    if (gender == undefined || gender == '') { errors.push('gender'); }
    if (weightClass == undefined || weightClass == '') { errors.push('weight class'); }
    if (age == undefined || age == '') { errors.push('age'); }
    if (experience == undefined || experience == '') { errors.push('experience level'); }
    // if (willAttend == undefined || willAttend == '') { errors.push('will attend'); }
    // if (hostHotel == undefined || hostHotel == '' || otherHotel == undefined || otherHotel == '' || dailyTravel == undefined || dailyTravel == '') { errors.push('hotel plans'); }
    if (!hasValidEmail($('#email').val()) || !hasValidPhoneNumber($('#phone').val())) { errString = 'You must enter a valid email and phone number! ';}
    if (shirtSize == undefined || shirtSize == '') { errors.push('shirt size'); }
    console.log("shirt size: " + shirtSize);

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
      'age' : age,
      'numBouts' : numBouts,
      'birthdate' : birthDate,
      'usaboxingid' : usaBoxing,
      'coachName' : coachName,
      'coachContact' : coachContact,
      'submittedDate' : formattedDate,
      'shirtSize' : shirtSize,
      'stateInfo' : stateInfo
    };

    addContactInfoFields(data);

    // aws lambda submit
    invokeAwsLambda(data);
    // $('#blbf-loading-modal').modal('show');   // for testing

    // give feedback (thank you) and disable controls (new page?)


  });

  function addContactInfoFields(data) {
    var name = $('#firstname').val() + " " + $('#lastname').val();
    data['name'] = name;
    data['address'] = $('#address').val();
    data['cityzip'] = $('#cityzip').val();
    data['email'] = $('#email').val();
    data['phone'] = $('#phone').val();
    data['gymName'] = $('#gym-name').val();
  }

});
