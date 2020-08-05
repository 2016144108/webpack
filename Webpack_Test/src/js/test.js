import {str} from "./string";
import '!style-loader!css-loader!../css/style.css'
import $ from 'jquery'
/*import 'bootstrap/dist/js/bootstrap.min'
import 'layui/dist/layui'*/

document.write(str);

document.write(`<div></div>`);
$('div').click(function () {
    alert("点击了");
})
