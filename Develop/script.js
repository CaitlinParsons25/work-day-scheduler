$("#currentDay").text(moment().format('MMMM Do YYYY'));

var timeColor = function() {

    // 9am
    var nineAm = moment({h:9});
    $("#9am").append(nineAm);

    if (moment().isAfter(nineAm, "hour")) {
    $("#9am-text").addClass("past");
    } else if (moment().isBefore(nineAm, "hour")) {
    $("#9am-text").addClass("future");
    } else {
    $("#9am-text").addClass("present")
    };

    // 10am
    var tenAm = moment({h:10});
    $("#10am").append(tenAm);

    if (moment().isAfter(tenAm, "hour")) {
    $("#10am-text").addClass("past");
    } else if (moment().isBefore(tenAm, "hour")) {
    $("#10am-text").addClass("future");
    } else {
    $("#10am-text").addClass("present")
    };

    // 11am
    var elevenAm = moment({h:11});
    $("#11am").append(elevenAm);

    if (moment().isAfter(elevenAm, "hour")) {
    $("#11am-text").addClass("past");
    } else if (moment().isBefore(elevenAm, "hour")) {
    $("#11am-text").addClass("future");
    } else {
    $("#11am-text").addClass("present")
    };

    // 12pm
    var twelvePm = moment({h:12});
    $("#12pm").append(twelvePm);

    if (moment().isAfter(twelvePm, "hour")) {
    $("#12pm-text").addClass("past");
    } else if (moment().isBefore(twelvePm, "hour")) {
    $("#12pm-text").addClass("future");
    } else {
    $("#12pm-text").addClass("present")
    };

    // 1pm
    var onePm = moment({h:13});
    $("#1pm").append(onePm);

    if (moment().isAfter(onePm, "hour")) {
    $("#1pm-text").addClass("past");
    } else if (moment().isBefore(onePm, "hour")) {
    $("#1pm-text").addClass("future");
    } else {
    $("#1pm-text").addClass("present")
    };

    // 2pm
    var twoPm = moment({h:14});
    $("#2pm").append(twoPm);

    if (moment().isAfter(twoPm, "hour")) {
    $("#2pm-text").addClass("past");
    } else if (moment().isBefore(twoPm)) {
    $("#2pm-text").addClass("future");
    } else {
    $("#2pm-text").addClass("present")
    };

    // 3pm
    var threePm = moment({h:15});
    $("#3pm").append(threePm);

    if (moment().isAfter(threePm, "hour")) {
    $("3pm-text").addClass("past");
    } else if (moment().isBefore(threePm, "hour")) {
    $("#3pm-text").addClass("future");
    } else {
    $("#3pm-text").addClass("present")
    };

    // 4pm
    var fourPm = moment({h:16});
    $("#4pm").append(fourPm);

    if (moment().isAfter(fourPm, "hour")) {
    $("#4pmm-text").addClass("past");
    } else if (moment().isBefore(fourPm, "hour")) {
    $("#4pm-text").addClass("future");
    } else {
    $("#4pm-text").addClass("present")
    };

    // 5pm
    var fivePm = moment({h:17});
    $("#5pm").append(fivePm);

    if (moment().isAfter(fivePm, "hour")) {
    $("#5pm-text").addClass("past");
    } else if (moment().isBefore(fivePm, "hour")) {
    $("#5pm-text").addClass("future");
    } else {
    $("#5pm-text").addClass("present")
    };
};

timeColor();

setInterval(function() {
    $(".time-block").each(function() {
      timeColor($(this));
    });
  }, 300000);

