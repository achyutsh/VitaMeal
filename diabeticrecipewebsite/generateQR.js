const QRCode = require('qrcode');

const url = 'https://vitameal-b39e9.web.app';

QRCode.toFile('vitameal-qr.png', url, {
  color: {
    dark: '#000',  // QR code color
    light: '#FFF'  // Background color
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved as vitameal-qr.png');
});
