$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $bthCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area')
    //*calc button click event
    // function roundFractional(x, n) {
    //     return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    // }
    $bthCal.click(function(){
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        // var p = 2*(w+h),
        //     a = w*h
        var rect = rectangle();
        //output
        $perimeter.val(rect.perimeter(w, h));
        $area.val(rect.area(w, h));
    })   
});