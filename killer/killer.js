/*
Copyright (C) 2011 by Nicholas Jalbert
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var killer_interval;
var killer_called_count;

function kill_nyt_paywall() {
    killer_called_count += 1;
    var overlay_div = $("#gatewayCreative").parent();
    if (overlay_div.length) {
        overlay_div.remove();
        $("body").css("overflow-x", "auto");
        $("body").css("overflow-y", "auto");
        clearInterval(killer_interval);
    }

    //No Paywall has appeared in ~10 seconds
    if (killer_called_count > 20) {
        clearInterval(killer_interval);
    }
}

$(document).ready(function() {
    killer_called_count = 0;
    killer_interval = setInterval("kill_nyt_paywall()", 500);
});
