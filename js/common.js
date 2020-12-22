$(document).ready(function () {
    $("div#dropzone-upload").dropzone();
    if($(".lightgallery").length){
        $(".lightgallery").lightGallery();
    }
    // lightGallery(document.getElementsByClassName('lightgallery'));
    if($('#addRoom').length){
        $('#addRoom').click(function () {
            if($('.room-area').length){
                var html = "<fieldset class=\"scheduler-border\">\n" +
                    "                                <legend class=\"scheduler-border\">Thông tin phòng</legend>\n" +
                    "                                <div class=\"row\">\n" +
                    "                                    <div class=\"col-6\">\n" +
                    "                                        <div class=\"form-group\">\n" +
                    "                                            <label>Diện tích phòng</label>\n" +
                    "                                            <input class=\"form-control\" placeholder=\"Họ và tên chủ nhà\">\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                    <div class=\"col-6\">\n" +
                    "                                        <div class=\"form-group\">\n" +
                    "                                            <label>Diện tích phòng</label>\n" +
                    "                                            <input class=\"form-control\" placeholder=\"Họ và tên chủ nhà\">\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                    <div class=\"col-6\">\n" +
                    "                                        <div class=\"form-group\">\n" +
                    "                                            <label>Giá tiền/tháng</label>\n" +
                    "                                            <input class=\"form-control\" placeholder=\"Giá tiền\">\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                    <di class=\"col-6\">\n" +
                    "                                        <div class=\"form-group\">\n" +
                    "                                            <label>Khu vực</label>\n" +
                    "                                            <select class=\"form-control\">\n" +
                    "                                                <option>Thanh Xuân</option>\n" +
                    "                                                <option>Xuân Thủy</option>\n" +
                    "                                                <option>Nguyễn Trãi</option>\n" +
                    "                                                <option>Hò Tùng Mậu</option>\n" +
                    "                                                <option>Cầu Giấy</option>\n" +
                    "                                            </select>\n" +
                    "                                        </div>\n" +
                    "                                    </di>\n" +
                    "                                </div>\n" +
                    "                                <div class=\"text-center\">\n" +
                    "                                    <label class=\"control-label\">Danh sách Ảnh</label>\n" +
                    "                                </div>\n" +
                    "                                <form action=\"/file-upload\" class=\"dropzone\">\n" +
                    "                                    <input type=\"hidden\" name=\"media\"/>\n" +
                    "                                </form>\n" +
                    "                            </fieldset>"
                $('.room-area').append(html);
            }
        });
    }
});
