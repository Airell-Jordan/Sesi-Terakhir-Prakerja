var flexWrap = document.getElementsByClassName('flex-wrap');
var tableCustomers = document.getElementById('customers');

flexWrap[0].innerHTML += insertTeamMembers(teamMembers);
flexWrap[1].innerHTML += insertBlogMembers(blogMembers);


var url = 'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';


fetch(url)
  .then(resp => resp.json())
  .then(data => {
    console.log('Data Covid')
    for(var i = 0; i < data.features.length; i++) {
      var covidCase = data.features[i].attributes;
      
      tableCustomers.innerHTML += `  
      <tr>
        <td>${covidCase.FID}</td>
        <td>${covidCase.Provinsi}</td>
        <td>${covidCase.Kasus_Semb}</td>
        <td>${covidCase.Kasus_Meni}</td>
        <td>${covidCase.Kasus_Posi}</td>
    </tr>`
    }
  })
  .catch(err => console.log(err));

  console.log('Halo')