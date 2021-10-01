function insertTeamMembers(teamMembers) {
  var str = '';
  for(var i = 0; i < teamMembers.length; i++) {
    str +=    `
       <div class="card">
         <div class="card-image">
           <img 
             width="200"
             height="200"
             src="https://landingpageswnpg01.herokuapp.com/images/me.png" 
             alt="Avatar"
           >
         </div>
         <div class="des">
           <h3>${teamMembers[i].name}</h3>
         </div>
         <div class="role">
           <h3>${teamMembers[i].role}</h3>
         </div>
       </div>
 `
 };
 return str;
}


function insertBlogMembers(blogMembers) {
  var str = '';

  blogMembers.forEach((element, i) => {
    str +=   `
    <div class="blog-card">
      <div class="blog-image">
        <img 
          width="100%"
          height="200"
          src="${element.imgURL}" 
          alt="${'image-' + i}"
        >
      </div>
      <div class="blog-card-body">
        <h2 style="margin-bottom: 15px; color: #F97300;">${element.title}</h2>
        <p style="color: #212529">${element.text}</p>
      </div>
      <div class="blog-card-footer">
        <p style="font-size: 18px; color: #007BFF;">${element.info}</p>
      </div>
    </div> 
  `
  });
  return str;
}