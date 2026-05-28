var size = 0;
var placement = 'point';

var style_PhngX168_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = "#eac515";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("TenDVHC") !== null) {
        labelText = String(feature.get("TenDVHC"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(239,205,20,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.3299999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
