const mustache = require('mustache');
const fs = require('fs');

const techStack = require("./data/techStack")
const contact = require("./data/contact")

const DIR = './template/main.mustache';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  second: '2-digit',
  hour12: true
};

const DATA = {
  name: 'ryan',
  role: '👨‍💻 full-stack developer',
  stack: techStack,
  contact: contact,
  location: '🇸🇬 Singapore',
  updatedAt: new Date().toLocaleString('en-SG', dateOptions) + " (SG Time)"
};


function generateReadMe() {
  fs.readFile(DIR, (err, data) => {
    if (err) throw err;
    const output = mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();