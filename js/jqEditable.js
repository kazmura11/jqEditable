/**
 * JqEditable class
 */
var JqEditable = function(id_, saveFunc_, cancelFunc_) {
    // ------
    // private fields
    // ------
    var saveFunc = saveFunc_;
    var cancelFunc = cancelFunc_;
    var id = id_;

    // ------
    // private methods
    // ------
    var hide = function() {
        $('#js-jqEditable-editable-' + id).hide();
        $('#js-jqEditable-editable-buttons-'+ id).hide();
        $('#js-jqEditable-editable-off-'+ id).show();
    };

    var save = function() {
        var value = $('#js-jqEditable-editable-' + id).val();
        $('#js-jqEditable-edit-value-' + id).text(value);
        hide();
        saveFunc(value);
    };

    var cancel = function() {
        hide();
        cancelFunc();
    };
    
    var show = function() {
        $('#js-jqEditable-editable-' + id).show();
        $('#js-jqEditable-editable-buttons-' + id).show();
        $('#js-jqEditable-editable-off-'+ id).hide();
    };

    var makeEditable = function() {
        $('#js-jqEditable-editable-' + id).val($('#js-jqEditable-edit-value-' + id).text());
        show();
    };

    var init = function() {
        var $target = $('#' + id);
        var textVal = $target.text();
        var html = ''
        + '<div class="jqEditable-component">'
        + '    <input id="js-jqEditable-editable-' + id + '" class="jqEditable-input-area" value="">'
        + '    <div id="js-jqEditable-editable-off-'+ id + '">'
        + '        <i id="js-jqEditable-makeEdit-' + id + '" class="jqEditable-selectable jqEditable-edit-makeEdit">Edit</i>'
        + '        <span id="js-jqEditable-edit-value-' + id + '" class="jqEdtablie-edit-value">' + textVal + '</span>'
        + '    </div>'
        + '</div>'
        + '<div id="js-jqEditable-editable-buttons-' + id + '" class="jqEditable-buttons">'
        + '    <button id="js-jqEditable-edit-save-' + id + '" class="jqEditable-buttons-size">&#10003;</button>'
        + '    <button id="js-jqEditable-edit-cancel-' + id + '" class="jqEditable-buttons-size">&times;</button>'
        + '</div>';
        $target.html(html);  // replace DOM
        $('#js-jqEditable-edit-save-' + id).on('click', save);
        $('#js-jqEditable-edit-cancel-' + id).on('click', cancel);
        $('#js-jqEditable-makeEdit-' + id).on('click', makeEditable);
        hide();
    }

    init();
};
