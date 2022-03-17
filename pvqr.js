var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://bellababy.pv-ksa.com/api/getBellaInvoice?InvDate={{Sale.timeStamp|correcttimezone|date(getDateTimeFormat())}}&InvoiceTotal={{Sale.calcTotal}}&VatTotal={{Sale.taxTotal}}", requestOptions)
    .then(response => response.text())
    .then(result => 
    {
      var img = document.createElement('img');
      
      img.innerHTML = '<img src='+result+'/>';
      var el = document.getElementById("jascode");
      el.innerHTML='<img src='+result+'>';
    })
    .catch(error => console.log('error', error));
    