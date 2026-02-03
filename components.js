const header = `
    <ul>
        <li><a href = "https://github.com/jakub-szw"><span>Github <img alr = "githubLogo" src = images/githubLogo.png ></span></a></li>
        <li><a href = "https://www.linkedin.com/in/jakub-szwedo-bbb06b381/"><span>Linkedin <img alr = "linkedinLogo" src = images/linkedinLogo.png ></span></a></li>
        <li><a href = "#blog-container" class=""button"><span>Blogs</span></a>
        <li><a href = "/main_resume.pdf"><span>Resume</span></a></li>
    </ul>
`;

document.getElementById('info-links').innerHTML = header;

const foother = `
    <h2>Contact Information</h2>
    <ul>
        <address>
        <li>Email Address: <a href = "mailto:jakubszwedo26+website@gmail.com">jakubszwedo26@gmail.com</a></li>
        </address>
    </ul>
`;

document.getElementById('footer-links').innerHTML = foother;