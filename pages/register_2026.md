---
layout: page
title: "Registration"
subheadline: "2026 Wisconsin State Tournament"
permalink: "/register_2026/"
registration-form: true
---

<!-- (click [here](/images/2020-WIGG-Register.pdf) for a printable form to mail) -->

<!-- <h3>Registration is now closed for the 2025 Wisconsin State Tournament.</h3> -->

<!-- <div style="display:none;"> -->

<input id="invalid_form" value="false" type="hidden">

<div class="row">
<div class="col-xs-12">
<label for="firstname">First Name: </label><input type="text" id="firstname"/>
<label for="lastname">Last Name: </label><input type="text" id="lastname"/>
<label for="address">Street Address: </label><input type="text" id="address"/>
<label for="cityzip">City, State, Zip: </label><input type="text" id="cityzip"/>
<label for="email">Email: </label><input type="text" id="email" style="max-width:300px;"/>
<label for="phone">Phone: </label><input type="text" id="phone" style="max-width:200px;"/>
<label for="gym-name">Boxing Club:</label> <input type="text" id="gym-name"/>
<label for="shirt-size">T-shirt Size:</label>
<select id="shirt-size">
  <option value="">Choose...</option>
  <option value="S">Small</option>
  <option value="M">Medium</option>
  <option value="L">Large</option>
  <option value="XL">Extra Large</option>
</select>

  <hr/>
<div class="text-center wh-hidden">
  Are you a:
  <div class="btn-group">
    <button id="coach-button" class="blbf-btn btn-default">Coach</button>
    <button id="boxer-button" class="blbf-btn btn-default">Boxer</button>
  </div>
</div>

  <!-- <hr/> -->

  <div id="boxer-questions" class="well text-center">

  <label for="birthdate">Birthdate: </label><div id="birthday-div"/></div><br/>

  <label for="usaboxingid">USA Boxing ID#: </label><input type="text" id="usaboxingid"/><br/>
  <label for="coachname">Coach's Name: </label><input type="text" id="coachname"/><br/>
  <label for="coachcontact">Coach's Email/Phone: </label><input type="text" id="coachcontact"/><br/>

  Are you a Wisconsin boxer or from out-of-state?
  <div class="btn-group in-out-state">
    <button id="wisconsin-button" class="blbf-btn btn-default single-select-button">Wisconsin</button>
    <button id="out-of-state-button" class="blbf-btn btn-default single-select-button">Out-of-state</button>
  </div>

    Are you
  <div class="btn-group boxer-gender">
    <button id="male-button" class="blbf-btn btn-default">Male</button>
    <button id="female-button" class="blbf-btn btn-default">Female</button>
  </div>
  <br/>

  <div id="male-weight-classes" class="wh-hidden">
      Weight class?
      <div class="btn-group">
      <button class="blbf-btn single-select-button">110</button>
      <button class="blbf-btn single-select-button">121</button>
      <button class="blbf-btn single-select-button">132</button>
      <button class="blbf-btn single-select-button">143</button>
      <button class="blbf-btn single-select-button">154</button>
      <button class="blbf-btn single-select-button">165</button>
      <button class="blbf-btn single-select-button">176</button>
      <button class="blbf-btn single-select-button">187</button>
      <button class="blbf-btn single-select-button">198</button>
      <button class="blbf-btn single-select-button">198+</button>
      </div>
  </div>

  <div id="female-weight-classes" class="wh-hidden">
  Weight class?
  <div class="btn-group">
      <button class="blbf-btn single-select-button">106</button>
      <button class="blbf-btn single-select-button">112</button>
      <button class="blbf-btn single-select-button">119</button>
      <button class="blbf-btn single-select-button">125</button>
      <button class="blbf-btn single-select-button">132</button>
      <button class="blbf-btn single-select-button">143</button>
      <button class="blbf-btn single-select-button">154</button>
      <button class="blbf-btn single-select-button">165</button>
      <button class="blbf-btn single-select-button">176</button>
      <button class="blbf-btn single-select-button">176+</button>
    </div>
  </div>

  <br/>



  <div class="btn-group boxer-experience">
  Amateur experience:<br/>
  Number of bouts? <input type="number" id="numbouts" style="width:80px;display:inline-block;"/><br/>
  <p>NOTE: a boxer with 8+ bouts may choose to register as "OPEN" with approval and discretion of their coach and GG officials</p>
    <button id="novice-button" class="blbf-btn btn-default single-select-button">True Novice (0-3 bouts)</button>
    <button id="super-novice-button" class="blbf-btn btn-default single-select-button">Novice (4-9 bouts)</button>
    <button id="open-button" class="blbf-btn btn-default single-select-button">Open (10 + bouts)</button>
  <p>Boxers competing to advance to Nationals must wear USA Boxing-approved open-faced headgear (no cheek guards)</p>
  </div>
  <br/>

    Age as of April 3, 2026? <input type="number" id="age" style="width:60px;display:inline-block;"/><hr/>


    <!-- Do you plan to attend Wisconsin Golden Gloves in Madison in April 2026?
    <div class="btn-group boxer-attend">
      <button id="boxer-attend-definitely" class="blbf-btn btn-default single-select-button">Definitely</button>
      <button id="boxer-attend-maybe" class="blbf-btn btn-default single-select-button">Maybe</button>
  <button id="boxer-attend-defnot" class="blbf-btn btn-default single-select-button">No</button>
    </div> -->

    How likely are you to stay at the host hotel?<br/>
    <b>Hotel reservation deadline: March 31</b><br/>
    <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1746467085100&key=GRP&app=resvlink" target="_blank">(Reserve here)</a>

    <div class="btn-group boxer-host-hotel">
      <button id="boxer-host-hotel-definitely" class="blbf-btn btn-default single-select-button">Definitely</button>
      <button id="boxer-host-hotel-maybe" class="blbf-btn btn-default single-select-button">Maybe</button>
      <button id="boxer-host-hotel-defnot" class="blbf-btn btn-default single-select-button">No</button>
    </div>

    <h3>A $25 registration fee will be collected at check-in on the tournament start day</h3>

    <button id="submit-boxer" class="blbf-btn btn-primary">Submit</button>

  <!-- </div> -->

  <!-- </div> -->

  <div class="modal fade" id="blbf-error-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h3 id="blbf-alert-header"></h3>
        <div class="alert alert-error error-text-div wh-hidden">
          <span id="error-text-span"></span>
        </div>
        <div class="message-text-div">
          <span id="message-text-span"></span>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="blbf-btn btn-primary" data-dismiss="modal" data-trigger="focus">OK</button>
      </div>
    </div>
  </div>
  </div>

  <div class="modal fade" id="blbf-loading-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body text-center">
        <i class="fa fa-refresh fa-2x load-spin"></i><h3>Submitting...</h3>
      </div>
    </div>
  </div>
  </div>


<!-- <div id="blbf-error-modal" class="blbf-overlay">
	<div class="blbf-popup">
		<h2>Error</h2>
		<a class="close" href="#">&times;</a>
		<div class="content alert alert-error error-text-div">
			<span id="error-text-span"></span>
		</div>
	</div>
</div> -->

</div>
