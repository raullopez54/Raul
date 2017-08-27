(function ()
{
  var x = document.querySelector('div');
  ajax(
  {
    controller: '/test',
    param:
    {
      text: 'hello'
    },
    success: function (data)
    {
      console.log('La respuesta fue: ' + JSON.stringify(data));

      for (var i = 0, max = data.length; i < max; i++)
      {
        x.innerHTML += '-> ' + data[i].table + ' <br /><br /> ';
        console.log(data[i].table)
      }
    }
  });
})();