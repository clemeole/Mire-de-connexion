var containerClassroom = $("#containerClassroom");
var containerPupil = $("#containerPupil");

var windowPupills = $("<div></div>");
var windowClassrooms = $("<div></div>");

var blocPage = $("#blocPage");

var blocPupills = $("<div id=\"blocPupills\"></div>");
var blocClassrooms = $("<div id=\"blocClassrooms\"></div>");

var selectedIcon = $("<div></div>");
var selectedIconClassroom = $("<div id= \"\"></div>");
var hasSelectedIconPupill = false;
var hasSelectedIconClassroom = false;

selectedIcon.addClass("selectedIcon");
selectedIconClassroom.addClass("selectedIconClassroom");

var currentPupill = $("<img src=\"\" />");
var currentClassroom = $("<img src=\"\" />");

var srcClassroomDefault = "img/classroomDefault.svg";
var srcPupillDefault = "img/pupillDefault.png";

var loadedImgClassroomIcon = false;
var loadedImgPupillIcon = false;

var firstGeneration = true;
var selectedUser;