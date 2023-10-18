const main = document.querySelector("main");
const languages = document.querySelector(".languages");
const section = document.querySelectorAll("section");
const featured = document.querySelector(".featured");

/* const isActive = (k) => {
  if (k) {
    console.log(k);
  }
}; */

const push = (item) => {
  if (item !== "") {
    item.forEach((n) => {
      const div = document.createElement("div");
      div.classList.add("languages");
      div.textContent = n;
    });
  }

  /* item.forEach((n) => {
    // console.log(n);
    const div = document.createElement("div");
    div.textContent = n;
    div.classList.add("languages");
    section.forEach((k) => k.append("div"));
    // console.log(div);
  }); */
};

const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    tools: ["HTML", "CSS", "JavaScript"],
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

data.forEach((n, i) => {
  const section = document.createElement("section");
  section.innerHTML = `<div class="course">
  <div class="logo">
    <img src= ${n.logo} alt="Photosnap" />
  </div>
  <div class="details">
    <div class="quality">
      <div class="class">${n.company}</div>
        <div class="new"> ${n.new}</div>
      <div class="featured">${n.featured}</div>
    </div>
    <p class="title">${n.position}</p>
    <div class="time">
      <p class="postedTime">${n.postedAt}</p>
      <div class="dot"></div>
      <p class="duration">${n.contract}</p>
      <div class="dot"></div>
      <p class="country">${n.location}</p>
    </div>
  </div>
</div>
<div class="tools">
  <div class="role">${n.role}</div>
  <div class="level">${n.level}</div>
  <div class="languages">${push(n.languages)}</div>
  <div class="tools">${n.tools}</div>
</div>`;
  main.append(section);
});
