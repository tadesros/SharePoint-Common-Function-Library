//*************** RESUSABLE FUNCTIONS *********************/

/**
 * Function: SetDropDown: Set the value of a dropdown given the Strings FieldName  and Value
 **/
function setDropdown(fieldName, dropDownValue) {	
	document.querySelector(`[title="${fieldName}"]`).value = dropDownValue;
}
/**
 * Hide a field - Send the name of the Field as a String
 * **/
function hideField(fieldName) {
	document.querySelector(`[title="${fieldName}"]`).closest("tr").style.display =
		"none";	
}
/**
 * FUNCTION: Lock Field - Send the fieldName
 */
function lockField(fieldToLock) {
	let status = (document.querySelector(
		'[title="' + fieldToLock + '"]'
	).disabled = true);
}
/**
 * FUNCTION: Un-Lock Field
 */
function unlockField(fieldToLock) {
	let status = (document.querySelector(
		'[title="' + fieldToLock + '"]'
	).disabled = false);
}
/**
 * Clear a Text Field or TextArea by Title
 */
function clearDateTextOrTextArea(title) {
	let thisElement = document.querySelector('[title="' + title + '"]');
	thisElement.value = "";
}
function hideDate(title) {
	$('nobr:contains("' + title + '")')
		.closest("tr")
		.hide();
}
function unHideDate(title) {
	$('nobr:contains("' + title + '")')
		.closest("tr")
		.show();
}
function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}
/**
 * Function: Set Date Field: Set the value of a dropdown given the Strings FieldName  and Value
 **/
function setDateField(fieldName, dateFieldFormat) {
	document.querySelector(`[title="${fieldName}"]`).value = dateFieldFormat;
}
/**
 * Function: Set Date Field: Set the value of a dropdown given the Strings FieldName  and Value
 **/
function setTextField(fieldName, string) {
	document.querySelector(`[title="${fieldName}"]`).value = string;
}


/**
 * addPlaceHolder()
 * @param {*} fieldTitle = Title of the field on the form
 * @param {*} message    = Message to be displayed
 */ 
function addPlaceHolder(fieldTitle, message) {
  var userInput = document.querySelector(`[title="${fieldTitle}"]`);
  //var userInput = document.querySelector('[title="Vendor Description"]');
  userInput.setAttribute("placeholder", message);
}




