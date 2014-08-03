/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus"),
        Dialogs        = brackets.getModule("widgets/Dialogs"),
        DefaultDialogs = brackets.getModule("widgets/DefaultDialogs");


    // Function to run when the menu item is clicked
    function dilbertHandler() {
        var feedUrl = "http://rss.latunyi.com/dilbert.rss";
        var html;
        $.ajax({
            url: feedUrl,
            type: 'GET',
            async: false,
            success: function(data) {
                html = data;
                return html;
            }
        });
        var feed = html.getElementsByTagName("description");
        var imageTag = feed[1].childNodes[0].data.toString();

        Dialogs.showModalDialog(DefaultDialogs.DIALOG_ID_INFO, "Daily Dilbert", imageTag);
    }

    var MY_COMMAND_ID = "brackets-dilbert.getComic";
    CommandManager.register("Daily Dilbert", MY_COMMAND_ID, dilbertHandler);

    var menu = Menus.getMenu(Menus.AppMenuBar.HELP_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(MY_COMMAND_ID);
});
