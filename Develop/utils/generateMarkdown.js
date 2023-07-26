// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseChosen = `${data.license}`;
  let licenseBadge = "";

  if (licenseChosen == "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  if (licenseChosen == "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

  if (licenseChosen == "ISC") {
    licenseBadge =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }

  if (licenseChosen == "BSD-3") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }

  if (licenseChosen == "BSD-2") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }

  if (licenseChosen == "Creative Commons") {
    licenseBadge =
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  }

  let markdownTemplate = `# ${data.title}

${licenseBadge}

## Description

${data.description}
    `;

  let tableOfContents = `
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
`;

  if (data.contents == true) {
    markdownTemplate += tableOfContents;
  }

  let installSection = `
## <a name="installation"></a> Installation

${data.install}
  `;
  markdownTemplate += installSection;

  let usageSection = `
## <a name="usage"></a> Usage

${data.usage}
  `;
  markdownTemplate += usageSection;

  let creditSection = `
## <a name="credits"></a> Credits

${data.credit}
  `;
  markdownTemplate += creditSection;

  let licenseSection = `
## <a name="license"></a> License
  
Licensed under the ${licenseChosen} license.`;
  markdownTemplate += licenseSection;

  return markdownTemplate;
}

module.exports = generateMarkdown;
