var size = 0;
var placement = 'point';
function categories_QuyHochChungHCM_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Đất Ở 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,223,127,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,223,127,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Đất Ở 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,127,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Đất Ở 3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,204,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,204,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Đất Trung Tâm Khu Vực':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,102,102,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,102,102,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Đầu Mối HTKT Khác':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,76,153,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(114,76,153,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hồ Dữ Trữ Nguồn Nước':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,127,255,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,255,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hồ, Ao, Đầm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(27,79,236,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(27,79,236,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Cây Xanh Chuyên Dụng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,153,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Cơ Quan Trụ Sở Ngoài Đô Thị':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,51,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất An Ninh':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,153,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(114,153,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Cây Xanh Sử Dụng Công Cộng Đơn Vị Ở Kết Hợp Hồ Điều Hoà':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(63,127,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,127,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Cây Xanh Sử Dụng Hạn Chế, Công Viên Chuyên Đề':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,153,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Cây Xanh TDTT Sử Dụng CCĐT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,204,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,204,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Cây Xanh Trong Các Khu Công Nghiệp, Công Nghệ Cao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,127,95,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,95,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Công Nghệ Cao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,204,204,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,204,204,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Công Nghiệp, Tiểu Thủ Công Nghiệp, Kho Tàng, Logistic, Cảng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,0,204,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Đầu Mối Giao Thông Đô Thị':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,76,153,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(114,76,153,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Dịch Vụ - CTCC Cấp ĐT, Khu Đất Cơ Quan Trụ Sở Đô Thị':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,51,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Dịch Vụ, Du Lịch':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,255,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Điểm Dân Cư Nông Thôn':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,153,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Hỗn Hợp 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,255,223,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,223,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Hỗn Hợp Đa Chức Năng 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,191,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,191,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Nghĩa Trang':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(91,91,91,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(91,91,91,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Nông Nghiệp Công Nghệ Cao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,204,102,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,204,102,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Quốc Phòng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(66,76,38,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(66,76,38,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Tổ Hợp CVCC, CVCD, DL, DV, HH':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,204,153,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,204,153,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Tổ Hợp Đô Thị - Công Viên Công Cộng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,204,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,204,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Tổ Hợp ĐT, Công Viên Công Cộng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,204,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,204,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Tôn Giáo, Di Tích':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,0,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Trung Tâm Đào Tạo, Nghiên Cứu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,114,153,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,114,153,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất Trung Tâm Phân Vùng Đô Thị':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,0,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Đất TT TPHCM. TT Vùng, TT Quốc Tế':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,0,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Hỗn Hợp 3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,255,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Liên Hiệp Xử Lý Chất Thải':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,127,204,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,127,204,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Sản Xuất Nông Nghiệp 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Sản Xuất Nông Nghiệp 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Sản Xuất Nông Nghiệp 3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khu Trung Tâm Y Tế':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,223,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,223,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nuôi Trồng Thuỷ Sản':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,127,255,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,255,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rừng Đặc Dụng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(97,216,145,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rừng Phòng Hộ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(86,200,232,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rừng Sản Xuất':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(76,153,76,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,76,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Trung Tâm Văn Hoá Thể Dục Thể Thao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,153,0,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.72)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(226,43,52,0.72)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_QuyHochChungHCM_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ChucNang");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_QuyHochChungHCM_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
