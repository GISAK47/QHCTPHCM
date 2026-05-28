ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9210").setExtent([546630.555056, 1142456.005885, 686890.037244, 1235461.675705]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.706000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_QHCTP_QHSDD_sentTongHop_1 = new ol.format.GeoJSON();
var features_QHCTP_QHSDD_sentTongHop_1 = format_QHCTP_QHSDD_sentTongHop_1.readFeatures(json_QHCTP_QHSDD_sentTongHop_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9210'});
var jsonSource_QHCTP_QHSDD_sentTongHop_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHCTP_QHSDD_sentTongHop_1.addFeatures(features_QHCTP_QHSDD_sentTongHop_1);
var lyr_QHCTP_QHSDD_sentTongHop_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHCTP_QHSDD_sentTongHop_1, 
                style: style_QHCTP_QHSDD_sentTongHop_1,
                popuplayertitle: 'QHCTP_QHSDD_sent — TongHop',
                interactive: true,
    title: 'QHCTP_QHSDD_sent — TongHop<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_0.png" /> Đất giao thông đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_1.png" /> Đất giao thông đối ngoại<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_2.png" /> Đất ở kết hợp kinh tế vườn, nông nghiệp sinh thái, dịch vụ du lịch<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_3.png" /> Đơn vị ở mới - đã san lấp chưa xây dựng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_4.png" /> Giao thông đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_5.png" /> Giao thông đối ngoại<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_6.png" /> Hành lang tổ chức đường sắt đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_7.png" /> Hồ dự trữ nguồn nước<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_8.png" /> Hồ, ao, đầm<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_9.png" /> Khu cây xanh chuyên dụng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_10.png" /> Khu cây xanh sinh thái nông nghiệp<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_11.png" /> Khu cơ quan trụ sở ngoài đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_12.png" /> Khu công trình đấu mối giao thông đối ngoại<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_13.png" /> Khu công trình đầu mối giao thông đối ngoại<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_14.png" /> Khu đất an ninh<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_15.png" /> Khu đất cây xanh chuyên đề<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_16.png" /> Khu đất cây xanh chuyên dụng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_17.png" /> Khu đất cây xanh sử dụng công cộng đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_18.png" /> Khu đất cây xanh sử dụng công cộng đơn vị ở - kết hợp hồ điều hòa<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_19.png" /> Khu đất cây xanh sử dụng hạn chế<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_20.png" /> Khu đất cây xanh, thể dục thể thao sử dụng công cộng đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_21.png" /> Khu đất cây xanh, thể dục thể thao sử dụng công cộng đô thị ven sông, suối, kênh, rạch<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_22.png" /> Khu đất cơ quan, trụ sở đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_23.png" /> Khu đất cơ quan, trụ sở, công cộng đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_24.png" /> Khu đất công nghệ cao<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_25.png" /> Khu đất công nghiệp, dịch vụ, logistic, đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_26.png" /> Khu đất công nghiệp, kho tàng, logistic, cảng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_27.png" /> Khu đất công nghiệp, tiểu thủ công nghiệp, kho tàng, logistic, cảng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_28.png" /> Khu đất công viên công cộng, công viên chuyên đề, du lịch, dịch vụ, hỗn hợp, tôn giáo<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_29.png" /> Khu đất đầu mối giao thông đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_30.png" /> Khu đất đầu mối hạ tầng kỹ thuật khác<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_31.png" /> Khu đất đầu mối hạ tầng kỹ thuật khác ngoài đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_32.png" /> Khu đất dịch vụ - công cộng đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_33.png" /> Khu đất dịch vụ, du lịch, thương mại<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_34.png" /> Khu đất đô thị - công viên công cộng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_35.png" /> Khu đất đơn vị ở<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_36.png" /> Khu đất đơn vị ở loại 1<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_37.png" /> Khu đất đơn vị ở loại 2<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_38.png" /> Khu đất đơn vị ở loại 3<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_39.png" /> Khu đất đơn vị ở loại 4<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_40.png" /> Khu đất hạ tầng kỹ thuật khác cấp đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_41.png" /> Khu đất hỗn hợp<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_42.png" /> Khu đất nông nghiệp và phát triển nông thôn<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_43.png" /> Khu đất phức hợp - Động lực phát triển<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_44.png" /> Khu đất quốc phòng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_45.png" /> Khu đất sản xuất công nghiệp, kho tàng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_46.png" /> Khu đất thể dục thể thao, dịch vụ<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_47.png" /> Khu đất thương mại, dịch vụ<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_48.png" /> Khu đất tôn giao, di tích<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_49.png" /> Khu đất trung tâm đào tạo, nghiên cứu<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_50.png" /> Khu đất trung tâm khu vực<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_51.png" /> Khu đất trung tâm phân vùng đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_52.png" /> Khu đất trung tâm thành phố<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_53.png" /> Khu đất trung tâm văn hóa thể dục thể thao<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_54.png" /> Khu đất trung tâm văn hóa thể dục thể thao cấp đô thị<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_55.png" /> Khu đất trung tâm văn hóa, thể dục - thể thao<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_56.png" /> Khu nông nghiệp và chức năng khác (còn lại)<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_57.png" /> Khu trung tâm y tế<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_58.png" /> Mặt nước sử dụng hạn chế<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_59.png" /> Mặt nước ven biển<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_60.png" /> Rừng đặc dụng<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_61.png" /> Rừng phòng hộ<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_62.png" /> Rừng sản xuất<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_63.png" /> Sông, suối<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_64.png" /> Sông, suối, kênh, rạch<br />\
    <img src="styles/legend/QHCTP_QHSDD_sentTongHop_1_65.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_QHCTP_QHSDD_sentTongHop_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_QHCTP_QHSDD_sentTongHop_1];
lyr_QHCTP_QHSDD_sentTongHop_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MaQuyUoc': 'MaQuyUoc', 'ChucNang': 'ChucNang', 'GiaiDoan': 'GiaiDoan', 'KhuVuc': 'KhuVuc', 'LayerName': 'LayerName', 'MauRGB': 'MauRGB', 'DTShapeHa': 'DTShapeHa', 'MauHex': 'MauHex', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_QHCTP_QHSDD_sentTongHop_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'MaQuyUoc': 'TextEdit', 'ChucNang': 'TextEdit', 'GiaiDoan': 'TextEdit', 'KhuVuc': 'TextEdit', 'LayerName': 'TextEdit', 'MauRGB': 'TextEdit', 'DTShapeHa': 'TextEdit', 'MauHex': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_QHCTP_QHSDD_sentTongHop_1.set('fieldLabels', {'OBJECTID': 'no label', 'MaQuyUoc': 'no label', 'ChucNang': 'inline label - always visible', 'GiaiDoan': 'inline label - always visible', 'KhuVuc': 'inline label - always visible', 'LayerName': 'inline label - always visible', 'MauRGB': 'no label', 'DTShapeHa': 'no label', 'MauHex': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'inline label - always visible', });
lyr_QHCTP_QHSDD_sentTongHop_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});