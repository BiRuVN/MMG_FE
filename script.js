function call_api(is_onload=true) {
    let url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Shopee";
    if (!is_onload){
        switch (document.getElementById("select_id").value){
            case "1":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Shopee";
                break;
            case "2":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Tiki";
                break;
            case "3":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Lazada";
                break;
            case "4":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Sendo";
                break;
            case "5":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Now";
                break;
            case "6":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Grab";
                break;
            case "7":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Fahasha";
                break;
            case "8":
                url = "https://mgg-be.onrender.com/api/v1/get_voucher?type_=Nguyen-Kim";
                break;
            default:
                break;
        }
    }
    fetch(url).then((data) => {
        return data.json();
    }).then((objectData) => {
        console.log(objectData['data']);
        let tableData = "";
        let img_url = "";
        let btn = "";
        objectData['data'].map((values) => {
            if (values.discount_code == ""){
                btn = `<a href="#" class="btn btn-primary justify-content-center mt-2" style="display:block;font-size:large;">NHẬN ƯU ĐÃI</a>`
            } else {
                btn = `<div id="copy-code" class="btn btn-primary justify-content-center" style="display:block;font-size:large;" onclick="mycopy('${values.discount_code}')">
                            <i class="far fa-copy me-2"></i>
                            COPY MÃ
                        </div>`
            }
            switch (values.type){
                case "Tiki":
                    img_url = "./img/ma-giam-gia-tiki.webp";
                    break;
                case "Shopee":
                    img_url = "./img/shopee-logo-40482.png";
                    break;
                case "Lazada":
                    img_url = "./img/ma-giam-gia-lazada.webp";
                    break;
                case "Grab":
                    img_url = "./img/grab-logo.webp";
                    break;
                case "Now":
                    img_url = "./img/logo-shopeefood.webp";
                    break;
                case "Nguyen-Kim":
                    img_url = "./img/ma-giam-gia-nguyen-kim.webp";
                    break;
                case "Sendo":
                    img_url = "./img/ma-giam-gia-sendo.webp";
                    break;
                case "Fahasha":
                    img_url = "./img/logo-fahasa.webp";
                    break;
                default:
                    img_url = "./img/black_default.png";
                    break;
            }
            tableData += 
            `<div class ="col-12 col-sm-6 col-md-4 p-2 align-items-stretch" style="width: 33%;">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <span class="d-inline-block">
                                <img class="position-relative float-end i-b" width="80" src="${img_url}" alt="shopee circle logo"></img>
                                <b class="voucher-title ">${values.discount}</b>
                            </span>
                            <div style="height:180px; overflow:auto">
                                <span class="d-inline-block"><b class="voucher-info">Giảm tối đa:</b> ${values.max_discount}</span><br>
                                <span class="d-inline-block"><b class="voucher-info">ĐH tối thiểu:</b> ${values.min_purchase}</span><br>
                                <span class="d-inline-block"><b class="voucher-info">Hiệu lực lúc:</b> ${values.start_at}</span><br>
                                <span class="d-inline-block"><b class="voucher-info">Ngày hết hạn:</b> ${values.end_at}</span><br>
                                <span class="d-inline-block"><b class="voucher-info">Ngành hàng:</b> ${values.category}</span>
                            </div>
                        </div>
                        <div class="row">
                            ${btn}
                        </div>
                    </div>
                </div>
            </div>`;
        });
        document.getElementById("wrap").innerHTML=tableData;
    }).catch((err) => {
        console.log(err);
    })
}

function mycopy(text) {  
     // Copy the text inside the text field
    navigator.clipboard.writeText(text);
}