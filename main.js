/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus");


    // Function to run when the menu item is clicked
    function getComic() {
        window.alert("Hello, world!");
    }


    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "brackets-dilbert.getComic";   // package-style naming to avoid collisions
    CommandManager.register("Daily Dilbert", MY_COMMAND_ID, getComic);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.HELP_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(MY_COMMAND_ID);
});