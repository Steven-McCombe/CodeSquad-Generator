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

module.exports = HTMLtemplate;

