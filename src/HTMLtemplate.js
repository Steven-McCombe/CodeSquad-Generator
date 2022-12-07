const managerCard = (manager) => {
    return `
    <div class="card" style="width: 16rem; border-radius:10px;">
        <div class="card-body bg-primary text-white rounded-top" >
          <h5 class="card-title">${manager.teamName}</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush" style="font-size: 1rem;">
          <li class="list-group-item">ID:  <span class="idHTML">${manager.teamId}</span></li>
          <li class="list-group-item">Email: <span><a href="mailto:${manager.teamEmail}" class="emailHTML" style="text-decoration: none;">${manager.teamEmail}</a></span></li>
          <li class="list-group-item">Office No:  <span class="officeNoHTML">${manager.teamOfficeNo}</span></li>
        </ul>
      </div>
</div>
    `;
}

const internCard = (intern) => {
    return `
            <div class="card" style="width: 16rem; border-radius:10px;">
                <div class="card-body bg-primary text-white rounded-top" >
                  <h5 class="card-title">${intern.teamName}</h5>
                  <p class="card-text">Intern</p>
                </div>
                <ul class="list-group list-group-flush" style="font-size: 1rem;">
                  <li class="list-group-item">ID:  <span class="idHTML">${intern.teamId}</span></li>
                  <li class="list-group-item">Email: <span><a href="mailto:${intern.teamEmail}" class="emailHTML" style="text-decoration: none;">${intern.teamEmail}</a></span></li>
                  <li class="list-group-item">School:  <span class="schoolHTML">${intern.teamSchool}</span></li>
                </ul>
              </div>
    </div>
    `;
} 

const engineerCard = (engineer) => {
    return`
    <div class="card" style="width: 16rem; border-radius:10px;">
        <div class="card-body bg-primary text-white rounded-top" >
          <h5 class="card-title">${engineer.teamName}</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush" style="font-size: 1rem;">
          <li class="list-group-item">ID:  <span class="idHTML">${engineer.teamId}</span></li>
          <li class="list-group-item">Email: <span><a href="mailto:${engineer.teamEmail}" class="emailHTML" style="text-decoration: none;">${engineer.teamEmail}</a></span></li>
          <li class="list-group-item">Github:  <span><a href="www.github.com/${engineer.teamGithub}" class="githubHTML" style="text-decoration: none;">${engineer.teamGithub}</a></span></li>
        </ul>
      </div>
</div>`
}

generateHTML = (data) => {

    // array for cards 
    htmlArr = [];

    for (let i = 0; i < data.length; i++) {
        const employeeData = data[i];
        const role = employeeData.getRole();

        switch (role) { 
            case "Manager": { 
                managerCard(employeeData);
                htmlArr.push(managerCard);
                console.log(managerCard); 
            break
            }
            case "Engineer": { 
                engineerCard(employeeData);
                htmlArr.push(engineerCard);
                console.log(engineerCard); 
            break
            }
            case "Intern": { 
                internCard(employeeData);
                htmlArr.push(internCard);
                console.log(internCard); 
            break
            }
                
        }
        
    }
}

const page = (htmlArr) => {   
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <title>CodeSquad - View your team members</title>
</head>
<body>
    <div class="container main">
        <div class="container header d-flex justify-content-center bg-primary text-white" style="border-radius:10px; padding:10px; border: 2px solid white;">
            <h1 class="titleText">CodeSquad</h1>
        </div>
        <div class="container cards d-flex gap-2 flex-wrap" >
            ${htmlArr}
        </div>
    </div>

    
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>

`;
  }
  
module.exports = HTMLtemplate;

