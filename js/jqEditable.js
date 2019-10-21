/**
 * JqEditable class
 */
function JqEditable(id, saveFunc, cancelFunc) {
    this._saveFunc = saveFunc;
    this._cancelFunc = cancelFunc;
    this._id = id;
    this._init();
}

JqEditable.prototype._hide = function() {
    $('#js-jqEditable-editable-' + this._id).hide();
    $('#js-jqEditable-editable-buttons-'+ this._id).hide();
    $('#js-jqEditable-editable-off-'+ this._id).show();
};

JqEditable.prototype._save = function() {
    var value = $('#js-jqEditable-editable-' + this._id).val();
    $('#js-jqEditable-edit-value-' + this._id).text(value);
    this._hide();
    this._saveFunc(value);
};

JqEditable.prototype._cancel = function() {
    this._hide();
    this._cancelFunc();
};

JqEditable.prototype._show = function() {
    $('#js-jqEditable-editable-' + this._id).show();
    $('#js-jqEditable-editable-buttons-' + this._id).show();
    $('#js-jqEditable-editable-off-'+ this._id).hide();
};

JqEditable.prototype._makeEditable = function() {
    $('#js-jqEditable-editable-' + this._id).val($('#js-jqEditable-edit-value-' + this._id).text());
    this._show();
};

JqEditable.prototype._init = function() {
    var $target = $('#' + this._id);
    var textVal = $target.text();
    var html = ''
    + '<div class="jqEditable-component">'
    + '    <input id="js-jqEditable-editable-' + this._id + '" class="jqEditable-input-area" value="">'
    + '    <div id="js-jqEditable-editable-off-'+ this._id + '">'
    + '        <i id="js-jqEditable-makeEdit-' + this._id + '" class="jqEditable-selectable jqEditable-edit-makeEdit">Edit</i>'
    + '        <span id="js-jqEditable-edit-value-' + this._id + '" class="jqEdtablie-edit-value">' + textVal + '</span>'
    + '    </div>'
    + '</div>'
    + '<div id="js-jqEditable-editable-buttons-' + this._id + '" class="jqEditable-buttons">'
    + '    <button id="js-jqEditable-edit-save-' + this._id + '" class="jqEditable-buttons-size">&#10003;</button>'
    + '    <button id="js-jqEditable-edit-cancel-' + this._id + '" class="jqEditable-buttons-size">&times;</button>'
    + '</div>';
    $target.html(html);  // replace DOM
    var self = this;  // prevent replacing this property by JQuery
    // the below code doesn't not work
    //$('#js-jqEditable-edit-save-' + this._id).on('click', self._save);
    //$('#js-jqEditable-edit-cancel-' + this._id).on('click', self._cancel);
    //$('#js-jqEditable-makeEdit-' + this._id).on('click', self._makeEditable;
    // this code is valid.
    $('#js-jqEditable-edit-save-' + this._id).on('click', function() { self._save(); } );
    $('#js-jqEditable-edit-cancel-' + this._id).on('click', function() { self._cancel(); });
    $('#js-jqEditable-makeEdit-' + this._id).on('click', function() { self._makeEditable(); });
    // or you can use bind alternatively
    //$('#js-jqEditable-edit-save-' + this._id).on('click', function() { this._save(); }.bind(this));
    //$('#js-jqEditable-edit-cancel-' + this._id).on('click', function() { this._cancel(); }.bind(this));
    //$('#js-jqEditable-makeEdit-' + this._id).on('click', function() { this._makeEditable(); }.bind(this));

    this._hide();
};