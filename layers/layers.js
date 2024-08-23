var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_QuyHochChungHCM_1 = new ol.format.GeoJSON();
var features_QuyHochChungHCM_1 = format_QuyHochChungHCM_1.readFeatures(json_QuyHochChungHCM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuyHochChungHCM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuyHochChungHCM_1.addFeatures(features_QuyHochChungHCM_1);
var lyr_QuyHochChungHCM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuyHochChungHCM_1, 
                style: style_QuyHochChungHCM_1,
                popuplayertitle: "Quy Hoạch Chung HCM",
                interactive: true,
    title: 'Quy Hoạch Chung HCM<br />\
    <img src="styles/legend/QuyHochChungHCM_1_0.png" /> Đất Ở 1<br />\
    <img src="styles/legend/QuyHochChungHCM_1_1.png" /> Đất Ở 2<br />\
    <img src="styles/legend/QuyHochChungHCM_1_2.png" /> Đất Ở 3<br />\
    <img src="styles/legend/QuyHochChungHCM_1_3.png" /> Đất Trung Tâm Khu Vực<br />\
    <img src="styles/legend/QuyHochChungHCM_1_4.png" /> Đầu Mối HTKT Khác<br />\
    <img src="styles/legend/QuyHochChungHCM_1_5.png" /> Hồ Dữ Trữ Nguồn Nước<br />\
    <img src="styles/legend/QuyHochChungHCM_1_6.png" /> Hồ, Ao, Đầm<br />\
    <img src="styles/legend/QuyHochChungHCM_1_7.png" /> Khu Cây Xanh Chuyên Dụng<br />\
    <img src="styles/legend/QuyHochChungHCM_1_8.png" /> Khu Cơ Quan Trụ Sở Ngoài Đô Thị<br />\
    <img src="styles/legend/QuyHochChungHCM_1_9.png" /> Khu Đất An Ninh<br />\
    <img src="styles/legend/QuyHochChungHCM_1_10.png" /> Khu Đất Cây Xanh Sử Dụng Công Cộng Đơn Vị Ở Kết Hợp Hồ Điều Hoà<br />\
    <img src="styles/legend/QuyHochChungHCM_1_11.png" /> Khu Đất Cây Xanh Sử Dụng Hạn Chế, Công Viên Chuyên Đề<br />\
    <img src="styles/legend/QuyHochChungHCM_1_12.png" /> Khu Đất Cây Xanh TDTT Sử Dụng CCĐT<br />\
    <img src="styles/legend/QuyHochChungHCM_1_13.png" /> Khu Đất Cây Xanh Trong Các Khu Công Nghiệp, Công Nghệ Cao<br />\
    <img src="styles/legend/QuyHochChungHCM_1_14.png" /> Khu Đất Công Nghệ Cao<br />\
    <img src="styles/legend/QuyHochChungHCM_1_15.png" /> Khu Đất Công Nghiệp, Tiểu Thủ Công Nghiệp, Kho Tàng, Logistic, Cảng<br />\
    <img src="styles/legend/QuyHochChungHCM_1_16.png" /> Khu Đất Đầu Mối Giao Thông Đô Thị<br />\
    <img src="styles/legend/QuyHochChungHCM_1_17.png" /> Khu Đất Dịch Vụ - CTCC Cấp ĐT, Khu Đất Cơ Quan Trụ Sở Đô Thị<br />\
    <img src="styles/legend/QuyHochChungHCM_1_18.png" /> Khu Đất Dịch Vụ, Du Lịch<br />\
    <img src="styles/legend/QuyHochChungHCM_1_19.png" /> Khu Đất Điểm Dân Cư Nông Thôn<br />\
    <img src="styles/legend/QuyHochChungHCM_1_20.png" /> Khu Đất Hỗn Hợp 2<br />\
    <img src="styles/legend/QuyHochChungHCM_1_21.png" /> Khu Đất Hỗn Hợp Đa Chức Năng 1<br />\
    <img src="styles/legend/QuyHochChungHCM_1_22.png" /> Khu Đất Nghĩa Trang<br />\
    <img src="styles/legend/QuyHochChungHCM_1_23.png" /> Khu Đất Nông Nghiệp Công Nghệ Cao<br />\
    <img src="styles/legend/QuyHochChungHCM_1_24.png" /> Khu Đất Quốc Phòng<br />\
    <img src="styles/legend/QuyHochChungHCM_1_25.png" /> Khu Đất Tổ Hợp CVCC, CVCD, DL, DV, HH<br />\
    <img src="styles/legend/QuyHochChungHCM_1_26.png" /> Khu Đất Tổ Hợp Đô Thị - Công Viên Công Cộng<br />\
    <img src="styles/legend/QuyHochChungHCM_1_27.png" /> Khu Đất Tổ Hợp ĐT, Công Viên Công Cộng<br />\
    <img src="styles/legend/QuyHochChungHCM_1_28.png" /> Khu Đất Tôn Giáo, Di Tích<br />\
    <img src="styles/legend/QuyHochChungHCM_1_29.png" /> Khu Đất Trung Tâm Đào Tạo, Nghiên Cứu<br />\
    <img src="styles/legend/QuyHochChungHCM_1_30.png" /> Khu Đất Trung Tâm Phân Vùng Đô Thị<br />\
    <img src="styles/legend/QuyHochChungHCM_1_31.png" /> Khu Đất TT TPHCM. TT Vùng, TT Quốc Tế<br />\
    <img src="styles/legend/QuyHochChungHCM_1_32.png" /> Khu Hỗn Hợp 3<br />\
    <img src="styles/legend/QuyHochChungHCM_1_33.png" /> Khu Liên Hiệp Xử Lý Chất Thải<br />\
    <img src="styles/legend/QuyHochChungHCM_1_34.png" /> Khu Sản Xuất Nông Nghiệp 1<br />\
    <img src="styles/legend/QuyHochChungHCM_1_35.png" /> Khu Sản Xuất Nông Nghiệp 2<br />\
    <img src="styles/legend/QuyHochChungHCM_1_36.png" /> Khu Sản Xuất Nông Nghiệp 3<br />\
    <img src="styles/legend/QuyHochChungHCM_1_37.png" /> Khu Trung Tâm Y Tế<br />\
    <img src="styles/legend/QuyHochChungHCM_1_38.png" /> Nuôi Trồng Thuỷ Sản<br />\
    <img src="styles/legend/QuyHochChungHCM_1_39.png" /> Rừng Đặc Dụng<br />\
    <img src="styles/legend/QuyHochChungHCM_1_40.png" /> Rừng Phòng Hộ<br />\
    <img src="styles/legend/QuyHochChungHCM_1_41.png" /> Rừng Sản Xuất<br />\
    <img src="styles/legend/QuyHochChungHCM_1_42.png" /> Trung Tâm Văn Hoá Thể Dục Thể Thao<br />\
    <img src="styles/legend/QuyHochChungHCM_1_43.png" /> <br />'
        });
var format_GiaoThong_2 = new ol.format.GeoJSON();
var features_GiaoThong_2 = format_GiaoThong_2.readFeatures(json_GiaoThong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiaoThong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiaoThong_2.addFeatures(features_GiaoThong_2);
var lyr_GiaoThong_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiaoThong_2, 
                style: style_GiaoThong_2,
                popuplayertitle: "GiaoThong",
                interactive: true,
                title: '<img src="styles/legend/GiaoThong_2.png" /> GiaoThong'
            });
var format_RanhDongLuc_3 = new ol.format.GeoJSON();
var features_RanhDongLuc_3 = format_RanhDongLuc_3.readFeatures(json_RanhDongLuc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RanhDongLuc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhDongLuc_3.addFeatures(features_RanhDongLuc_3);
var lyr_RanhDongLuc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhDongLuc_3, 
                style: style_RanhDongLuc_3,
                popuplayertitle: "RanhDongLuc",
                interactive: true,
                title: '<img src="styles/legend/RanhDongLuc_3.png" /> RanhDongLuc'
            });
var format_RanhDotDauQH_4 = new ol.format.GeoJSON();
var features_RanhDotDauQH_4 = format_RanhDotDauQH_4.readFeatures(json_RanhDotDauQH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RanhDotDauQH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhDotDauQH_4.addFeatures(features_RanhDotDauQH_4);
var lyr_RanhDotDauQH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhDotDauQH_4, 
                style: style_RanhDotDauQH_4,
                popuplayertitle: "RanhDotDauQH",
                interactive: true,
                title: '<img src="styles/legend/RanhDotDauQH_4.png" /> RanhDotDauQH'
            });
var format_RanhHanhChanh_5 = new ol.format.GeoJSON();
var features_RanhHanhChanh_5 = format_RanhHanhChanh_5.readFeatures(json_RanhHanhChanh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RanhHanhChanh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhHanhChanh_5.addFeatures(features_RanhHanhChanh_5);
var lyr_RanhHanhChanh_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhHanhChanh_5, 
                style: style_RanhHanhChanh_5,
                popuplayertitle: "RanhHanhChanh",
                interactive: true,
                title: '<img src="styles/legend/RanhHanhChanh_5.png" /> RanhHanhChanh'
            });
var format_RanhQHdaihan_line_6 = new ol.format.GeoJSON();
var features_RanhQHdaihan_line_6 = format_RanhQHdaihan_line_6.readFeatures(json_RanhQHdaihan_line_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RanhQHdaihan_line_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhQHdaihan_line_6.addFeatures(features_RanhQHdaihan_line_6);
var lyr_RanhQHdaihan_line_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhQHdaihan_line_6, 
                style: style_RanhQHdaihan_line_6,
                popuplayertitle: "RanhQHdaihan_line",
                interactive: true,
                title: '<img src="styles/legend/RanhQHdaihan_line_6.png" /> RanhQHdaihan_line'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_QuyHochChungHCM_1.setVisible(true);lyr_GiaoThong_2.setVisible(true);lyr_RanhDongLuc_3.setVisible(true);lyr_RanhDotDauQH_4.setVisible(true);lyr_RanhHanhChanh_5.setVisible(true);lyr_RanhQHdaihan_line_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_QuyHochChungHCM_1,lyr_GiaoThong_2,lyr_RanhDongLuc_3,lyr_RanhDotDauQH_4,lyr_RanhHanhChanh_5,lyr_RanhQHdaihan_line_6];
lyr_QuyHochChungHCM_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ChucNang': 'ChucNang', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Ma': 'Ma', 'ChiTiet': 'ChiTiet', 'PhanLoai': 'PhanLoai', 'QuanHuyen': 'QuanHuyen', });
lyr_GiaoThong_2.set('fieldAliases', {'QuanHuyen': 'QuanHuyen', });
lyr_RanhDongLuc_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_RanhDo': 'FID_RanhDo', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', });
lyr_RanhDotDauQH_4.set('fieldAliases', {'FID_RanhDo': 'FID_RanhDo', 'Id': 'Id', });
lyr_RanhHanhChanh_5.set('fieldAliases', {'QuanHuyen': 'QuanHuyen', });
lyr_RanhQHdaihan_line_6.set('fieldAliases', {'Id': 'Id', });
lyr_QuyHochChungHCM_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ChucNang': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Ma': 'TextEdit', 'ChiTiet': 'TextEdit', 'PhanLoai': 'TextEdit', 'QuanHuyen': 'TextEdit', });
lyr_GiaoThong_2.set('fieldImages', {'QuanHuyen': 'TextEdit', });
lyr_RanhDongLuc_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_RanhDo': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_RanhDotDauQH_4.set('fieldImages', {'FID_RanhDo': 'TextEdit', 'Id': 'Range', });
lyr_RanhHanhChanh_5.set('fieldImages', {'QuanHuyen': 'TextEdit', });
lyr_RanhQHdaihan_line_6.set('fieldImages', {'Id': 'Range', });
lyr_QuyHochChungHCM_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'ChucNang': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', 'Ma': 'inline label - visible with data', 'ChiTiet': 'inline label - visible with data', 'PhanLoai': 'inline label - visible with data', 'QuanHuyen': 'inline label - visible with data', });
lyr_GiaoThong_2.set('fieldLabels', {'QuanHuyen': 'inline label - visible with data', });
lyr_RanhDongLuc_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'FID_RanhDo': 'hidden field', 'Id': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_RanhDotDauQH_4.set('fieldLabels', {'FID_RanhDo': 'inline label - visible with data', 'Id': 'no label', });
lyr_RanhHanhChanh_5.set('fieldLabels', {'QuanHuyen': 'inline label - always visible', });
lyr_RanhQHdaihan_line_6.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_RanhQHdaihan_line_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});