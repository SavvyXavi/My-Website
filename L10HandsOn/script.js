$(document).ready(function() {
    $("#github").hover(function() {
        $(this).animate({height: '55px', width: '55px'});
    }, function() {
        $(this).animate({height: '48px', width: '48px'});
    });
});

$(document).ready(function() {
    $("#linkedIn").hover(function() {
        $(this).animate({height: '55px', width: '55px'});
    }, function() {
        $(this).animate({height: '48px', width: '48px'});
    });
});

$(document).ready(function() {
    $("#instagram").hover(function() {
        $(this).animate({height: '55px', width: '55px'});
    }, function() {
        $(this).animate({height: '48px', width: '48px'});
    });
});

const reposRequest = new XMLHttpRequest;
reposRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let getRepos = JSON.parse(this.responseText);
        document.getElementById('repoOne').innerHTML = getRepos[0].name;
        document.getElementById('repoTwo').innerHTML = getRepos[1].name;
    }
};
reposRequest.open("GET", "https://api.github.com/users/SavvyXavi/repos", true);
reposRequest.send();