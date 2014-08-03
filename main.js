/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus"),
        Dialogs        = brackets.getModule("widgets/Dialogs");


    // Function to run when the menu item is clicked
    function dilbertHandler() {
        var baseUrl = "http://www.dilbert.com/";
        var comicBaseUrl = baseUrl + "strips/comic/";
        var today = grabDate();
        var requestUrl = comicBaseUrl + today + "/";
        var html = "";
        $.ajax({
            url: requestUrl,
            async: false,
            type: 'GET',
            success: function(data) {
                html = data;
                return html;
            }
        });
        console.log("page: ");
        console.log(html); // TODO: Here's our HTML, now parse it.
    }

    function grabDate() {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth()+1;
        var year = today.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        today = year + "-" + month + "-" + day;
        return today;
    }

    var MY_COMMAND_ID = "brackets-dilbert.getComic";
    CommandManager.register("Daily Dilbert", MY_COMMAND_ID, dilbertHandler);

    var menu = Menus.getMenu(Menus.AppMenuBar.HELP_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(MY_COMMAND_ID);
});
