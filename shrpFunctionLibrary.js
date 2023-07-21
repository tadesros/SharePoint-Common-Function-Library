//*************** RESUSABLE FUNCTIONS *********************/

/**
 * Function: SetDropDown: Set the value of a dropdown given the Strings FieldName  and Value
 **/
function setDropdown(fieldName, dropDownValue) {
	fieldName = "Ship From Supplier";
	document.querySelector(`[title="${fieldName}"]`).value = dropDownValue;
}
/**
 * Hide a field - Send the name of the Field as String
 * **/
function hideField(fieldName) {
	let el = document.querySelector(`[title="${fieldName}"]`).closest("tr");
	el.style.display = "none";
}
/**
 * FUNCTION: Lock Field - Send the fieldName
 */
function lockField(fieldToLock) {
	 (document.querySelector(
		'[title="' + fieldToLock + '"]'
	).disabled = true);
}
/**
 * FUNCTION: Un-Lock Field
 */
function unlockField(fieldToLock) {
	 (document.querySelector(
		'[title="' + fieldToLock + '"]'
	).disabled = false);
}

