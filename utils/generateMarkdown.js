function generateMarkdown(data) {
  // license badge rendering function. displays badge at top of README based on the license chosen

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

  // template for README begins here.

  let markdownTemplate = `# ${data.title}

${licenseBadge}

## Description

${data.description}
    `;

  let tableOfContents = `
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#test)
- [Contributing](#contributing)
- [Questions](#questions)
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

  let testSection = `
## <a name="test"></a> Tests

${data.test}
`;
  markdownTemplate += testSection;

  let contributorsSection = `
 ## <a name="contributing"></a> Contributing
  
${data.contributing}
`;
  markdownTemplate += contributorsSection;

  let questionSection = `
## <a name="questions"></a> Questions
  
For more information, head to https://github.com/${data.github}.
Or if you have any questions, contact me at ${data.email}.
`;
  markdownTemplate += questionSection;

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
