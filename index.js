let qr;
(function (){
    qr = new QRious({
        element: document.querySelector('#qrcode'),
        size:250,
        value: "Code Grind",
    });
})();

const generateqrcode = () => {
    const qrtext = document.querySelector('#qrtext').value;
    qr.set({
        value:qrtext,
    })
};
const downloadqrcode = () => {
    const qrcanvas = document.getElementById('qrcode');
    const qrurl = qrcanvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');


    downloadLink.href = qrurl;
    downloadLink.download = 'apna_qr.png'
    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.removeChild(downloadLink);

}

const updateqrcolors = () => {
    const maincolor =  document.getElementById('maincolor').
    value;
    const bgcolor = document.getElementById('bgcolor').value;


    qr.set({
        foreground: maincolor,
        background: bgcolor,
    })
}